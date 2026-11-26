# THAI HELI-VFR EFB

Electronic Flight Bag สำหรับวางแผนและบิน VFR เฮลิคอปเตอร์ในประเทศไทย — ทำเป็น **Progressive Web App (PWA)** ติดตั้งบนสมาร์ทโฟน แท็บเล็ต และคอมพิวเตอร์ได้ และใช้งานออฟไลน์ได้

## ความสามารถ
- **แผนบิน** — ค้นหา ICAO / VOR / VFR Reporting Point / พิกัด (DD, DDM, DMS), ลากจุดบนแผนที่, Navlog แก้ลม (TC/MH/GS/ETE/ETA/Fuel/MSA), โปรไฟล์ภูมิประเทศ
- **น้ำมัน/น้ำหนัก** — Fuel plan ตาม ICAO Annex 6 Pt III, Weight vs MTOW, preset เฮลิคอปเตอร์
- **บรีฟ Go/No-Go** — เชื้อเพลิง, น้ำหนัก, ภูมิประเทศ, อากาศ, NOTAM ตามเส้นทาง, แสงกลางวัน, สแกนสิ่งกีดขวาง OSM, Checklist
- **ข้อมูลสด** — METAR/TAF (NOAA), ลมพยากรณ์ (Open-Meteo), เรดาร์ฝน (RainViewer), ภาพดาวเทียม (NASA GIBS), openAIP
- **โหมดบิน** — GPS: ระยะ/BRG/ETE/GS/XTE/น้ำมันคงเหลือ, หรี่จอกลางคืน, กันจอดับ
- **แอป** — ติดตั้งได้, ทำงานออฟไลน์, ดาวน์โหลดแผนที่ตามเส้นทาง, สำรอง/กู้คืนข้อมูล, ส่งออก/นำเข้า GPX, แจ้งเวอร์ชันใหม่, shortcut บนไอคอนแอป

## ติดตั้งบนอุปกรณ์
แอปต้องเปิดผ่าน **https** (เช่น GitHub Pages) จึงจะติดตั้งได้
- **iPhone / iPad**: เปิดใน Safari → ปุ่มแชร์ → "เพิ่มไปยังหน้าจอโฮม"
- **Android**: Chrome → ปุ่ม "ติดตั้ง" ในแอป หรือเมนู ⋮ → "ติดตั้งแอป"
- **Windows / macOS**: Chrome / Edge → ไอคอนติดตั้งที่ช่อง URL

## เผยแพร่ด้วย GitHub Pages
1. Settings → Pages → Source: **GitHub Actions**
2. Push เข้า `main` — workflow `.github/workflows/pages.yml` จะ deploy ให้อัตโนมัติ
3. เปิด `https://<user>.github.io/<repo>/` บนมือถือแล้วติดตั้ง

## พัฒนา
```bash
npm install
npm run build   # สร้าง css/app.css, vendor/, fonts/, icons/, sw.js (ต้อง build ใหม่ทุกครั้งที่แก้โค้ด เพื่ออัปเดตเวอร์ชัน service worker)
npm run serve   # http://localhost:8080
```
โครงสร้าง: `index.html` (UI), `js/app.js` (ตรรกะทั้งหมด — build จะสร้างสำเนาชื่อตาม hash ใน `assets/`), `css/app.src.css` (Tailwind source), `scripts/sw.template.js` (service worker), `scripts/build.mjs`

> ⚠️ ใช้ประกอบการวางแผนเท่านั้น ไม่ใช่แหล่งข้อมูลการบินอย่างเป็นทางการ ตรวจสอบกับ AIP Thailand, NOTAM, ข้อมูลอุตุนิยมวิทยา และ RFM ทุกครั้ง
