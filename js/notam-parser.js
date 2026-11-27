/* NOTAM list parser — shared by the app (bundled into assets/app.<hash>.js by the build) and by
   scripts/fetch-notam.mjs, which the "Update NOTAM" GitHub Action runs to turn AEROTHAI's
   "NOTAM LIST SERIES J" PDF into data/notam-j.json. Handles ICAO-format NOTAMs (Q/A/B/C/D/E/F/G)
   and AEROTHAI list entries ("J6612/26  2609100000/2612081100  DAILY 0000-1100 ..."). */
(function (root) {
  const fmt = n => Math.round(n).toLocaleString("en-US");
  function parseNotamCoords(text) {
    const re = /(\d{2})(\d{2})(\d{2}(?:\.\d+)?)([NS])\s*(\d{3})(\d{2})(\d{2}(?:\.\d+)?)([EW])/g; const pts = []; let m;
    while ((m = re.exec(text || ""))) { let la = +m[1] + m[2] / 60 + m[3] / 3600, lo = +m[5] + m[6] / 60 + m[7] / 3600; if (m[4] === "S") la = -la; if (m[8] === "W") lo = -lo; pts.push([la, lo]); }
    return pts;
  }
  const NOTAM_EVENT_TH = [[/PARAGLID/, "ร่มร่อน (Paragliding)"], [/FIREWORK/, "จุดดอกไม้ไฟ"], [/SKY LANTERN|KHOM LOY/, "ปล่อยโคมลอย"], [/AERIAL PHOTO|AERIAL SURVEY/, "ถ่ายภาพ/สำรวจทางอากาศ"], [/PAPI FLTCK|FLT ?CK|FLIGHT CHECK/, "บินตรวจสอบเครื่องช่วยเดินอากาศ"], [/MIL AIR EXER|AIR EXER/, "ฝึกทางอากาศทางทหาร"], [/BALLOON/, "บอลลูน"], [/AIR ?SHOW|AEROBATIC/, "แสดงการบิน"], [/LASER/, "แสงเลเซอร์"]];
  const NOTAM_CAT_TH = { "UAV/DRONE": "UAV", PJE: "กระโดดร่ม (PJE)", RESTRICTED: "พื้นที่หวงห้ามชั่วคราว", "MIL/FIRING": "ฝึก/ยิงอาวุธ", "OPS/EVENT": "" };
  const NOTAM_ID_RE = /\b([A-Z]\d{4}\/\d{2})\b/g;
  const altFt = s => { if (!s) return null; const t = s.toUpperCase(); let m = t.match(/FL\s*(\d{2,3})/); if (m) return +m[1] * 100; m = t.match(/(\d[\d,]*)\s*(?:FT|FEET)/); if (m) return +m[1].replace(/,/g, ""); if (/\b(GND|SFC)\b/.test(t)) return 0; if (/UNL/.test(t)) return 99999; return null; };
  const fmtAlt = s => { if (!s) return ""; const t = s.toUpperCase().replace(/\s+/g, " ").trim(); const m = t.match(/^(\d[\d,.]*)\s*(?:FT|FEET)\s*(AMSL|AGL|MSL)?/); return m ? `${fmt(+m[1].replace(/,/g, ""))} FT${m[2] ? " " + (m[2] === "MSL" ? "AMSL" : m[2]) : ""}` : t.replace(/^SFC$/, "GND"); };
  function notamCategory(q, text) {
    const s = (q || "").slice(1, 3), t = text.toUpperCase();
    if (/UAV|UNMANNED|DRONE|RPAS/.test(t) || s === "WU") return "UAV/DRONE";
    if (/\bPJE\b|PARACHUT/.test(t) || s === "WP") return "PJE";
    if (/FIRING|FRNG|\bGUN|MISSILE|ROCKET|EXPLOSI|BOMB|MIL(ITARY)?( AIR)? EXER|LIVE FIRE/.test(t) || s === "WM") return "MIL/FIRING";
    if (/RESTRICTED|PROHIBITED|DANGER AREA|\bVT ?[RPD] ?\d+\b/.test(t) || /^R[TRPD]$/.test(s)) return "RESTRICTED";
    return "OPS/EVENT";
  }
  function parseNotamText(raw) {
    const text = String(raw || "").replace(/\r/g, "").split("\n")
      .map(l => l.replace(/Page \d+ of \d+/i, "").replace(/THAILAND INTERNATIONAL NOTAM OFFICE/i, ""))
      .filter(l => !/NOTAM LIST|(still|were still) valid on|REFERENCE NO\.|TELEPHONE\s*:|^\s*AFS\s*:|FACSIMILE|E\s*-?\s*MAIL\s*:|WWW\.AEROTHAI|AEROTHAI\s*:|SUPERSEDED BY AIP|AERONAUTICAL (INFORMATION|RADIO)|NGAMDU|BANGKOK 10120|INTERNATIONAL NOTAM OFFICE|^\s*(THAILAND|SERIES [A-Z]|\d{2}\/\d{2}|\d{1,2} [A-Z]{3} \d{4})\s*$/i.test(l))
      .join("\n").replace(/[ \t ]+/g, " ");
    // AEROTHAI lists group NOTAMs under location headers such as "VTBD (BANGKOK/DON MUEANG INTL AIRPORT)"
    const heads = [...text.matchAll(/(?:^|\n)\s*(VT[A-Z]{2}) \((?:[^()\n]|\([^()\n]*\))*\)\s*(?=\n|$)/g)].map(h => ({ at: h.index, end: h.index + h[0].length, icao: h[1] }));
    const starts = []; let m; NOTAM_ID_RE.lastIndex = 0;
    while ((m = NOTAM_ID_RE.exec(text))) { if (/NOTAM[RC]\s*$/.test(text.slice(Math.max(0, m.index - 10), m.index))) continue; starts.push(m.index); }
    const out = [], cancelled = new Set(), seen = new Set();
    starts.forEach((st, i) => {
      const nextHead = heads.find(h => h.at > st), stop = Math.min(starts[i + 1] ?? text.length, nextHead ? nextHead.at : text.length);
      const seg = text.slice(st, stop).trim(), id = seg.match(/^[A-Z]\d{4}\/\d{2}/)[0], flat = seg.replace(/\s*\n\s*/g, " ");
      const secIcao = (heads.filter(h => h.end <= st).pop() || {}).icao;
      if (seen.has(id)) return; seen.add(id);
      const c = flat.match(/NOTAMC\s+([A-Z]\d{4}\/\d{2})/); if (c) { cancelled.add(c[1]); return; }
      const q = flat.match(/Q\)\s*([A-Z]{4})\/(Q[A-Z]{4})\/[^/]*\/[^/]*\/[^/]*\/(\d{3})\/(\d{3})\/(\d{2})(\d{2})([NS])(\d{3})(\d{2})([EW])(\d{3})/);
      const a = flat.match(/\bA\)\s*([A-Z]{4})/), b = flat.match(/\bB\)\s*(\d{10})/), cc = flat.match(/\bC\)\s*(\d{10}|PERM)/);
      let from = b && b[1], to = cc && cc[1];
      if (!from) { const v = flat.match(/(\d{10})\s*(?:\/|-|–|TO)\s*(\d{10}|PERM)/); if (v) { from = v[1]; to = v[2]; } }
      const field = k => { const r = flat.match(new RegExp(`\\b${k}\\)\\s*(.*?)(?=\\s[A-G]\\)\\s|$)`)); return r ? r[1].trim() : ""; };
      let e = field("E"); const d = field("D"), f = field("F"), g = field("G");
      const ll = flat.match(/LOWER LIMIT\s*:\s*(.+?)\s+UPPER LIMIT\s*:\s*(.+?)\s*$/);
      let sched = "";
      if (!e) e = flat.replace(/LOWER LIMIT\s*:.*$/, "").replace(/^[A-Z]\d{4}\/\d{2}\s*(NOTAM[NR]\s*([A-Z]\d{4}\/\d{2})?)?/, "").replace(/(\d{10})\s*(?:\/|-|–|TO)\s*(\d{10}|PERM)(\s*EST)?/, "").replace(/^\s*VT[A-Z]{2}\s+(?=\d{10})/, "").trim();
      if (!b) { const first = seg.split("\n")[0], fv = first.match(/\d{10}\s*(?:\/|-|–|TO)\s*(?:\d{10}|PERM)(?:\s*EST)?\s*(.*)$/); if (fv && fv[1].trim() && !/LOWER LIMIT/.test(fv[1])) { sched = fv[1].trim(); const k = e.indexOf(sched); if (k >= 0) e = (e.slice(0, k) + e.slice(k + sched.length)).trim(); } }
      if (!b && !sched) { const sm = e.match(/^((?:DAILY|MON|TUE|WED|THU|FRI|SAT|SUN|H24|SR-SS)[A-Z0-9 ,-]*?(?:\d{4}-\d{4}|SS))(?:\s+)(?=[A-Z]{2,}[A-Z ]*[A-Z](?:\s|$))/); if (sm && !d) { sched = sm[1].trim(); e = e.slice(sm[0].length).trim(); } }
      if (!e && !q) return;
      const icao = (a && a[1]) || secIcao || (flat.match(/\b(VT[A-Z]{2})\b/) || [])[1] || (q && q[1]) || "VTBB";
      const category = notamCategory(q && q[2], e);
      const rm = e.match(/RADIUS\s+(\d+(?:\.\d+)?)\s*NM/i), radius = rm ? +rm[1] : q ? +q[11] : null;
      const tok = v => (String(v).toUpperCase().match(/GND|SFC|UNL|FL\s?\d{2,3}|\d[\d,.]*\s?FT(?:\s?(?:AMSL|AGL|MSL))?/) || [String(v).trim()])[0];
      const lim2 = ll ? [null, tok(ll[1]), tok(ll[2])] : !f && !g ? e.match(/\b(GND|SFC|\d[\d,]*\s*FT(?:\s*(?:AMSL|AGL|MSL))?)\s*(?:-|–|TO)\s*(\d[\d,]*\s*FT(?:\s*(?:AMSL|AGL|MSL))?|FL\s*\d{2,3}|UNL)/) : null;
      const lower = f || (lim2 && lim2[1]) || (q ? (+q[3] ? `FL${q[3]}` : "GND") : ""), upper = g || (lim2 && lim2[2]) || (q && +q[4] && +q[4] < 999 ? `FL${q[4]}` : "");
      const up = altFt(upper);
      const severity = /PARAGLID|FIREWORK|SKY LANTERN|KHOM LOY/.test(e) && category === "OPS/EVENT" ? "caution" : category === "RESTRICTED" || category === "MIL/FIRING" || category === "PJE" ? "critical" : category === "UAV/DRONE" ? (up == null || up > 1000 ? "critical" : up > 200 ? "caution" : "info") : "caution";
      const place = (e.match(/\(([A-Z][A-Z .'-]{3,60}(?:PROVINCE|DISTRICT|AREA))\)/) || [])[1];
      const area = e.match(/\bVT ?([RPD]) ?(\d+)\b/);
      const what = area ? `พื้นที่ ${{ R: "หวงห้าม", P: "ห้ามบิน", D: "อันตราย" }[area[1]]} VT ${area[1]}${area[2]} เปิดใช้งาน` : NOTAM_CAT_TH[category] || (NOTAM_EVENT_TH.find(([re]) => re.test(e)) || [])[1] || (e.match(/^(.{3,40}?)\s+WILL\b/) || [])[1] || e.split(/\s+/).slice(0, 4).join(" ");
      const lim = lower || upper ? ` (${fmtAlt(lower) || "GND"} - ${fmtAlt(upper) || "?"})` : "";
      const isPoly = parseNotamCoords(e).length >= 3;
      const title = area ? `${what}${lim}` : `${what} ${place ? place.toLowerCase().replace(/\b\w/g, x => x.toUpperCase()) : icao}${isPoly ? " — พื้นที่กำหนด" : radius ? ` — รัศมี ${radius} NM` : ""}${lim}`;
      const body = `${e.toUpperCase()}${d || sched ? ` ${d || sched}.` : ""}${lower || upper ? ` LOWER: ${lower || "-"} / UPPER: ${upper || "-"}.` : ""}`;
      const n = { id, series: `Series ${id[0]}`, icao, category, severity, title, body, valid: from ? `${from} - ${to || "PERM"}` : "PERM", imported: true };
      if (q) { let la = +q[5] + q[6] / 60, lo = +q[8] + q[9] / 60; if (q[7] === "S") la = -la; if (q[10] === "W") lo = -lo; n.geo = { lat: la, lon: lo, r: +q[11] || 1 }; }
      out.push(n);
    });
    return { list: out, cancelled: [...cancelled] };
  }

  // "The following NOTAM series J were still valid on 1 NOV 2026"
  function listDate(raw) { const m = String(raw || "").match(/still valid on\s+(\d{1,2}\s+[A-Z]{3}\s+\d{4})/i); return m ? m[1].toUpperCase() : null; }
  root.NotamParser = { parse: parseNotamText, listDate, parseNotamCoords };
  root.parseNotamText = parseNotamText;
})(typeof globalThis !== "undefined" ? globalThis : this);
