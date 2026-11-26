// Minimal static server for local testing:  npm run serve  →  http://localhost:8080
// (Service workers need http://localhost or https — opening index.html via file:// will not install the app.)
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PORT = +process.env.PORT || 8080;
const MIME = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json", ".webmanifest": "application/manifest+json", ".png": "image/png", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".ico": "image/x-icon" };

http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (p.endsWith("/")) p += "index.html";
  const f = path.join(ROOT, path.normalize(p));
  if (!f.startsWith(ROOT) || f.includes(`${path.sep}node_modules${path.sep}`) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end("not found"); }
  res.writeHead(200, { "Content-Type": MIME[path.extname(f)] || "application/octet-stream", "Cache-Control": p.endsWith("sw.js") ? "no-cache" : "max-age=60" });
  fs.createReadStream(f).pipe(res);
}).listen(PORT, () => console.log(`THAI HELI-VFR EFB → http://localhost:${PORT}`));
