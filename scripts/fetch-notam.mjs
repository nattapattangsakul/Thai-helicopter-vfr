// Downloads AEROTHAI's current "NOTAM LIST SERIES J" PDF, parses it with the same parser the app
// uses (js/notam-parser.js) and writes data/notam-j.json, which the app's "อัปเดต NOTAM" button reads.
// AEROTHAI does not allow browsers on other sites to fetch the PDF (CORS), so this runs in the
// "Update NOTAM" GitHub Action and the result is published with the site.
//   node scripts/fetch-notam.mjs            (exit 0; writes only when the list changed)
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PAGE = "https://www.aerothai.co.th/en/pilot/notam";
const OUT = path.join(ROOT, "data/notam-j.json");
const UA = { "User-Agent": "Mozilla/5.0 (compatible; thai-heli-vfr-notam/1.0)" };

vm.runInThisContext(fs.readFileSync(path.join(ROOT, "js/notam-parser.js"), "utf8"));
const { NotamParser } = globalThis;

async function get(url, type) {
  for (let i = 0; i < 4; i++) {
    try { const r = await fetch(url, { headers: UA }); if (!r.ok) throw new Error(`${r.status} ${url}`); return type === "buf" ? new Uint8Array(await r.arrayBuffer()) : await r.text(); }
    catch (e) { if (i === 3) throw e; await new Promise(res => setTimeout(res, 2000 * 2 ** i)); }
  }
}

async function pdfText(data) {
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const doc = await pdfjs.getDocument({ data, useSystemFonts: true, isEvalSupported: false }).promise; let txt = "";
  for (let i = 1; i <= doc.numPages; i++) {   // same line reconstruction as the in-app importer
    const c = await (await doc.getPage(i)).getTextContent(); let lastY = null;
    for (const it of c.items) { const y = it.transform ? it.transform[5] : null; if (lastY != null && y != null && Math.abs(y - lastY) > 2) txt += "\n"; else if (txt && !/\s$/.test(txt)) txt += " "; txt += it.str; if (it.hasEOL) txt += "\n"; lastY = y; }
    txt += "\n";
  }
  return txt;
}

const html = await get(PAGE);
const links = [...html.matchAll(/href="([^"]*SERIES%20J[^"]*\.pdf)"/gi)].map(m => new URL(m[1], PAGE).href);
if (!links.length) throw new Error("SERIES J link not found on " + PAGE);
const pdfUrl = links[0];
const text = await pdfText(await get(pdfUrl, "buf"));
const { list, cancelled } = NotamParser.parse(text);
const listDate = NotamParser.listDate(text);
if (list.length < 5) throw new Error(`only ${list.length} NOTAMs parsed — refusing to publish`);

const prev = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, "utf8")) : null;
const same = prev && prev.listDate === listDate && JSON.stringify(prev.list) === JSON.stringify(list);
if (same) { console.log(`unchanged: ${listDate} • ${list.length} NOTAMs`); process.exit(0); }
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify({ source: "AEROTHAI NOTAM LIST SERIES J", page: PAGE, pdf: pdfUrl, listDate, fetched: new Date().toISOString(), count: list.length, cancelled, list }, null, 1) + "\n");
console.log(`updated: ${listDate} • ${list.length} NOTAMs from ${pdfUrl}`);
