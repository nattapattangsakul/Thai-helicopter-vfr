/* THAI HELI-VFR EFB — service worker (generated from scripts/sw.template.js by `npm run build`) */
const VERSION = "468b588db4";
const SHELL = `thv-shell-${VERSION}`;
const TILES = "thv-tiles-v1";      // basemap tiles (also filled by "ดาวน์โหลดแผนที่ออฟไลน์")
const DATA = "thv-data-v1";        // last good API responses (METAR, forecast, elevation...)
const MAX_TILES = 8000;           // CORS tiles (Esri, CARTO, OSM, OpenTopoMap, GIBS)
const MAX_OPAQUE = 600;           // no-CORS tiles (Google) are counted heavily against quota — keep few
const PRECACHE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./css/app.css",
  "./css/fonts.css",
  "./js/app.js",
  "./vendor/leaflet/images/layers-2x.png",
  "./vendor/leaflet/images/layers.png",
  "./vendor/leaflet/images/marker-icon-2x.png",
  "./vendor/leaflet/images/marker-icon.png",
  "./vendor/leaflet/images/marker-shadow.png",
  "./vendor/leaflet/leaflet.css",
  "./vendor/leaflet/leaflet.js",
  "./vendor/lucide.min.js",
  "./fonts/ibm-plex-mono-latin-400-normal.woff2",
  "./fonts/ibm-plex-mono-latin-500-normal.woff2",
  "./fonts/ibm-plex-mono-latin-600-normal.woff2",
  "./fonts/ibm-plex-mono-latin-700-normal.woff2",
  "./fonts/ibm-plex-sans-thai-latin-400-normal.woff2",
  "./fonts/ibm-plex-sans-thai-latin-500-normal.woff2",
  "./fonts/ibm-plex-sans-thai-latin-600-normal.woff2",
  "./fonts/ibm-plex-sans-thai-latin-700-normal.woff2",
  "./fonts/ibm-plex-sans-thai-thai-400-normal.woff2",
  "./fonts/ibm-plex-sans-thai-thai-500-normal.woff2",
  "./fonts/ibm-plex-sans-thai-thai-600-normal.woff2",
  "./fonts/ibm-plex-sans-thai-thai-700-normal.woff2",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable.svg",
  "./icons/icon.svg",
  "./icons/maskable-192.png",
  "./icons/maskable-512.png"
];

const TILE_HOSTS = /(^|\.)(mt\d\.google\.com|server\.arcgisonline\.com|basemaps\.cartocdn\.com|tile\.opentopomap\.org|tile\.openstreetmap\.org|gibs\.earthdata\.nasa\.gov|api\.tiles\.openaip\.net)$/;
const DATA_HOSTS = /(^|\.)(api\.open-meteo\.com|aviationweather\.gov|api\.rainviewer\.com)$/;
const NO_CACHE_HOSTS = /(^|\.)(tilecache\.rainviewer\.com)$/;

self.addEventListener("install", e => {
  e.waitUntil(caches.open(SHELL).then(c => c.addAll(PRECACHE.map(u => new Request(u, { cache: "reload" })))));
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith("thv-shell-") && k !== SHELL) await caches.delete(k);
    if (self.registration.navigationPreload) try { await self.registration.navigationPreload.enable(); } catch (_) {}
    await self.clients.claim();
  })());
});

self.addEventListener("message", e => {
  if (e.data === "SKIP_WAITING" || e.data?.type === "SKIP_WAITING") self.skipWaiting();
  if (e.data?.type === "VERSION") e.source?.postMessage({ type: "VERSION", version: VERSION });
});

const OPAQUE = "thv-tiles-opaque-v1";
const trimming = {};
async function trim(name, max) {
  if (trimming[name]) return; trimming[name] = true;
  try { const c = await caches.open(name); const keys = await c.keys(); for (let i = 0; i < keys.length - max; i++) await c.delete(keys[i]); }
  finally { trimming[name] = false; }
}

async function tileStrategy(req) {
  const hit = await caches.match(req, { ignoreVary: true, cacheName: TILES }) || await caches.match(req, { ignoreVary: true, cacheName: OPAQUE });
  if (hit) return hit;
  try {
    // Upgrade <img> (no-cors) tile requests to CORS where the host allows it: CORS responses are
    // stored at their real size, opaque ones are padded heavily against the storage quota.
    let res = null;
    if (!/google\.com$/.test(new URL(req.url).hostname)) { try { res = await fetch(req.url, { mode: "cors", credentials: "omit" }); } catch (_) { res = null; } }
    if (!res) res = await fetch(req);
    if (res.ok) { (await caches.open(TILES)).put(req, res.clone()); if (Math.random() < .02) trim(TILES, MAX_TILES); }
    else if (res.type === "opaque") { (await caches.open(OPAQUE)).put(req, res.clone()); if (Math.random() < .05) trim(OPAQUE, MAX_OPAQUE); }
    return res;
  } catch (err) {
    return new Response("", { status: 504, statusText: "offline" });
  }
}

async function dataStrategy(req) {
  const c = await caches.open(DATA);
  try {
    const res = await fetch(req);
    if (res.ok) c.put(req, res.clone());
    return res;
  } catch (err) {
    const hit = await c.match(req);
    if (hit) { const h = new Headers(hit.headers); h.set("X-THV-Offline", "1"); return new Response(hit.body, { status: hit.status, headers: h }); }
    throw err;
  }
}

async function shellStrategy(e) {
  const req = e.request;
  if (req.mode === "navigate") {
    try {
      const pre = await e.preloadResponse; if (pre) return pre;
      const res = await fetch(req);
      if (res.ok) (await caches.open(SHELL)).put("./index.html", res.clone());
      return res;
    } catch (_) {
      return (await caches.match("./index.html", { ignoreSearch: true })) || (await caches.match("./"));
    }
  }
  const hit = await caches.match(req, { ignoreSearch: true });
  return hit || fetch(req);
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) return e.respondWith(shellStrategy(e));
  if (NO_CACHE_HOSTS.test(url.hostname)) return;
  if (TILE_HOSTS.test(url.hostname)) return e.respondWith(tileStrategy(req));
  if (DATA_HOSTS.test(url.hostname)) return e.respondWith(dataStrategy(req));
});
