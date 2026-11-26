// =========================================================================
// 1. THAILAND AVIATION DATASET (CAAT eAIP / AEROTHAI) — carried over from v1/v2
// =========================================================================
const AIRPORTS = [
  { icao: "VTBD", iata: "DMK", name: "Don Mueang Intl", nameTh: "ท่าอากาศยานดอนเมือง", lat: 13.9124, lon: 100.6040, elev: 9, type: "Intl Civil/Mil", runways: ["03L/21R (12,139 ft)", "03R/21L (11,483 ft)"], atc: { ATIS: "126.4", CDC: "127.7", SMC: "121.9", TWR: "118.1", DAR: "133.0", APP: "119.4 (Heli outside ATZ: 125.8)" }, heliNote: "Bangkok Control Zone: ปฏิบัติตาม VFR Helicopter Entry/Exit Corridor", navaids: [{ id: "BKK", type: "DVOR/DME", freq: "117.70", ch: "CH124X" }] },
  { icao: "VTBS", iata: "BKK", name: "Suvarnabhumi Intl", nameTh: "ท่าอากาศยานสุวรรณภูมิ", lat: 13.6924, lon: 100.7505, elev: 5, type: "Intl Civil", runways: ["01L/19R (13,123 ft)", "01R/19L (11,483 ft)", "02L/20R"], atc: { ATIS: "133.6", CDC: "128.7", SMC: "121.65", TWR: "118.2 (01/19) / 119.0 (02/20)", DEP: "119.25", ARR: "121.1", APP: "122.35 (Heli/BKK CTR: 125.8)" }, heliNote: "VFR Helipad ชั่วคราว (ฉุกเฉิน/การแพทย์) กึ่งกลาง RWY 01R/19L เฉพาะกลางวัน (HJ)", navaids: [{ id: "SVB", type: "DVOR/DME", freq: "111.40", ch: "CH51X" }] },
  { icao: "VTBU", iata: "UTP", name: "U-Tapao Rayong-Pattaya Intl", nameTh: "ท่าอากาศยานอู่ตะเภา", lat: 12.6797, lon: 101.0050, elev: 59, type: "Intl Civil/Navy", runways: ["18/36 (11,499 ft)"], atc: { ATIS: "127.2", GND: "121.9", TWR: "118.3", APP: "119.7" }, heliNote: "หลีกเลี่ยงการบินเหนือโรงแยกก๊าซมาบตาพุด; VFR เฉพาะกลางวัน", navaids: [{ id: "UTP", type: "DVOR/DME", freq: "110.80", ch: "CH45X" }] },
  { icao: "VTCC", iata: "CNX", name: "Chiang Mai Intl", nameTh: "ท่าอากาศยานเชียงใหม่", lat: 18.7690, lon: 98.9679, elev: 1036, type: "Intl Civil/Mil", runways: ["18/36 (11,155 ft)"], atc: { ATIS: "127.2", GND: "121.9", TWR: "118.1", APP: "129.6" }, heliNote: "ภูมิประเทศภูเขาสูงโดยรอบ ใช้จุดรอ KARAE สำหรับบริการเรดาร์ TMA", navaids: [{ id: "CMA", type: "DVOR/DME", freq: "116.90", ch: "CH116X" }] },
  { icao: "VTCT", iata: "CEI", name: "Mae Fah Luang Chiang Rai Intl", nameTh: "ท่าอากาศยานแม่ฟ้าหลวง เชียงราย", lat: 19.9543, lon: 99.8791, elev: 1280, type: "Intl Civil", runways: ["03/21 (9,843 ft)"], atc: { ATIS: "127.85", TWR: "118.4", APP: "120.05" }, heliNote: "ระวังเสาสื่อสารสูง 230 ft บริเวณใกล้สนามบิน", navaids: [{ id: "CTR", type: "DVOR/DME", freq: "116.50", ch: "CH112X" }] },
  { icao: "VTSP", iata: "HKT", name: "Phuket Intl", nameTh: "ท่าอากาศยานภูเก็ต", lat: 8.1053, lon: 98.3056, elev: 82, type: "Intl Civil", runways: ["09/27 (9,843 ft)"], atc: { ATIS: "128.0", CDC: "118.55", GND: "121.9", TWR: "118.1", ARR: "120.7", APP: "124.7" }, heliNote: "การจราจรหนาแน่น ประสานงานเส้นทาง VFR เลียบชายฝั่ง", navaids: [{ id: "PUT", type: "DVOR/DME", freq: "116.90", ch: "CH116X" }] },
  { icao: "VTSG", iata: "KBV", name: "Krabi Intl", nameTh: "ท่าอากาศยานกระบี่", lat: 8.0988, lon: 98.9828, elev: 82, type: "Intl Civil", runways: ["14/32"], atc: { ATIS: "132.4", GND: "121.9", TWR: "122.5", APP: "120.05" }, heliNote: "ระวังภูมิประเทศเขาหินปูนสูงชันรอบอ่าวพังงาและกระบี่", navaids: [] },
  { icao: "VTSM", iata: "USM", name: "Samui Intl", nameTh: "ท่าอากาศยานสมุย", lat: 9.5478, lon: 100.0622, elev: 65, type: "Intl Private", runways: ["17/35"], atc: { ATIS: "128.6", GND: "121.9", TWR: "118.9", APP: "129.6" }, heliNote: "เส้นทาง VFR เชื่อมต่อแผ่นดินใหญ่ผ่านจุด SMU VOR/DME", navaids: [{ id: "SMU", type: "DVOR/DME", freq: "117.60", ch: "CH123X" }, { id: "SM", type: "NDB", freq: "316 kHz", ch: "NDB" }] },
  { icao: "VTSB", iata: "URT", name: "Surat Thani Intl", nameTh: "ท่าอากาศยานสุราษฎร์ธานี", lat: 9.1344, lon: 99.1425, elev: 20, type: "Intl Civil/Mil", runways: ["04/22"], atc: { ATIS: "125.95", GND: "121.9", TWR: "122.7", APP: "123.35" }, heliNote: "ฐานบินร่วม กองบิน 7 และพาณิชย์", navaids: [{ id: "STN", type: "DVOR/DME", freq: "110.60", ch: "CH43X" }] },
  { icao: "VTSS", iata: "HDY", name: "Hat Yai Intl", nameTh: "ท่าอากาศยานหาดใหญ่", lat: 6.9365, lon: 100.3937, elev: 90, type: "Intl Civil/Mil", runways: ["08/26"], atc: { ATIS: "128.8", GND: "121.9", TWR: "118.1", APP: "126.7" }, heliNote: "ตรวจสอบสถานะ TACAN HTY ก่อนใช้งาน", navaids: [{ id: "HTY", type: "VOR/DME", freq: "115.30", ch: "CH100X" }] },
  { icao: "VTUD", iata: "UTH", name: "Udon Thani Intl", nameTh: "ท่าอากาศยานอุดรธานี", lat: 17.3869, lon: 102.7757, elev: 579, type: "Intl Civil/Mil", runways: ["12/30"], atc: { ATIS: "127.6", GND: "121.9", TWR: "122.5", APP: "126.2" }, heliNote: "ฐานบินร่วมทหารอากาศ (กองบิน 23) และพาณิชย์", navaids: [] },
  { icao: "VTPH", iata: "HHQ", name: "Hua Hin Airport", nameTh: "ท่าอากาศยานหัวหิน", lat: 12.6282, lon: 99.9528, elev: 62, type: "Domestic / VFR", runways: ["16/34 (6,890 ft)"], atc: { ATIS: "126.8", GND: "121.9", TWR: "122.7", APP: "126.2" }, heliNote: "ติดต่อ Hua Hin APP ที่ระยะ ~35 NM; VFR Exit RWY 34 ผ่านเขาวัง", navaids: [{ id: "HHN", type: "DVOR/DME", freq: "113.30", ch: "CH80X" }] },
  { icao: "VTBO", iata: "TDX", name: "Trat Airport", nameTh: "ท่าอากาศยานตราด", lat: 12.2811, lon: 102.3244, elev: 100, type: "Domestic", runways: ["05/23"], atc: { TWR: "122.9", APP: "120.25" }, heliNote: "เส้นทางบิน VFR เกาะช้าง/เกาะกูด", navaids: [] },
  { icao: "VTUK", iata: "KKC", name: "Khon Kaen Airport", nameTh: "ท่าอากาศยานขอนแก่น", lat: 16.4644, lon: 102.7866, elev: 670, type: "Domestic", runways: ["03/21"], atc: { ATIS: "126.85", GND: "121.9", TWR: "122.25", APP: "123.4" }, heliNote: "ศูนย์กลางการบินภาคอีสาน", navaids: [{ id: "KKN", type: "VOR/DME", freq: "114.90", ch: "CH96X" }] },
  { icao: "VTUU", iata: "UBP", name: "Ubon Ratchathani Airport", nameTh: "ท่าอากาศยานอุบลราชธานี", lat: 15.2471, lon: 104.8704, elev: 406, type: "Domestic Civil/Mil", runways: ["05/23"], atc: { GND: "121.9", TWR: "119.9", APP: "123.5" }, heliNote: "ฐานบินร่วม กองบิน 21", navaids: [{ id: "UBL", type: "DVOR/DME", freq: "112.70", ch: "CH74X" }, { id: "UB", type: "NDB", freq: "373 kHz", ch: "NDB" }] },
  { icao: "VTUO", iata: "BFV", name: "Buriram Airport", nameTh: "ท่าอากาศยานบุรีรัมย์", lat: 15.2279, lon: 103.2486, elev: 590, type: "Domestic", runways: ["04/22"], atc: { ATIS: "127.05", TWR: "118.05", APP: "125.55" }, heliNote: "สนามบินภูมิภาคอีสานใต้", navaids: [] },
  { icao: "VTUQ", iata: "NAK", name: "Nakhon Ratchasima Airport", nameTh: "ท่าอากาศยานนครราชสีมา", lat: 14.9537, lon: 102.3115, elev: 764, type: "Domestic", runways: ["06/24"], atc: { ATIS: "126.6", TWR: "119.8", APP: "123.6" }, heliNote: "ประสานงานเขตห้วงอากาศทหาร กองบิน 1", navaids: [] },
  { icao: "VTUV", iata: "ROI", name: "Roi Et Airport", nameTh: "ท่าอากาศยานร้อยเอ็ด", lat: 16.1094, lon: 103.7825, elev: 460, type: "Domestic", runways: ["18/36"], atc: { ATIS: "128.275", TWR: "119.75", APP: "125.4" }, heliNote: "สนามบินภูมิภาค", navaids: [] },
  { icao: "VTUI", iata: "SNO", name: "Sakon Nakhon Airport", nameTh: "ท่าอากาศยานสกลนคร", lat: 17.1967, lon: 104.1165, elev: 529, type: "Domestic", runways: ["05/23"], atc: { TWR: "119.65", APP: "123.35" }, heliNote: "สนามบินภูมิภาค", navaids: [] },
  { icao: "VTUW", iata: "KOP", name: "Nakhon Phanom Airport", nameTh: "ท่าอากาศยานนครพนม", lat: 17.3866, lon: 104.6605, elev: 587, type: "Domestic", runways: ["15/33"], atc: { GND: "121.9", TWR: "122.5", APP: "123.35" }, heliNote: "แนวชายแดนแม่น้ำโขง", navaids: [] },
  { icao: "VTUL", iata: "LOE", name: "Loei Airport", nameTh: "ท่าอากาศยานเลย", lat: 17.4457, lon: 101.7265, elev: 860, type: "Domestic", runways: ["01/19"], atc: { ATIS: "126.25", TWR: "118.35", APP: "122.55" }, heliNote: "ภูมิประเทศภูเขาล้อมรอบ", navaids: [] },
  { icao: "VTPB", iata: "PHY", name: "Phetchabun Airport", nameTh: "ท่าอากาศยานเพชรบูรณ์", lat: 16.6759, lon: 101.1906, elev: 450, type: "Domestic", runways: ["18/36"], atc: { TWR: "122.3", APP: "126.7" }, heliNote: "หุบเขาเพชรบูรณ์ ระวังเมฆต่ำและภูเขาซ้าย-ขวา", navaids: [] },
  { icao: "VTPP", iata: "PHS", name: "Phitsanulok Airport", nameTh: "ท่าอากาศยานพิษณุโลก", lat: 16.7717, lon: 100.2816, elev: 154, type: "Domestic Civil/Mil", runways: ["14/32"], atc: { ATIS: "127.4", GND: "121.9", TWR: "118.9", APP: "120.7" }, heliNote: "ฐานบินร่วม กองบิน 46", navaids: [{ id: "PSL", type: "DVOR/DME", freq: "114.10", ch: "CH88X" }, { id: "PL", type: "NDB", freq: "263 kHz", ch: "NDB" }] },
  { icao: "VTPO", iata: "THS", name: "Sukhothai Airport", nameTh: "ท่าอากาศยานสุโขทัย", lat: 17.2325, lon: 99.8205, elev: 180, type: "Domestic Private", runways: ["18/36"], atc: { TWR: "122.9", APP: "120.7" }, heliNote: "สนามบินบางกอกแอร์เวย์ส", navaids: [] },
  { icao: "VTPT", iata: "TKT", name: "Tak Airport", nameTh: "ท่าอากาศยานตาก", lat: 16.8982, lon: 99.2538, elev: 486, type: "Domestic", runways: ["09/27"], atc: { TWR: "118.8", APP: "120.7" }, heliNote: "จุดพัก/เติมน้ำมันภาคเหนือตอนล่าง", navaids: [] },
  { icao: "VTPM", iata: "MAQ", name: "Mae Sot Airport", nameTh: "ท่าอากาศยานแม่สอด", lat: 16.7025, lon: 98.5456, elev: 690, type: "Domestic", runways: ["09/27"], atc: { TWR: "118.35", APP: "120.65" }, heliNote: "เส้นทางข้ามแนวเทือกเขาถนนธงชัย", navaids: [] },
  { icao: "VTCL", iata: "LPT", name: "Lampang Airport", nameTh: "ท่าอากาศยานลำปาง", lat: 18.2776, lon: 99.5056, elev: 809, type: "Domestic", runways: ["18/36"], atc: { TWR: "122.3", APP: "119.3" }, heliNote: "แอ่งกะทะลำปาง ระวังหมอกควันช่วงแล้ง", navaids: [] },
  { icao: "VTCP", iata: "PRH", name: "Phrae Airport", nameTh: "ท่าอากาศยานแพร่", lat: 18.1317, lon: 100.1624, elev: 538, type: "Domestic", runways: ["01/19"], atc: { TWR: "118.6", APP: "120.1" }, heliNote: "สนามบินภูมิภาคภาคเหนือ", navaids: [] },
  { icao: "VTCN", iata: "NNT", name: "Nan Nakhon Airport", nameTh: "ท่าอากาศยานน่านนคร", lat: 18.8027, lon: 100.7848, elev: 686, type: "Domestic", runways: ["02/20"], atc: { TWR: "118.55", APP: "120.25" }, heliNote: "หุบเขาน่าน", navaids: [] },
  { icao: "VTCH", iata: "HGN", name: "Mae Hong Son Airport", nameTh: "ท่าอากาศยานแม่ฮ่องสอน", lat: 19.3005, lon: 97.9752, elev: 929, type: "Domestic", runways: ["11/29"], atc: { TWR: "122.3", APP: "126.2" }, heliNote: "ภูเขาสูงชันล้อมรอบ ตรวจสอบทัศนวิสัยก่อนเข้าหุบเขา", navaids: [] },
  { icao: "VTCI", iata: "PYY", name: "Pai Airport", nameTh: "ท่าอากาศยานปาย", lat: 19.3704, lon: 98.4359, elev: 1700, type: "Domestic", runways: ["12/30"], atc: { INFO: "NIL (Uncontrolled)" }, heliNote: "สนามบินบนพื้นที่สูง 1,700 ft MSL", navaids: [] },
  { icao: "VTCS", iata: "-", name: "Mae Sariang Airport", nameTh: "สนามบินแม่สะเรียง", lat: 18.1779, lon: 97.9305, elev: 750, type: "Domestic / STOL", runways: ["01/19"], atc: { INFO: "Uncontrolled (Non-AIP)" }, heliNote: "สนามบินขึ้น-ลงระยะสั้น", navaids: [] },
  { icao: "VTSE", iata: "CJM", name: "Chumphon Airport", nameTh: "ท่าอากาศยานชุมพร", lat: 10.7145, lon: 99.3589, elev: 19, type: "Domestic", runways: ["06/24"], atc: { ATIS: "128.45", TWR: "122.15", APP: "122.6" }, heliNote: "ประตูสู่ภาคใต้ฝั่งอ่าวไทย", navaids: [] },
  { icao: "VTSR", iata: "UNN", name: "Ranong Airport", nameTh: "ท่าอากาศยานระนอง", lat: 9.7738, lon: 98.5873, elev: 55, type: "Domestic", runways: ["02/20"], atc: { ATIS: "126.475", TWR: "122.25", APP: "125.1" }, heliNote: "ระวังฝนตกชุกและลมมรสุมฝั่งอันดามัน", navaids: [] },
  { icao: "VTSF", iata: "NST", name: "Nakhon Si Thammarat Airport", nameTh: "ท่าอากาศยานนครศรีธรรมราช", lat: 8.5399, lon: 99.9403, elev: 15, type: "Domestic", runways: ["01/19"], atc: { ATIS: "123.4", GND: "121.9", TWR: "122.55", APP: "119.75" }, heliNote: "ฐานสนับสนุนการบินอ่าวไทยตอนล่าง", navaids: [] },
  { icao: "VTST", iata: "TST", name: "Trang Airport", nameTh: "ท่าอากาศยานตรัง", lat: 7.5113, lon: 99.6153, elev: 50, type: "Domestic", runways: ["08/26"], atc: { ATIS: "134.5", TWR: "118.4", APP: "125.3" }, heliNote: "สนามบินภูมิภาคฝั่งอันดามัน", navaids: [] },
  { icao: "VTSC", iata: "NAW", name: "Narathiwat Airport", nameTh: "ท่าอากาศยานนราธิวาส", lat: 6.5231, lon: 101.7487, elev: 18, type: "Domestic", runways: ["02/20"], atc: { GND: "121.9", TWR: "122.7", APP: "125.55" }, heliNote: "ชายฝั่งอ่าวไทยตอนล่าง", navaids: [] },
  { icao: "VTSK", iata: "PAN", name: "Pattani Airport", nameTh: "สนามบินปัตตานี", lat: 6.7850, lon: 101.1476, elev: 10, type: "Domestic / Mil", runways: ["06/24"], atc: { INFO: "Pattani Info (Non-AIP)" }, heliNote: "ปฏิบัติการบินด้านความมั่นคงและภูมิภาค", navaids: [] },
  { icao: "VTSY", iata: "BTZ", name: "Betong Airport", nameTh: "ท่าอากาศยานเบตง", lat: 5.7865, lon: 101.1473, elev: 750, type: "Domestic", runways: ["11/29"], atc: { ATIS: "128.5", GND: "122.15", TWR: "124.15", APP: "125.55" }, heliNote: "หุบเขาเบตง ระวังหมอกเช้า", navaids: [] },
  { icao: "VTBK", iata: "KDT", name: "Kamphaeng Saen Airport", nameTh: "สนามบินกำแพงแสน", lat: 14.0973, lon: 99.9214, elev: 33, type: "RTAF Training", runways: ["03/21"], atc: { GND: "121.75", TWR: "237.5", APP: "127.75" }, heliNote: "เขตฝึกบินโรงเรียนการบิน ทอ.; ระวังภูมิประเทศภูเขา RDL 270-319", navaids: [{ id: "KPS", type: "DVOR/DME", freq: "114.50", ch: "CH92X" }] },
  { icao: "VTBL", iata: "KKM", name: "Khok Kathiam AFB", nameTh: "สนามบินโคกกระเทียม (ลพบุรี)", lat: 14.8747, lon: 100.6631, elev: 98, type: "RTAF / Army Helipad", runways: ["05/23"], atc: { GND: "121.75", TWR: "122.6" }, heliNote: "ศูนย์การบินทหารบก / ฐานบินหลักเฮลิคอปเตอร์", navaids: [] },
  { icao: "VTPI", iata: "TKH", name: "Takhli AFB", nameTh: "ฐานบินตาคลี", lat: 15.2773, lon: 100.2959, elev: 108, type: "RTAF", runways: ["18/36"], atc: { ATIS: "253.0", GND: "121.75", TWR: "133.25", DEP: "134.1", ARR: "124.0" }, heliNote: "ฐานบินทหารอากาศ กองบิน 4 (PPR)", navaids: [] },
  { icao: "VTUN", iata: "-", name: "Korat RTAFB", nameTh: "ฐานบินโคราช (กองบิน 1)", lat: 14.9310, lon: 102.0762, elev: 728, type: "RTAF", runways: ["06/24"], atc: { ATIS: "134.8", GND: "121.75", TWR: "122.2", DEP: "134.1", ARR: "129.75" }, heliNote: "ฐานบินทหารอากาศ กองบิน 1", navaids: [] },
  { icao: "VTBP", iata: "-", name: "Prachuap Khiri Khan AFB", nameTh: "สนามบินประจวบคีรีขันธ์ (กองบิน 5)", lat: 11.7884, lon: 99.8046, elev: 20, type: "RTAF", runways: ["08/26", "18/36"], atc: { TWR: "135.9" }, heliNote: "เขตฝึกบินทหารอากาศ กองบิน 5", navaids: [] },
  { icao: "VTBT", iata: "-", name: "Bang Phra Airport", nameTh: "สนามบินบางพระ (ศรีราชา)", lat: 13.2333, lon: 100.9579, elev: 90, type: "GA / Flying Club", runways: ["05/23"], atc: { TWR: "Bang Phra Traffic" }, heliNote: "Thai Flying Club — สนามบินฝึกบิน GA", navaids: [] },
  { icao: "VTPR", iata: "-", name: "Photharam Airport", nameTh: "สนามบินโพธาราม (ราชบุรี)", lat: 13.6702, lon: 99.7339, elev: 88, type: "GA / Airpark", runways: ["03/21"], atc: { TWR: "Photharam Traffic" }, heliNote: "สนามบินการบินทั่วไปและฝึกบิน", navaids: [] },
  { icao: "VTPN", iata: "-", name: "Nakhon Sawan Airport", nameTh: "สนามบินนครสวรรค์", lat: 15.6720, lon: 100.1355, elev: 110, type: "GA / Gov", runways: ["03/21"], atc: { TWR: "Nakhon Sawan Info" }, heliNote: "ศูนย์ปฏิบัติการฝนหลวงและการบินเกษตร", navaids: [] },
  { icao: "VTPY", iata: "-", name: "Bhumibol Dam Airport", nameTh: "สนามบินเขื่อนภูมิพล", lat: 17.2336, lon: 99.0569, elev: 500, type: "EGAT / Utility", runways: ["15/33"], atc: { TWR: "Uncontrolled" }, heliNote: "สนามบินการไฟฟ้าฝ่ายผลิตฯ", navaids: [] },
  { icao: "VTCM", iata: "-", name: "Ban Thi (Lanna) Airfield", nameTh: "สนามบินบ้านธิ (ล้านนา)", lat: 18.6765, lon: 99.1027, elev: 1050, type: "GA / Flying Club", runways: ["16/34"], atc: { TWR: "Lanna Traffic" }, heliNote: "สนามบิน GA ใกล้เชียงใหม่", navaids: [] },
  { icao: "VTCY", iata: "-", name: "Nok Airfield", nameTh: "สนามบินนก (บ้านธิ)", lat: 18.6767, lon: 99.1115, elev: 1050, type: "GA / Flying Club", runways: ["16/34"], atc: { TWR: "Nok Traffic" }, heliNote: "ชมรมการบินนก", navaids: [] },
  { icao: "VTCO", iata: "-", name: "Lamphun Airport", nameTh: "สนามบินลำพูน (เครือสหพัฒน์)", lat: 18.5473, lon: 99.0122, elev: 980, type: "Private / GA", runways: ["18/36"], atc: { TWR: "Uncontrolled" }, heliNote: "สนามบินส่วนบุคคล", navaids: [] },
  { icao: "VTCR", iata: "-", name: "Old Chiang Rai Airport", nameTh: "สนามบินเชียงรายเก่า", lat: 19.8834, lon: 99.8266, elev: 1300, type: "RTAF / GA", runways: ["01/19"], atc: { TWR: "Uncontrolled" }, heliNote: "ฐานบินเก่าในตัวเมืองเชียงราย", navaids: [] },
  { icao: "VTCB", iata: "-", name: "Chiang Kham Airport", nameTh: "สนามบินเชียงคำ (พะเยา)", lat: 19.4998, lon: 100.2842, elev: 1250, type: "RTA", runways: ["04/22"], atc: { TWR: "Uncontrolled" }, heliNote: "สนามบินกองทัพบก", navaids: [] },
  { icao: "VTPU", iata: "UTR", name: "Uttaradit Airport", nameTh: "สนามบินอุตรดิตถ์", lat: 17.6736, lon: 100.2347, elev: 260, type: "Closed / Helipad", runways: ["05/23"], atc: { TWR: "Closed" }, heliNote: "ปิดใช้งานทางวิ่งหลัก (ใช้สังเกตการณ์ VFR)", navaids: [] },
  { icao: "VTBE", iata: "-", name: "Pak Phreaw Airport", nameTh: "สนามบินปากเพรียว (สระบุรี)", lat: 14.5134, lon: 100.9180, elev: 65, type: "RTA", runways: ["06/24"], atc: { TWR: "Uncontrolled" }, heliNote: "สนามบินทหารบก สระบุรี", navaids: [] },
  { icao: "VTBI", iata: "-", name: "Prachin Buri Airport", nameTh: "สนามบินปราจีนบุรี", lat: 14.0778, lon: 101.3799, elev: 45, type: "RTA", runways: ["05/23"], atc: { TWR: "Uncontrolled" }, heliNote: "สนามบินทหารบก ปราจีนบุรี", navaids: [] },
  { icao: "VTZ3", iata: "-", name: "Kabinburi Airport", nameTh: "สนามบินกบินทร์บุรี", lat: 14.0199, lon: 101.7023, elev: 75, type: "Private / GA", runways: ["05/23"], atc: { TWR: "Uncontrolled" }, heliNote: "สนามบินเครือสหพัฒน์ กบินทร์บุรี", navaids: [] },
  { icao: "VTBW", iata: "-", name: "Watthana Nakhon Airport", nameTh: "สนามบินวัฒนานคร (สระแก้ว)", lat: 13.7688, lon: 102.3155, elev: 200, type: "RTAF", runways: ["05/23"], atc: { TWR: "Uncontrolled" }, heliNote: "ฐานบินทหารอากาศ วัฒนานคร", navaids: [] },
  { icao: "VTBC", iata: "-", name: "Chanthaburi Airstrip", nameTh: "สนามบินท่าใหม่ (จันทบุรี)", lat: 12.6303, lon: 102.0260, elev: 35, type: "RTN", runways: ["04/22"], atc: { TWR: "Uncontrolled" }, heliNote: "สนามบินกองทัพเรือ ท่าใหม่", navaids: [] },
  { icao: "VTBV", iata: "-", name: "Koh Takian Airport", nameTh: "สนามบินเกาะตะเคียน (ตราด)", lat: 12.2542, lon: 102.5185, elev: 30, type: "RTAF", runways: ["05/23"], atc: { TWR: "Uncontrolled" }, heliNote: "สนามบินทหารอากาศ ตราด", navaids: [] },
  { icao: "VTUJ", iata: "PXR", name: "Surin Airport", nameTh: "สนามบินสุรินทร์ภักดี", lat: 14.8683, lon: 103.4983, elev: 480, type: "RTA / DOA", runways: ["02/20"], atc: { TWR: "Surin Info" }, heliNote: "สนามบินสุรินทร์ภักดี", navaids: [] },
  { icao: "VTUR", iata: "-", name: "Rob Muang Airport", nameTh: "สนามบินรอบเมือง (ร้อยเอ็ด)", lat: 16.0704, lon: 103.6459, elev: 450, type: "RTA", runways: ["17/35"], atc: { TWR: "Uncontrolled" }, heliNote: "สนามบินทหารบก ร้อยเอ็ด", navaids: [] },
  { icao: "VTSN", iata: "-", name: "Cha-ian Airport", nameTh: "สนามบินชะเอียน (นครศรีฯ)", lat: 8.4694, lon: 99.9558, elev: 20, type: "RTA", runways: ["01/19"], atc: { TWR: "Cha-ian TWR" }, heliNote: "กองทัพภาคที่ 4 สนามบินชะเอียน", navaids: [] },
  { icao: "VTSH", iata: "SGZ", name: "Songkhla Airport", nameTh: "สนามบินสงขลา", lat: 7.1865, lon: 100.6081, elev: 12, type: "RTN", runways: ["13/31"], atc: { TWR: "Songkhla TWR" }, heliNote: "ฐานทัพเรือสงขลา (ปฏิบัติการเฮลิคอปเตอร์นอกชายฝั่ง)", navaids: [] },
  { icao: "VTSW", iata: "-", name: "Phuket Airpark", nameTh: "ภูเก็ตแอร์พาร์ค", lat: 8.0197, lon: 98.4015, elev: 40, type: "GA / Airpark", runways: ["13/31"], atc: { TWR: "Airpark Traffic" }, heliNote: "สนามบิน GA ภูเก็ต (ป่าคลอก)", navaids: [] }
];

// [id, name, freq, ch, hours, lat, lon, elev, icao]
// ILS / localizer data — compiled from CAAT eAIP AD 2.19 extracts and approach charts (various AIRAC cycles)
// plus community references where noted. Frequencies MUST be verified against the current AIRAC before use.
// freq null = ILS published but frequency not confirmed — check the AIP chart.
const ILS = {
  VTBS: [{ rwy: "01R", id: "ISES", freq: "110.10" }, { rwy: "19L", id: "ISEN", freq: "110.50", ch: "CH42X" }, { rwy: "01L", id: "ISWS", freq: "109.10" }],
  VTBD: [{ rwy: "21R", id: "IBKK", freq: "109.30", cat: "CAT II" }, { rwy: "03L", id: "IBKD", freq: "109.70" }, { rwy: "21L", id: "IDMG", freq: "110.30" }],
  VTBU: [{ rwy: "18", id: "IBUT", freq: "111.90", note: "AIP 2025 (ฉบับเก่า 111.10)" }],
  VTCC: [{ rwy: "36", id: "ICMA", freq: "109.90" }],
  VTCT: [{ rwy: "03", id: null, freq: null }],
  VTSP: [{ rwy: "27", id: "IPKT", freq: "109.90", ch: "CH36X" }],
  VTSB: [{ rwy: "22", id: "ISTN", freq: "109.50", ch: "CH32X" }],
  VTSS: [{ rwy: "26", id: "IHTY", freq: "109.90" }],
  VTSG: [{ rwy: "32", id: "IKBI", freq: null }],
  VTUD: [{ rwy: "30", id: "IUDN", freq: "110.10" }],
  VTUU: [{ rwy: "23", id: "IUBL", freq: null }],
  VTPP: [{ rwy: "32", id: "IPSL", freq: null }]
};
AIRPORTS.forEach(a => { a.ils = ILS[a.icao] || []; });
const ilsStr = l => `ILS ${l.rwy}${l.id ? " " + l.id : ""} ${l.freq || "(ดูความถี่ใน AIP)"}${l.cat ? " " + l.cat : ""}`;
function navaidRows(ap, cls = "text-[12px]") {
  const rows = ap.navaids.map(n => `<div class="flex justify-between gap-2 ${cls} mono"><span class="text-sky-300">${esc(n.id)} ${esc(n.type)}</span><span>${esc(n.freq)} ${esc(n.ch)}</span></div>`);
  ap.ils.forEach(l => rows.push(`<div class="flex justify-between gap-2 ${cls} mono"><span class="text-fuchsia-300">ILS RWY ${esc(l.rwy)}${l.id ? " • " + esc(l.id) : ""}${l.cat ? " • " + l.cat : ""}</span><span class="${l.freq ? "" : "text-slate-500"}">${l.freq ? esc(l.freq) + " MHz" : "ดูใน AIP"}${l.ch ? " " + l.ch : ""}${l.note ? ` <span class="text-slate-500">${esc(l.note)}</span>` : ""}</span></div>`));
  return rows.length ? `<div class="space-y-0.5">${rows.join("")}</div>${ap.ils.length ? `<div class="text-[10px] text-slate-500">ข้อมูล ILS ตรวจกับ AIP/AIRAC ปัจจุบันก่อนใช้</div>` : ""}` : "";
}

const VOR_STATIONS = [
  ["BKK","BANGKOK","117.7","CH124X","H24",13.893611,100.596111,100,"VTBD"],
  ["SVB","SUVARNABHUMI","111.4","CH51X","H24",13.659028,100.731444,5,"VTBS"],
  ["BET","BETONG","113.1","CH78X","H24",5.785556,101.144167,800,"VTSY"],
  ["BRM","BURI RAM","117.2","CH119X","H24",15.239564,103.258775,600,"VTUO"],
  ["CMA","CHIANG MAI","116.9","CH116X","H24",18.766111,98.961111,1100,"VTCC"],
  ["CTR","CHIANG RAI","116.5","CH112X","H24",19.948889,99.883056,1300,"VTCT"],
  ["CMP","CHUM PHAE","112.9","CH76X","H24",16.635278,101.988889,900,"En-route"],
  ["CPN","CHUMPHON","110.0","CH37X","H24",10.711111,99.365556,18,"VTSE"],
  ["HTY","HAT YAI","115.3","CH100X","H24",6.934167,100.388056,100,"VTSS"],
  ["HHN","HUA HIN","113.3","CH80X","H24",12.634444,99.951111,100,"VTPH"],
  ["KPS","KAMPHAENG SAEN","114.5","CH92X","2300-1100",14.165556,99.954167,33,"VTBK"],
  ["KKN","KHON KAEN","114.9","CH96X","H24",16.470758,102.787797,700,"VTUK"],
  ["KRT","KHORAT","113.7","CH84X","H24",14.917222,102.139722,700,"VTUN"],
  ["KBI","KRABI","111.0","CH47X","H24",8.1075,98.9775,100,"VTSG"],
  ["LPN","LAMPANG","114.7","CH94X","H24",18.276667,99.502222,800,"VTCL"],
  ["LOY","LOEI","115.9","CH106X","H24",17.446944,101.723056,900,"VTUL"],
  ["MHS","MAE HONG SON","115.5","CH102X","H24",19.319722,97.912222,1800,"VTCH"],
  ["MST","MAE SOT","116.7","CH114X","H24",16.697778,98.541667,700,"VTPM"],
  ["NKP","NAKHON PHANOM","111.6","CH53X","H24",17.388333,104.638333,600,"VTUW"],
  ["NKR","NAKHON RATCHASIMA","110.2","CH39X","H24",14.946572,102.311208,765,"VTUQ"],
  ["NKS","NAKHON SI THAMMARAT","117.4","CH121X","H24",8.541667,99.946944,13,"VTSF"],
  ["NAN","NAN","115.7","CH104X","H24",18.809167,100.7825,700,"VTCN"],
  ["NTW","NARATHIWAT","116.3","CH110X","H24",6.527222,101.745278,100,"VTSC"],
  ["PCB","PHETCHABUN","115.4","CH101X","H24",16.676111,101.196667,500,"VTPB"],
  ["PSL","PHITSANULOK","114.1","CH88X","H24",16.770278,100.291389,200,"VTPP"],
  ["PAE","PHRAE","111.8","CH55X","H24",18.134167,100.166389,600,"VTCP"],
  ["PUT","PHUKET","116.9","CH116X","H24",8.113889,98.306944,100,"VTSP"],
  ["RAN","RANONG","113.4","CH81X","H24",9.778056,98.583611,100,"VTSR"],
  ["RYN","RAYONG","112.5","CH72X","H24",12.778611,101.676389,30,"En-route"],
  ["ROT","ROI-ET","111.2","CH49X","H24",16.116944,103.772222,500,"VTUV"],
  ["SKN","SAKON NAKHON","114.2","CH89X","H24",17.214167,104.136667,600,"VTUI"],
  ["SKL","SONGKHLA","113.5","CH82X","H24",7.188792,100.604197,12,"VTSH"],
  ["SMU","SAMUI","117.6","CH123X","H24",9.546944,100.061667,65,"VTSM"],
  ["STN","SURAT THANI","110.6","CH43X","H24",9.129444,99.134722,20,"VTSB"],
  ["TRN","TRANG","116.6","CH113X","H24",7.508889,99.626111,100,"VTST"],
  ["UBL","UBON","112.7","CH74X","H24",15.245278,104.865833,400,"VTUU"],
  ["UDN","UDON","114.3","CH90X","H24",17.384722,102.775,600,"VTUD"],
  ["BUT","U-TAPAO","110.8","CH45X","H24",12.666667,101.000556,59,"VTBU"]
].map(v => ({ id:v[0], name:v[1], type:"DVOR/DME", freq:v[2]+" MHz", ch:v[3], hours:v[4], lat:v[5], lon:v[6], elev:v[7], icao:v[8] }));

// [id, airport, heli, alt, name, lat, lon, note]
const VFR_REPORTING_POINTS = [
  ["HIN-KONG","VTBD (HELI)",1,1500,"HIN KONG",14.4083,100.8778,"R-030 / 35.2D BKK — Hin Kong Interchange, Phahonyothin Rd."],
  ["AYUTTHAYA","VTBD (HELI)",1,1500,"AYUTTHAYA",14.3522,100.5814,"R-359 / 27.5D BKK — Preedee-Thamrong Bridge, Pasak River"],
  ["SANAP-TUEP","VTBD (HELI)",1,1500,"SANAP TUEP",14.2883,100.8097,"R-028 / 27.0D BKK — PTT Innovation Institute, Wang Noi"],
  ["LAT-BUA-LUANG","VTBD (HELI)",1,1500,"LAT BUA LUANG",14.1689,100.2800,"R-312 / 24.5D BKK — Singha Beverage, Ladbualuang"],
  ["PRATUNAM-PHRA-IN","VTBD (HELI)",1,1000,"PRATUNAM PHRA IN",14.2014,100.6425,"R-005 / 16.8D BKK — Bang Pa-in Interchange"],
  ["BUENG-BA","VTBD (HELI)",1,1000,"BUENG BA",14.1308,100.8181,"R-042 / 19.3D BKK — Stadium near Wat Bueng Ba"],
  ["BANG-LUK-SUA","VTBD (HELI)",1,1500,"BANG LUK SUA",14.0528,101.0678,"R-070 / 29.0D BKK — East Helicopter VFR RP"],
  ["BANG-LEN","VTBD (HELI)",1,1500,"BANG LEN",14.0283,100.2733,"R-293 / 20.3D BKK — Scan Inter Solar Power Plant"],
  ["PATHUMTHANI","VTBD (HELI)",1,1000,"PATHUMTHANI",14.0322,100.5486,"R-341 / 8.7D BKK — Pathumthani Bridge"],
  ["LAM-LUK-KA","VTBD (HELI)",1,1000,"LAM LUK KA",13.9339,100.7086,"R-075 / 7.5D BKK — E Outer Ring x Lamlukka Rd."],
  ["BANG-NAM-PRIAO","VTBD (HELI)",1,1500,"BANG NAM PRIAO",13.8514,101.0494,"R-095 / 26.6D BKK — Bang Nam Priao Intersection"],
  ["DON-FAEK","VTBD (HELI)",1,1500,"DON FAEK",13.8511,100.2244,"R-263 / 21.7D BKK — Motorway Bridge, Tha Chin River"],
  ["10-NM-WEST","VTBD (HELI)",1,0,"10 NM WEST",13.9786,100.4383,"R-298 / 10.5D BKK — Pra-u-dom Canal"],
  ["BANG-KHU-WAT","VTBD (HELI)",1,0,"BANG KHU WAT",13.9742,100.5067,"Hwy 345 / Bang Khu Wat Interchange"],
  ["5-NM-WEST","VTBD (HELI)",1,0,"5 NM WEST",13.9708,100.5483,"R-331 / 5.5D BKK — Bangkradee"],
  ["3-NM-WEST","VTBD (HELI)",1,0,"3 NM WEST",13.9322,100.5492,"R-317 / 3.1D BKK — Supreme HQ"],
  ["3-NM-EAST","VTBD (HELI)",1,0,"3 NM EAST",13.8858,100.6494,"R-095 / 3.1D BKK — Chalong Rat Toll Plaza"],
  ["KOH-KRET","VTBD (HELI)",1,0,"KOH KRET",13.9247,100.4981,"R-289 / 6.0D BKK — Koh Kret"],
  ["MUEANG-THONG","VTBD (HELI)",1,0,"MUEANG THONG",13.9125,100.5483,"Muang Thong Thani"],
  ["TPAD","VTBD (HELI)",1,0,"TPAD",13.8597,100.6375,"R-131 / 3.1D BKK — Police Aviation Division"],
  ["11TH-INFANTRY","VTBD (HELI)",1,0,"11th INFANTRY",13.8567,100.5972,"R-179 / 2.2D BKK — 11th Infantry Regt, Bangkhen"],
  ["MINBURI","VTBD (HELI)",1,0,"MINBURI",13.8197,100.6764,"R-133 / 6.4D BKK — E Outer Ring x Ram Inthra"],
  ["BANG-YAI","VTBD (HELI)",1,0,"BANG YAI",13.8822,100.4156,"R-266 / 10.6D BKK — Kanchanapisek x Rattanathibet"],
  ["RAMA-V-BRIDGE","VTBD (HELI)",1,0,"RAMA V BRIDGE",13.8325,100.4950,"Rama V Bridge, Chao Phraya River"],
  ["CAVPAD","VTBD (HELI)",1,0,"CAVPAD",13.7714,100.5561,"R-201 / 7.6D BKK — Cavalry Helipad Sanampao"],
  ["HUAI-KHWANG","VTBD (HELI)",1,0,"HUAI KHWANG",13.7636,100.5881,"Huai Khwang Corridor"],
  ["KHLONG-CHAN","VTBD (HELI)",1,0,"KHLONG CHAN",13.7547,100.6206,"R-170 / 8.4D BKK — Rajamangala Stadium"],
  ["BANGKHAE","VTBD (HELI)",1,0,"BANGKHAE",13.7525,100.3431,"R-240 / 16.9D BKK — The Mall Bangkae"],
  ["BHUMIBOL-BRIDGE","VTBD (HELI)",1,1500,"BHUMIBOL BRIDGE",13.6639,100.5378,"Bhumibol Bridge, Chao Phraya River"],
  ["EKACHAI","VTBD (HELI)",1,1500,"EKACHAI",13.6269,100.3439,"R-223 / 21.7D BKK — Ekachai Golf Club"],
  ["PAKNAM","VTBD (HELI)",1,1000,"PAKNAM",13.5983,100.5989,"R-179 / 17.6D BKK — Samuthprakarn Learning Park"],
  ["SAMUT-SAKHON","VTBD (HELI)",1,1500,"SAMUT SAKHON",13.5500,100.2833,"R-221 / 27.5D BKK — Tha Chin River Delta"],
  ["BANGPU","VTBD (HELI)",1,1000,"BANGPU",13.5122,100.6622,"R-170 / 23.1D BKK — Sukta Bridge"],
  ["BANG-PAKONG","VTBD (HELI)",1,1500,"BANG PAKONG",13.4870,101.0022,"R-136 / 33.9D BKK — Devahastin Bridge"],
  ["KOH-SICHANG","VTBD (HELI)",1,1500,"KOH SICHANG",13.1508,100.8180,"23.6 NM SE BANGPU / 23.0 NM SSW BANG PAKONG"],
  ["TANGO-MIKE","VTSP (Phuket)",0,0,"TANGO MIKE (TM)",8.3917,98.2667,"R-352 / 17 NM PUT — Thai Muang (North Entry)"],
  ["KILO-KILO","VTSP (Phuket)",0,0,"KILO KILO (KK)",8.2667,98.3167,"R-360 / 9 NM PUT — Ban Khok Kloi (North Entry)"],
  ["PAPA-NOVEMBER","VTSP (Phuket)",0,0,"PAPA NOVEMBER (PN)",8.4417,98.5250,"R-033 / 24 NM PUT — Phang Nga (NE Entry)"],
  ["YANKEE-NOVEMBER","VTSP (Phuket)",0,0,"YANKEE NOVEMBER (YN)",8.1167,98.6167,"R-089 / 18 NM PUT — Ko Yao Noi (East Entry)"],
  ["ROMEO-CHARLIE","VTSP (Phuket)",0,0,"ROMEO CHARLIE (RC)",7.6000,98.3667,"R-174 / 31 NM PUT — Ko Racha Yai (South Entry)"],
  ["PAPA-KILO","VTSP (Phuket)",0,0,"PAPA KILO (PK)",7.8833,98.3917,"R-160 / 15 NM PUT — Phuket City (South Entry)"],
  ["VTCC-MAE-RIM","VTCC (Chiang Mai)",1,0,"MAE RIM",18.9158,98.942,"R-354 / 9.0D CMA — Helicopter Route (VMC)"],
  ["VTCC-MAE-JO","VTCC (Chiang Mai)",1,0,"MAE JO",18.8929,99.0106,"R-021 / 8.1D CMA — Helicopter Route (VMC)"],
  ["VTCC-PA-LAN","VTCC (Chiang Mai)",1,0,"PA LAN",18.8747,99.0516,"R-039 / 8.3D CMA — Helicopter Route (VMC)"],
  ["VTCC-SAN-NA-MENG","VTCC (Chiang Mai)",1,0,"SAN NA MENG",18.8293,99.0516,"R-055 / 6.4D CMA — Helicopter Route (VMC)"],
  ["VTCC-SAN-KLANG","VTCC (Chiang Mai)",1,0,"SAN KLANG",18.7698,99.0516,"R-068 / 5.2D CMA — Helicopter Route (VMC)"],
  ["VTCC-BO-SANG","VTCC (Chiang Mai)",1,0,"BO SANG",18.764,99.0814,"R-092 / 6.8D CMA — Helicopter Route (VMC)"],
  ["VTCC-TOT","VTCC (Chiang Mai)",1,0,"TOT",18.6943,99.0516,"R-131 / 6.7D CMA — Helicopter Route (VMC)"],
  ["VTCC-DOI-TI","VTCC (Chiang Mai)",1,0,"DOI TI",18.55,99.0516,"R-159 / 13.9D CMA — Helicopter Route (VMC)"],
  ["VTCC-TON-TONG","VTCC (Chiang Mai)",1,0,"TON TONG",18.5391,98.9777,"R-185 / 13.5D CMA — Helicopter Route (VMC)"],
  ["VTCC-THA-WANG-PRAO","VTCC (Chiang Mai)",1,0,"THA WANG PRAO",18.5307,98.8631,"R-203 / 15.1D CMA — Helicopter Route (VMC)"],
  ["VTCC-NAM-PRAE","VTCC (Chiang Mai)",1,0,"NAM PRAE",18.6892,98.8736,"R-228 / 6.8D CMA — Helicopter Route (VMC)"],
  ["VTCC-ROYAL-FLORA","VTCC (Chiang Mai)",1,0,"ROYAL FLORA",18.7471,98.9254,"R-242 / 2.3D CMA — Helicopter Route (VMC)"],
  ["VTPH-KHAO-WANG","VTPH (Hua Hin)",1,0,"Khao Wang",13.1053,99.9295,"R-358 / 28.3D HHN — On request"],
  ["VTPH-N-POINT","VTPH (Hua Hin)",1,0,"N POINT",12.8771,99.9181,"R-353 / 14.7D HHN — Compulsory (Helicopter)"],
  ["VTPH-K-POINT","VTPH (Hua Hin)",1,0,"K POINT",12.7099,99.8978,"R-326 / 5.5D HHN — Compulsory (Helicopter)"],
  ["VTPH-X-POINT","VTPH (Hua Hin)",1,0,"X POINT",12.5763,99.8678,"R-235 / 6.0D HHN — Compulsory (Helicopter)"],
  ["VTPH-P-POINT","VTPH (Hua Hin)",1,0,"P POINT",12.3936,99.883,"R-196 / 15.0D HHN — Compulsory (Helicopter)"],
  ["VTPH-SAM-ROI-YOT","VTPH (Hua Hin)",1,0,"Sam Roi Yot",12.2155,99.8798,"R-190 / 25.5D HHN — Compulsory (Helicopter)"],
  ["VTUN-PHOL-SONG-KRAM","VTUN (Khorat)",1,0,"PHOL SONG KRAM",15.3392,102.3007,"R-021 / 27D KRT — Railway Station"],
  ["VTUN-NONG-PRUE","VTUN (Khorat)",1,0,"NONG PRUE",15.0777,102.6296,"R-072 / 30D KRT — Pond"],
  ["VTUN-DON-WAI","VTUN (Khorat)",1,0,"DON WAI",15.1162,102.2962,"R-038 / 15D KRT — Pond"],
  ["VTUN-JOR-HOR","VTUN (Khorat)",1,0,"JOR HOR",15.0338,102.138,"R-360 / 7D KRT — Bridge"],
  ["VTUN-SURANAREE","VTUN (Khorat)",1,0,"SURANAREE RTA CAMP",14.9591,102.0652,"R-301 / 5D KRT — Intersection"],
  ["VTUN-LAM-SAM-LAI","VTUN (Khorat)",1,0,"LAM SAM LAI",14.6634,101.8664,"R-227 / 22D KRT — Pond"],
  ["VTUN-KUT-CHIK","VTUN (Khorat)",1,0,"KUT CHIK",14.9049,101.8815,"R-268 / 15D KRT — Railway Station"],
  ["VTUN-LAM-TAK-KONG","VTUN (Khorat)",1,0,"LAM TAK KONG",14.8195,101.4927,"R-262 / 38D KRT — Railway Station"],
  ["VTUN-SI-KHIU","VTUN (Khorat)",1,0,"SI KHIU",14.8655,101.6948,"R-264 / 26D KRT — Bridge"],
  ["VTUN-MIKE-6","VTUN (Khorat)",1,0,"MIKE 6",14.9923,101.9667,"R-295 / 11D KRT — Bridge"],
  ["VTPP-NI-POINT","VTPP (Phitsanulok)",0,0,"NI POINT",17.2672,100.2367,"R-355 / 30.0D PSL — Compulsory"],
  ["VTPP-BT-POINT","VTPP (Phitsanulok)",0,0,"BT POINT",17.1898,99.995,"R-327 / 30.4D PSL — Compulsory"],
  ["VTPP-BS-POINT","VTPP (Phitsanulok)",0,0,"BS POINT",17.0596,99.8893,"R-308 / 28.9D PSL — Compulsory"],
  ["VTPP-WB-POINT","VTPP (Phitsanulok)",0,0,"WB POINT",16.9962,100.3079,"R-005 / 13.6D PSL — Compulsory"],
  ["VTPP-KK-POINT","VTPP (Phitsanulok)",0,0,"KK POINT",16.9277,99.9534,"R-297 / 21.6D PSL — Compulsory"],
  ["VTPP-PM-POINT","VTPP (Phitsanulok)",0,0,"PM POINT",16.7879,100.1605,"R-279 / 7.6D PSL — Compulsory"],
  ["VTPP-WT-POINT","VTPP (Phitsanulok)",0,0,"WT POINT",16.8285,100.4281,"R-067 / 8.6D PSL — Compulsory"],
  ["VTPP-BP-POINT","VTPP (Phitsanulok)",0,0,"BP POINT",16.7112,100.5806,"R-103 / 17.0D PSL — Compulsory"],
  ["VTPP-NP-POINT","VTPP (Phitsanulok)",0,0,"NP POINT",16.5768,100.6405,"R-121 / 23.2D PSL — Compulsory"],
  ["VTPP-SN-POINT","VTPP (Phitsanulok)",0,0,"SN POINT",16.5075,100.2076,"R-198 / 16.5D PSL — Compulsory"],
  ["VTPP-WK-POINT","VTPP (Phitsanulok)",0,0,"WK POINT",16.274,100.3004,"R-180 / 29.8D PSL — Compulsory"],
  ["VTUK-Q-POINT","VTUK (Khon Kaen)",0,0,"Q POINT",16.7722,102.6205,"R-333 / 20.5D KKN — On request"],
  ["VTUK-T-POINT","VTUK (Khon Kaen)",0,0,"T POINT",16.7236,102.8017,"R-004 / 15.2D KKN — Compulsory"],
  ["VTUK-A-POINT","VTUK (Khon Kaen)",0,0,"A POINT",16.7047,103.2485,"R-063 / 30.0D KKN — On request"],
  ["VTUK-R-POINT","VTUK (Khon Kaen)",0,0,"R POINT",16.6343,103.0724,"R-060 / 19.1D KKN — On request"],
  ["VTUK-S-POINT","VTUK (Khon Kaen)",0,0,"S POINT",16.565,102.9517,"R-060 / 11.0D KKN — Compulsory"],
  ["VTUK-B-POINT","VTUK (Khon Kaen)",0,0,"B POINT",16.5319,103.0654,"R-078 / 16.4D KKN — On request"],
  ["VTUK-U-POINT","VTUK (Khon Kaen)",0,0,"U POINT",16.4679,102.9545,"R-092 / 9.6D KKN — Compulsory"],
  ["VTUK-E-POINT","VTUK (Khon Kaen)",0,0,"E POINT",16.591,102.5614,"R-300 / 14.9D KKN — Compulsory"],
  ["VTUK-F-POINT","VTUK (Khon Kaen)",0,0,"F POINT",16.6709,102.3177,"R-295 / 29.6D KKN — On request"],
  ["VTUK-H-POINT","VTUK (Khon Kaen)",0,0,"H POINT",16.4883,102.4339,"R-274 / 20.4D KKN — On request"],
  ["VTUK-G-POINT","VTUK (Khon Kaen)",0,0,"G POINT",16.462,102.2912,"R-270 / 28.6D KKN — On request"],
  ["VTUD-TANGO","VTUD (Udon Thani)",0,0,"TANGO",17.66,102.7933,"R-360 / 17 NM UD — Bantin (N/NE Entry)"],
  ["VTUD-NOVEMBER","VTUD (Udon Thani)",0,0,"NOVEMBER",17.3583,103.1017,"R-095 / 17 NM UD — Nonghan (E/SE Entry)"],
  ["VTUD-ROMEO","VTUD (Udon Thani)",0,0,"ROMEO",17.1583,102.9667,"R-145 / 16 NM UD — Ban Dongrueng (S/SW Entry)"],
  ["VTUD-HOTEL","VTUD (Udon Thani)",0,0,"HOTEL",17.4167,102.6083,"R-280 / 12 NM UD — Huai Luang Reservoir (W Entry)"]
].map(p => ({ id:p[0], airport:p[1], heli:!!p[2], alt:p[3]||null, name:p[4], lat:p[5], lon:p[6], note:p[7] }));

// Source: AEROTHAI NOTAM LIST SERIES J (1 NOV 2026)
// [id, icao, category, severity, title, body, valid]
const AEROTHAI_NOTAMS = [
  ["J6612/26","VTBB","PJE","critical","กระโดดร่ม (PJE) ศรีราชา ชลบุรี — รัศมี 3 NM (GND - 9,000 FT AMSL)","PJE WILL TAKE PLACE RADIUS 3NM CENTRE 130825N1010248E (SI RACHA DISTRICT CHON BURI PROVINCE). DAILY 0000-1100 UTC. LOWER: GND / UPPER: 9000FT AMSL.","2609100000 - 2612081100"],
  ["J6613/26","VTBB","PJE","critical","กระโดดร่ม (PJE) ศรีราชา ชลบุรี — รัศมี 3 NM (GND - FL130)","PJE WILL TAKE PLACE RADIUS 3NM CENTRE 130825N1010248E (SI RACHA DISTRICT CHON BURI PROVINCE). DAILY 0200-0300 0400-0500 0600-0700 0800-0900 UTC. LOWER: GND / UPPER: FL130.","2609100200 - 2612080900"],
  ["J6939/26","VTBB","PJE","critical","กระโดดร่ม (PJE) เมือง/แกลง ระยอง — รัศมี 3 NM (GND - FL130)","PJE WILL TAKE PLACE RADIUS 3NM CENTRE 124028.20N1013250.30E (MUEANG AND KLAENG DISTRICT RAYONG PROVINCE). DAILY 0000-1130 UTC. LOWER: GND / UPPER: FL130.","2610010000 - 2612311130"],
  ["J6983/26","VTBB","RESTRICTED","critical","พื้นที่หวงห้าม VT R3 เปิดใช้งาน (GND - 6,000 FT AMSL)","VT R3 ACT CENTRE 134600N1003100E RADIUS 2NM (BANGKOK INNER AREA). LOWER: GND / UPPER: 6000FT AMSL.","2609300315 - 2612311659"],
  ["J6984/26","VTBB","UAV/DRONE","caution","อากาศยานไร้คนขับ (UAV) จันทบุรี — รัศมี 5 NM (GND - 3,000 FT AGL)","UNMANNED AIRCRAFT WILL TAKE PLACE RADIUS 5NM CENTRE 123800N1020300E (MAKHAM, THA MAI AND MUEANG DISTRICT CHANTHABURI PROVINCE). DAILY 0000-1400 UTC.","2610150000 - 2611051400"],
  ["J6986/26","VTBB","UAV/DRONE","info","UAV เส้นทางอีสานใต้ (3 NM ข้างแนวเส้น) — FL200-FL250","UNMANNED AIRCRAFT WILL TAKE PLACE WI AREA 3NM EITHER SIDE OF A LINE: 143000.00N1022800.00E-143107.26N1051100.12E (SI SAKET, UBON, BURIRAM, SURIN, NAKHON RATCHASIMA). DAILY 0100-1100 UTC.","2610160100 - 2612311100"],
  ["J6987/26","VTBB","UAV/DRONE","info","UAV เส้นทางภาคกลาง-อีสาน (3 NM ข้างแนวเส้น) — FL150-FL200","UNMANNED AIRCRAFT WILL TAKE PLACE WI AREA 3NM EITHER SIDE OF A LINE: 151638.34N1001745.12E-145407.02N1004920.52E-143000.00N1022800.00E (CHAINAT-NAKHON RATCHASIMA). DAILY 0100-1100 UTC.","2610160100 - 2612311100"],
  ["J6996/26","VTBB","UAV/DRONE","caution","UAV เมืองสุรินทร์ — รัศมี 5 NM (GND - 3,500 FT AMSL)","UNMANNED AIRCRAFT WILL TAKE PLACE RADIUS 5NM CENTRE 145240.44N1032953.88E (MUEANG DISTRICT SURIN PROVINCE). LOWER: GND / UPPER: 3500FT AMSL.","2610012200 - 2612311659"],
  ["J6997/26","VTBB","UAV/DRONE","caution","UAV พื้นที่อีสานใต้ (8,000 FT AMSL - FL170)","UNMANNED AIRCRAFT WILL TAKE PLACE WI AREA 144705.00N1033019.00E-143541.00N1051246.00E-142141.00N1051246.00E-142153.00N1050903.00E-141439.00N1050717.00E-141441.00N1050246.00E-142457.00N1050016.00E-142722.00N1044434.00E-142253.00N1042843.00E-142504.00N1041624.00E-142144.00N1035707.00E-142742.00N1034146.00E-141921.00N1030558.00E-142521.00N1030558.00E-144705.00N1033019.00E.","2610012200 - 2612311659"],
  ["J7036/26","VTBB","UAV/DRONE","critical","UAV บางละมุง ชลบุรี (24-28 พ.ย.) — GND - 1,000 FT AGL","UNMANNED AIRCRAFT WILL TAKE PLACE WI AREA 125552.54N1005243.18E-125519.72N1005355.41E-125426.50N1005354.33E-125405.26N1005149.14E-125451.50N1005104.59E-125549.59N1005143.84E-125552.54N1005243.18E (BANG LAMUNG CHON BURI). DAILY 0000-1000 UTC.","2611240000 - 2611281000"],
  ["J7038/26","VTBB","UAV/DRONE","caution","UAV บางละมุง ชลบุรี — GND - 1,000 FT AGL","UNMANNED AIRCRAFT WILL TAKE PLACE WI AREA 130014.25N1005535.95E-130000.25N1005555.65E-125705.72N1005431.20E-125706.39N1005255.49E-125823.15N1005255.87E-125849.50N1005442.27E-130014.25N1005535.95E (BANG LAMUNG CHON BURI).","2610290000 - 2611031000"],
  ["J7137/26","VTBB","UAV/DRONE","critical","UAV เมืองระยอง (23-27 พ.ย.) — รัศมี 3.10 NM (SFC - 800 FT AMSL)","UNMANNED AIRCRAFT WILL TAKE PLACE RADIUS 3.10NM CENTRE 123603.35N1012703.51E (MUEANG DISTRICT RAYONG PROVINCE). DAILY 0000-1100 UTC.","2611230000 - 2611271100"],
  ["J7139/26","VTBB","UAV/DRONE","caution","UAV แกลง ระยอง — รัศมี 3 NM (SFC - 800 FT AMSL)","UNMANNED AIRCRAFT WILL TAKE PLACE RADIUS 3NM CENTRE 123910.2N1014049.0E (KLAENG DISTRICT RAYONG PROVINCE). DAILY 0000-1100 UTC.","2611090000 - 2611131100"],
  ["J7148/26","VTBB","UAV/DRONE","caution","UAV บางละมุง ชลบุรี — GND - 1,000 FT AGL","UNMANNED AIRCRAFT WILL TAKE PLACE WI AREA 125712.89N1005256.72E-125712.42N1005403.43E-125712.20N1005433.11E-125521.80N1005400.67E-125522.40N1005236.32E-125546.46N1005236.52E-125712.89N1005256.72E.","2611100000 - 2611131000"],
  ["J7158/26","VTBB","UAV/DRONE","caution","UAV ธนบุรี/พระนคร กทม. — รัศมี 0.2 NM (GND - 1,000 FT AGL)","UNMANNED AIRCRAFT WILL TAKE PLACE RADIUS 0.2NM CENTRE 134427.82N1002936.03E (THON BURI, PHRA NAKHON AND BANGKOK YAI). DAILY 1100-1659 UTC.","2611121100 - 2611131659"],
  ["J7167/26","VTBB","OPS/EVENT","caution","พาราไกลดิ้ง เพชรบูรณ์-เลย — GND - 6,000 FT AGL","PARAGLIDING WILL TAKE PLACE WI AREA 170849.69N1010447.63E-170305.45N1012740.32E-164015.97N1012353.46E-164846.20N1010448.59E-170849.69N1010447.63E (PHETCHABUN AND LOEI). DAILY 0300-0900 UTC.","2610220300 - 2612150900"],
  ["J7191/26","VTBB","UAV/DRONE","info","UAV อ.เถิน ลำปาง — GND - 700 FT AGL","UNMANNED AIRCRAFT WILL TAKE PLACE WI AREA 174113.09N0990917.60E-174052.70N0990939.94E-174040.70N0990917.38E-174053.55N0990903.89E-174113.09N0990917.60E (THOEN LAMPANG).","2611010100 - 2611011100"],
  ["J7192/26","VTBB","UAV/DRONE","info","UAV บางละมุง ชลบุรี — GND - 700 FT AGL","UNMANNED AIRCRAFT WILL TAKE PLACE WI AREA 125648.99N1005414.12E-125648.59N1005453.44E-125601.29N1005453.20E-125601.30N1005413.45E-125648.99N1005414.12E.","2611020200 - 2611041100"],
  ["J7210/26","VTBB","UAV/DRONE","info","UAV สัตหีบ/บางละมุง ชลบุรี — GND - 700 FT AGL","UNMANNED AIRCRAFT WILL TAKE PLACE WI AREA 125106.09N1005447.69E-125105.72N1005538.99E-125000.95N1005538.61E-125001.32N1005447.19E-125106.09N1005447.69E.","2611050200 - 2611071100"],
  ["J7216/26","VTBB","UAV/DRONE","info","UAV บางซื่อ กทม. (16 พ.ย.) — GND - 400 FT AGL","UNMANNED AIRCRAFT WILL TAKE PLACE WI AREA 134937.70N1003131.44E-134934.80N1003133.81E-134933.69N1003132.69E-134936.79N1003130.40E-134937.70N1003131.44E (BANG SUE BANGKOK).","2611160200 - 2611161000"],
  ["J7217/26","VTBB","UAV/DRONE","caution","UAV บางซื่อ กทม. (27 พ.ย.) — GND - 400 FT AGL","UNMANNED AIRCRAFT WILL TAKE PLACE WI AREA 134937.70N1003131.44E-134934.80N1003133.81E-134933.69N1003132.69E-134936.79N1003130.40E-134937.70N1003131.44E (BANG SUE BANGKOK).","2611270200 - 2611271000"],
  ["J7219/26","VTBB","OPS/EVENT","critical","จุดพลุ เนินมะปราง พิษณุโลก (24 พ.ย.) — รัศมี 3 NM","FIREWORKS DISPLAY WILL TAKE PLACE RADIUS 3NM CENTRE 163403.88N1003811.39E (NOEN MAPRANG DISTRICT PHITSANULOK PROVINCE). LOWER: GND / UPPER: 2000FT AGL.","2611241130 - 2611241230"],
  ["J7223/26","VTBB","RESTRICTED","critical","พื้นที่หวงห้ามชั่วคราว แม่สะเรียง — รัศมี 10 NM (GND - UNL)","TEMPO RESTRICTED AREA ACT RADIUS 10NM CENTRE 182802N0972620E (MAE SARIANG DISTRICT MAE HONG SON PROVINCE, EXCLUDING YANGON FIR). LOWER: GND / UPPER: UNL.","2610260722 - 2611281100"],
  ["J7237/26","VTBB","MIL/FIRING","critical","ยิงปืนใหญ่/ฝึกยิงอาวุธ อ่าวไทย (SFC - FL400)","GUN FRNG WILL TAKE PLACE WI AREA 122603N1013710E-115500N1014000E-115500N1011830E-121832N1011054E-122543N1012021E-122603N1013710E (GULF OF THAILAND). DAILY 0100-1000 UTC.","2611020100 - 2611201000"],
  ["J7240/26","VTBB","MIL/FIRING","caution","ฝึกบินทางทหาร ลพบุรี-สระบุรี — รัศมี 5 NM (GND - 1,500 FT AMSL)","MIL AIR EXER WILL TAKE PLACE RADIUS 5NM CENTRE 144931N1004737E (LOP BURI AND SARABURI PROVINCE).","2611030100 - 2611030900"],
  ["J7241/26","VTBB","OPS/EVENT","info","บินถ่ายภาพทางอากาศ ภาคเหนือ — 6,000-7,500 FT","AERIAL PHOTO WILL TAKE PLACE WI AREA 175000N0991000E-175000N0995000E-171000N0995000E-171000N0991000E-175000N0991000E. DAILY 0000-1000 UTC.","2611020000 - 2611151000"],
  ["J7242/26","VTBB","OPS/EVENT","info","บินถ่ายภาพทางอากาศ กำแพงเพชร/พิษณุโลก/สุโขทัย — 6,000-7,500 FT","AERIAL PHOTO WILL TAKE PLACE WI AREA 172000N0994000E-172000N1002000E-164000N1002000E-164000N0994000E-172000N0994000E. DAILY 0000-1000 UTC.","2611020000 - 2611151000"],
  ["J7252/26","VTBB","OPS/EVENT","info","บินถ่ายภาพทางอากาศ สระบุรี-นครนายก — 5,000-7,000 FT AMSL","AERIAL PHOTO WILL TAKE PLACE WI AREA 142217.10N1005731.72E-142215.06N1011655.94E-140902.84N1011709.05E-140916.97N1005733.01E-142217.10N1005731.72E.","2611020000 - 2611060500"],
  ["J7262/26","VTBB","OPS/EVENT","caution","ปล่อยโคมลอย กู่แก้ว อุดรธานี — GND - 6,000 FT AGL","SKY LANTERNS (KHOM LOY) WILL BE RELEASED AT 171356.50N1031017.10E (KU KAEO DISTRICT UDON THANI PROVINCE). RADIUS 3NM.","2611031100 - 2611031500"],
  ["J7263/26","VTBB","RESTRICTED","caution","พื้นที่หวงห้ามชั่วคราว สิรินธร อุบลฯ — รัศมี 1 NM","TEMPO RESTRICTED AREA ACT RADIUS 1NM CENTRE 151223N1052541E (SIRINDHORN DISTRICT UBON RATCHATHANI PROVINCE).","2611011250 - 2611020100"],
  ["J7264/26","VTBB","RESTRICTED","caution","พื้นที่หวงห้ามชั่วคราว วารินชำราบ อุบลฯ — รัศมี 1 NM","TEMPO RESTRICTED AREA ACT RADIUS 1NM CENTRE 150653N1045406E (WARIN CHAMRAP DISTRICT UBON RATCHATHANI PROVINCE).","2611020200 - 2611020500"],
  ["J7266/26","VTBB","UAV/DRONE","info","UAV เขาสมิง ตราด — รัศมี 0.082 NM (GND - 33 FT AGL)","UNMANNED AIRCRAFT WILL TAKE PLACE RADIUS 0.082NM CENTRE 121949.69N1022306.67E (KHAO SAMING TRAT). DAILY 2300-0110 0255-0545 0730-0915 UTC.","2610312300 - 2611300915"],
  ["J7276/26","VTBB","OPS/EVENT","info","จุดพลุ เมืองระนอง — รัศมี 0.011 NM (GND - 246 FT AGL)","FIREWORKS DISPLAY WILL TAKE PLACE RADIUS 0.011NM CENTRE 095129.90N0983819.00E (MUEANG DISTRICT RANONG PROVINCE).","2611011200 - 2611011230"],
  ["J7278/26","VTBB","OPS/EVENT","caution","ปล่อยโคมลอย ศรีสมเด็จ ร้อยเอ็ด — GND - 16,000 FT AGL","SKY LANTERNS (KHOM LOY) WILL BE RELEASED AT 155926.0N1033152.3E (SI SOMDET DISTRICT ROI ET PROVINCE). RADIUS 3NM.","2611011600 - 2611011629"],
  ["J6980/26","VTBD","RESTRICTED","critical","พื้นที่หวงห้ามชั่วคราว ดอนเมือง — รัศมี 0.5 NM (GND - 3,000 FT AGL)","TEMPO RESTRICTED AREA ACT RADIUS 0.5NM CENTRE 135526.22N1003713.11E. APPROVAL SHALL BE MADE BEFORE ENTERING, EXCEPT DEP/ARR VTBD.","2609300210 - 2612311659"],
  ["J7186/26","VTBL","MIL/FIRING","caution","ยิงอาวุธ โคกกระเทียม ลพบุรี — GND - 3,000 FT AGL","GUN FRNG WILL TAKE PLACE WI AREA 145847.60N1004453.50E-145537.20N1004525.90E-145506.20N1004204.90E-145847.60N1004453.50E.","2611020200 - 2611020900"],
  ["J7207/26","VTBL","PJE","critical","กระโดดร่ม (PJE) โคกกระเทียม ลพบุรี — GND - FL130","PJE WILL TAKE PLACE WI AREA 145158N1004050E-145155N1004714E-144544N1004711E-144550N1004047E-145158N1004050E. DAILY 0100-1000 UTC.","2610300100 - 2611061000"],
  ["J7144/26","VTBO","UAV/DRONE","info","UAV ตราด (VTBO) — รัศมี 0.112 NM (GND - 50 FT AGL)","UNMANNED AIRCRAFT WILL TAKE PLACE RADIUS 0.112NM CENTRE 122000.05N1022303.34E.","2610192300 - 2611190915"],
  ["J7227/26","VTBO","UAV/DRONE","caution","UAV ตราด (26 ต.ค. - 26 พ.ย.) — รัศมี 0.128 NM (GND - 296 FT AGL)","UNMANNED AIRCRAFT WILL TAKE PLACE RADIUS 0.128NM CENTRE 121740.23N1022101.96E.","2610262300 - 2611260915"],
  ["J7250/26","VTBO","OPS/EVENT","caution","บินตรวจสอบ PAPI ตราด — รัศมี 6 NM (GND - 2,000 FT AMSL)","PAPI FLTCK WILL TAKE PLACE RADIUS 6NM CENTRE 121633N1021914E. RMK: DEP/ARR ACFT WILL BE DLA DURING THIS PERIOD.","2611040730 - 2611051000"],
  ["J7261/26","VTBW","UAV/DRONE","critical","UAV วัฒนานคร สระแก้ว (ถึง 30 พ.ย.) — รัศมี 15 NM (GND - 10,000 FT AMSL)","UNMANNED AIRCRAFT WILL TAKE PLACE RADIUS 15NM CENTRE 134607.52N1021855.97E (EXCLUDING PHNOM PENH FIR).","2610300638 - 2611301100"],
  ["J6200/26","VTCC","RESTRICTED","critical","พื้นที่หวงห้ามชั่วคราว เชียงใหม่ — รัศมี 0.5 NM (GND - 3,000 FT AGL)","TEMPO RESTRICTED AREA ACT RADIUS 0.5NM CENTRE 184626N0985806E (EXCLUDING LDG AND TKOF RWY 18/36).","2608170406 - 2611171659"],
  ["J7190/26","VTCC","UAV/DRONE","caution","UAV เชียงใหม่ (ถึง 24 ธ.ค.) — รัศมี 0.3 NM (GND - 150 FT AGL)","UNMANNED AIRCRAFT WILL TAKE PLACE RADIUS 0.3NM CENTRE 184723.63N0985817.34E. DAILY 0300-0800 UTC.","2610240300 - 2612240800"],
  ["J7196/26","VTCC","UAV/DRONE","info","UAV เชียงใหม่ — รัศมี 1 NM (GND - 148 FT AGL)","UNMANNED AIRCRAFT WILL TAKE PLACE RADIUS 1NM CENTRE 185101.88N0985735.72E. DAILY 2300-1100 UTC.","2610312300 - 2611041100"],
  ["J7260/26","VTSY","UAV/DRONE","caution","UAV เบตง ยะลา — รัศมี 1.10 NM (GND - 660 FT AGL)","UNMANNED AIRCRAFT WILL TAKE PLACE RADIUS 1.10NM CENTRE 054632.8N1011039.8E.","2610300410 - 2611060930"],
  ["J7234/26","VTUL","OPS/EVENT","caution","บินตรวจสอบ PAPI เลย — รัศมี 10 NM (GND - 4,000 FT AMSL)","PAPI FLTCK WILL TAKE PLACE RADIUS 10NM CENTRE 172620.88N1014319.43E. RMK: DEP/ARR ACFT WILL BE DLA DURING THIS PERIOD.","2611020600 - 2611030830"]
].map(n => ({ id:n[0], series:"Series J", icao:n[1], category:n[2], severity:n[3], title:n[4], body:n[5], valid:n[6] }));

// Helicopter presets — APPROXIMATE starting values only; operators must use their RFM / W&B report.
const HELI_PRESETS = {
  custom:  { name:"กำหนดเอง (Custom)" },
  bell412: { name:"Bell 412EP", tas:125, burn:740, fob:2200, cap:2200, bew:7200, mtow:11900 },
  bell429: { name:"Bell 429",   tas:145, burn:480, fob:1470, cap:1470, bew:4500, mtow:7000 },
  aw139:   { name:"Leonardo AW139", tas:150, burn:1100, fob:3000, cap:3500, bew:9300, mtow:14110 },
  h135:    { name:"Airbus H135", tas:125, burn:440, fob:1200, cap:1240, bew:3300, mtow:6570 },
  h125:    { name:"Airbus H125 / AS350B3", tas:125, burn:375, fob:930, cap:950, bew:2800, mtow:4960 },
  bell206: { name:"Bell 206B3", tas:110, burn:180, fob:600, cap:610, bew:1750, mtow:3200 },
  r44:     { name:"Robinson R44 II (AVGAS)", tas:110, burn:90, fob:275, cap:280, bew:1500, mtow:2500 }
};

const CHECKLIST_ITEMS = [
  "ตรวจ NOTAM ล่าสุด (AEROTHAI/AIS) และ VFR Heli Corridor",
  "รับบรีฟอากาศ METAR/TAF/SIGMET (TMD / AEROTHAI)",
  "ยื่น Flight Plan / แจ้ง ATS ตามที่กำหนด",
  "ขอ PPR / อนุญาตลงจอด Helipad ปลายทาง",
  "คำนวณ Weight & Balance และ CG อยู่ในขีดจำกัด",
  "ตรวจ Performance HIGE/HOGE ที่ DA ปลายทาง",
  "เอกสารเครื่อง: C of A, C of R, Radio Licence, Tech Log",
  "เติมน้ำมัน + ตรวจ Fuel Sample (น้ำ/สิ่งปนเปื้อน)",
  "Walk-around / Pre-flight inspection ครบตาม RFM",
  "อุปกรณ์ฉุกเฉิน: ELT, ชูชีพ (บินเหนือน้ำ), First aid",
  "บรีฟผู้โดยสาร: เข็มขัด, ประตู, เขตใบพัดท้าย, ทางออก",
  "ตั้งค่า Altimeter QNH และความถี่วิทยุ",
  "ตรวจสิ่งกีดขวาง/สายไฟแรงสูงตามเส้นทางและบริเวณลงจอด"
];

// =========================================================================
// 2. HELPERS & STATE
// =========================================================================
const $ = id => document.getElementById(id);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
const num = v => { const n = parseFloat(v); return isFinite(n) ? n : 0; };
const fmt = n => Math.round(n).toLocaleString("en-US");
const pad3 = n => String(Math.round(((n % 360) + 360) % 360) || 360).padStart(3, "0");
const toRad = d => d * Math.PI / 180, toDeg = r => r * 180 / Math.PI;
const isLg = () => window.innerWidth >= 1024;
const LS = {
  get(k, d) { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch (_) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (_) {} idbSet(k, v); }
};
function idbOpen() { return new Promise((res, rej) => { if (!window.indexedDB) return rej(); const r = indexedDB.open("ThaiHeliVfrDB", 1); r.onupgradeneeded = () => { if (!r.result.objectStoreNames.contains("kv")) r.result.createObjectStore("kv"); }; r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }); }
async function idbSet(k, v) { try { const db = await idbOpen(); db.transaction("kv", "readwrite").objectStore("kv").put(v, k); } catch (_) {} }
async function idbGet(k) { try { const db = await idbOpen(); return await new Promise(res => { const q = db.transaction("kv").objectStore("kv").get(k); q.onsuccess = () => res(q.result); q.onerror = () => res(null); }); } catch (_) { return null; } }

const K = { set:"thv2_settings", route:"thv2_route", routes:"thai_heli_vfr_saved_routes_v1", wps:"thai_heli_vfr_saved_waypoints_v1", notams:"thv2_custom_notams", check:"thv2_checklist", pad:"thv2_pad", fly:"thv2_fly", layers:"thv3_layers", oaip:"thv3_oaip_key" };

const DEFAULT_S = { preset:"custom", tas:0, burn:0, alt:0, varW:0.5, wdir:0, wspd:0, etd:"", fob:0, cap:0, taxi:30, cont:10, res:20, extra:0, altn:"", bew:0, mtow:0, crew:380, pax:0, cargo:0, vismin:5, ceilmin:1000, coord:"DD", basemap:"sat" };
const S = Object.assign({}, DEFAULT_S, LS.get(K.set, {}));
(() => { const o = LS.get("thai_heli_vfr_settings_v1", null); if (o && !localStorage.getItem(K.set)) { S.tas = o.tas || 0; S.burn = o.burn || 0; S.alt = o.cruiseAlt || 0; S.fob = o.fuelOnBoard || 0; } })();

const state = {
  route: LS.get(K.route, null) || LS.get("thai_heli_vfr_active_route_v1", []) || [],
  savedRoutes: LS.get(K.routes, []),
  cwps: LS.get(K.wps, []),
  customNotams: LS.get(K.notams, []),
  notams: [],
  weather: {}, metar: {}, taf: {},
  profile: null,
  legs: [], totals: {},
  addWpMode: false,
  lastCursor: { lat: 13.7563, lon: 100.5018 },
  radar: { host:"", frames:[], index:0, playing:false, timer:null, opacity:0.6 },
  gps: null,
  fly: Object.assign({ on:false, min:false, target:1, takeoff:null, landed:null }, LS.get(K.fly, {}))
};
if (!Array.isArray(state.route)) state.route = [];
state.notams = [];
function notamExpired(n, now = new Date()) { const v = notamValidity(n); return !!(v && v.to < now); }
function rebuildNotams() { const now = new Date(), all = [...state.customNotams, ...AEROTHAI_NOTAMS]; state.notams = all.filter(n => !notamExpired(n, now)); state.notamsExpired = all.length - state.notams.length; }

function saveS() { LS.set(K.set, S); }
function toast(msg) { const el = $("toast"); el.textContent = msg; el.classList.remove("hidden"); clearTimeout(el._t); el._t = setTimeout(() => el.classList.add("hidden"), 2800); }

// ---- geodesy ----
function distNM(a1, o1, a2, o2) { const dLa = toRad(a2 - a1), dLo = toRad(o2 - o1); const h = Math.sin(dLa / 2) ** 2 + Math.cos(toRad(a1)) * Math.cos(toRad(a2)) * Math.sin(dLo / 2) ** 2; return 2 * 3440.065 * Math.asin(Math.min(1, Math.sqrt(h))); }
function brgT(a1, o1, a2, o2) { const y = Math.sin(toRad(o2 - o1)) * Math.cos(toRad(a2)); const x = Math.cos(toRad(a1)) * Math.sin(toRad(a2)) - Math.sin(toRad(a1)) * Math.cos(toRad(a2)) * Math.cos(toRad(o2 - o1)); return (toDeg(Math.atan2(y, x)) + 360) % 360; }
const toMag = t => (t + num(S.varW) + 360) % 360;
function xteNM(p, a, b) { const d13 = distNM(a.lat, a.lon, p.lat, p.lon) / 3440.065; const t13 = toRad(brgT(a.lat, a.lon, p.lat, p.lon)), t12 = toRad(brgT(a.lat, a.lon, b.lat, b.lon)); return Math.asin(Math.sin(d13) * Math.sin(t13 - t12)) * 3440.065; }
function localXY(p, o) { return [(p[1] - o[1]) * 60 * Math.cos(toRad(o[0])), (p[0] - o[0]) * 60]; }
function segDistNM(p, a, b) { const A = localXY(a, p), B = localXY(b, p); const dx = B[0] - A[0], dy = B[1] - A[1]; const L = dx * dx + dy * dy; let t = L ? -(A[0] * dx + A[1] * dy) / L : 0; t = Math.max(0, Math.min(1, t)); return Math.hypot(A[0] + t * dx, A[1] + t * dy); }
function inPoly(p, poly) { let ins = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const yi = poly[i][0], xi = poly[i][1], yj = poly[j][0], xj = poly[j][1]; if (((yi > p[0]) !== (yj > p[0])) && (p[1] < (xj - xi) * (p[0] - yi) / (yj - yi) + xi)) ins = !ins; } return ins; }
function hhmm(h) { if (!isFinite(h) || h <= 0) return "--:--"; const m = Math.round(h * 60); return `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`; }
const ict = d => d ? d.toLocaleTimeString("en-GB", { timeZone: "Asia/Bangkok", hour: "2-digit", minute: "2-digit", hour12: false }) : "--:--";
const utc = d => d ? d.toLocaleTimeString("en-GB", { timeZone: "UTC", hour: "2-digit", minute: "2-digit", hour12: false }) + "Z" : "--Z";

function fmtC(v, pos, neg) {
  const h = v >= 0 ? pos : neg, a = Math.abs(v);
  if (S.coord === "DDM") { const d = Math.floor(a); return `${d}°${((a - d) * 60).toFixed(2).padStart(5, "0")}'${h}`; }
  if (S.coord === "DMS") { const d = Math.floor(a), mf = (a - d) * 60, m = Math.floor(mf); return `${d}°${String(m).padStart(2, "0")}'${((mf - m) * 60).toFixed(1).padStart(4, "0")}"${h}`; }
  return `${a.toFixed(4)}°${h}`;
}
const fmtLL = (la, lo) => `${fmtC(la, "N", "S")} ${fmtC(lo, "E", "W")}`;

function parseUserCoords(raw) {
  if (!raw) return null; const t = raw.trim().toUpperCase();
  let m = t.match(/^(\d{2})(\d{2})(\d{2}(?:\.\d+)?)([NS])\s*(\d{3})(\d{2})(\d{2}(?:\.\d+)?)([EW])$/);
  if (m) { let la = +m[1] + m[2] / 60 + m[3] / 3600, lo = +m[5] + m[6] / 60 + m[7] / 3600; if (m[4] === "S") la = -la; if (m[8] === "W") lo = -lo; return { lat: la, lon: lo }; }
  const dms = [...t.matchAll(/(\d+(?:\.\d+)?)\s*[°D]\s*(\d+(?:\.\d+)?)\s*['′M]\s*(\d+(?:\.\d+)?)\s*(?:"|″|S(?=\s*[NSEW]))?\s*([NSEW])/g)];
  if (dms.length === 2) { const v = dms.map(x => (+x[1] + x[2] / 60 + x[3] / 3600) * (/[SW]/.test(x[4]) ? -1 : 1)); return { lat: v[0], lon: v[1] }; }
  const ddm = [...t.matchAll(/(\d+(?:\.\d+)?)\s*[°D]\s*(\d+(?:\.\d+)?)\s*['′M]?\s*([NSEW])/g)];
  if (ddm.length === 2) { const v = ddm.map(x => (+x[1] + x[2] / 60) * (/[SW]/.test(x[3]) ? -1 : 1)); return { lat: v[0], lon: v[1] }; }
  m = t.match(/^(-?\d+(?:\.\d+)?)\s*°?\s*([NS])?[,\s]+(-?\d+(?:\.\d+)?)\s*°?\s*([EW])?$/);
  if (m) { let la = +m[1], lo = +m[3]; if (m[2] === "S") la = -Math.abs(la); if (m[4] === "W") lo = -Math.abs(lo); if (Math.abs(la) <= 90 && Math.abs(lo) <= 180) return { lat: la, lon: lo }; }
  return null;
}
function parseNotamCoords(text) {
  const re = /(\d{2})(\d{2})(\d{2}(?:\.\d+)?)([NS])\s*(\d{3})(\d{2})(\d{2}(?:\.\d+)?)([EW])/g; const pts = []; let m;
  while ((m = re.exec(text || ""))) { let la = +m[1] + m[2] / 60 + m[3] / 3600, lo = +m[5] + m[6] / 60 + m[7] / 3600; if (m[4] === "S") la = -la; if (m[8] === "W") lo = -lo; pts.push([la, lo]); }
  return pts;
}
function findNearestVor(lat, lon) {
  let best = null, md = Infinity;
  for (const v of VOR_STATIONS) { const d = distNM(lat, lon, v.lat, v.lon); if (d < md) { md = d; best = { ...v, dist: d, radial: toMag(brgT(v.lat, v.lon, lat, lon)) }; } }
  return best;
}
const vorFixStr = (lat, lon) => { const v = findNearestVor(lat, lon); return v ? `${v.id} R-${pad3(v.radial)} / ${v.dist.toFixed(1)} NM` : "—"; };
function getEtd() { if (S.etd) { const d = new Date(S.etd + ":00+07:00"); if (!isNaN(d)) return d; } return new Date(); }

function resolveKey(key) {
  const [t, id] = [key.slice(0, key.indexOf(":")), key.slice(key.indexOf(":") + 1)];
  if (t === "AP") { const a = AIRPORTS.find(x => x.icao === id); return a && { id: a.icao, name: a.nameTh, lat: a.lat, lon: a.lon, elev: a.elev, kind: "AP" }; }
  if (t === "VOR") { const v = VOR_STATIONS.find(x => x.id === id); return v && { id: v.id, name: `${v.name} ${v.freq}`, lat: v.lat, lon: v.lon, elev: v.elev, kind: "VOR" }; }
  if (t === "VFR") { const p = VFR_REPORTING_POINTS.find(x => x.id === id); return p && { id: p.id, name: p.name, lat: p.lat, lon: p.lon, elev: 0, kind: "VFR", alt: p.alt }; }
  if (t === "CW") { const c = state.cwps[+id]; return c && { id: c.id, name: c.id, lat: c.lat, lon: c.lon, elev: c.elev || 0, kind: "CW" }; }
  return null;
}
window.addKey = key => { const p = resolveKey(key); if (p) { state.route.push(p); afterRouteChange(); map.closePopup(); toast(`เพิ่ม ${p.id} เข้าเส้นทาง`); } };
window.addLL = (lat, lon, name) => { const id = (name || `WPT${state.route.length + 1}`).toString().slice(0, 24); state.route.push({ id, name: id, lat, lon, elev: 0, kind: "USR" }); afterRouteChange(); map.closePopup(); toast(`เพิ่ม ${id} เข้าเส้นทาง`); };

// =========================================================================
// 3. MAP
// =========================================================================
const map = L.map("map", { center: [13.55, 100.35], zoom: 8, zoomControl: false, worldCopyJump: true });
const BASEMAPS = {
  sat:    { n:"ดาวเทียม+ถนน", sw:"linear-gradient(135deg,#2f4a2b,#1e3a5f 60%,#e5c07b)", l:L.tileLayer("https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}", { attribution: "Imagery © Google", maxZoom: 20 }) },
  gearth: { n:"ดาวเทียมล้วน", sw:"linear-gradient(135deg,#1f3b24,#3d5a3a 50%,#264d73)", l:L.tileLayer("https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", { attribution: "Imagery © Google", maxZoom: 20 }) },
  esri:   { n:"Esri Imagery", sw:"linear-gradient(135deg,#384d2d,#1d3557 70%)", l:L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", { attribution: "Esri, Maxar, Earthstar", maxZoom: 19 }) },
  dark:   { n:"กลางคืน", sw:"linear-gradient(135deg,#0b0f19,#1f2937 60%,#374151)", l:L.layerGroup([
            L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}", { attribution: "Esri, HERE, Garmin, © OpenStreetMap", maxZoom: 16 }),
            L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}", { maxZoom: 16 })]) },
  topo:   { n:"Esri Topo", sw:"linear-gradient(135deg,#e8e2c8,#b9d3a0 50%,#9cc3e0)", l:L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", { attribution: "Esri", maxZoom: 18 }) },
  otm:    { n:"OpenTopo", sw:"linear-gradient(135deg,#f1e7c9,#c9b98a 40%,#8fb07a)", l:L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap, SRTM | © OpenTopoMap", subdomains:"abc", maxZoom: 17 }) },
  osm:    { n:"OSM ถนน", sw:"linear-gradient(135deg,#f2efe9,#e6d9b8 50%,#aad3df)", l:L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap contributors", maxZoom: 19 }) },
  relief: { n:"เฉดความสูง", sw:"linear-gradient(135deg,#d6d0c4,#9e968a 50%,#5f5a52)", l:L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}", { attribution: "Esri", maxZoom: 13 }) }
};
const refLabels = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}", { maxZoom: 18, opacity: .75 });
if (!BASEMAPS[S.basemap]) S.basemap = "sat";
let activeBase = BASEMAPS[S.basemap].l.addTo(map);
if (S.basemap === "relief") refLabels.addTo(map);
function setBasemap(k) {
  if (!BASEMAPS[k]) return; map.removeLayer(activeBase); if (map.hasLayer(refLabels)) map.removeLayer(refLabels);
  S.basemap = k; activeBase = BASEMAPS[k].l.addTo(map); (activeBase.getLayers ? activeBase.getLayers().slice().reverse() : [activeBase]).forEach(l => l.bringToBack()); if (k === "relief") refLabels.addTo(map); saveS(); renderBmGallery();
}
function renderBmGallery() { $("bm-gallery").innerHTML = Object.entries(BASEMAPS).map(([k, b]) => `<button data-bm="${k}" class="bm-btn ${S.basemap === k ? "active" : ""}"><i style="background:${b.sw}"></i>${b.n}</button>`).join(""); }
map.createPane("terrainPane").style.zIndex = 350;
map.createPane("osmPane").style.zIndex = 420;
map.createPane("routePane").style.zIndex = 650;
const osmCanvas = L.canvas({ pane: "osmPane", padding: .3 });
const L_ap = L.layerGroup().addTo(map), L_nav = L.layerGroup().addTo(map), L_vfr = L.layerGroup().addTo(map), L_ring = L.layerGroup(),
  L_notam = L.layerGroup().addTo(map), L_terr = L.layerGroup().addTo(map), L_cwp = L.layerGroup().addTo(map), L_route = L.layerGroup().addTo(map), L_gps = L.layerGroup().addTo(map);
const L_metar = L.layerGroup(), L_wind = L.layerGroup(), L_osmHeli = L.layerGroup(), L_osmPower = L.layerGroup(), L_osmObst = L.layerGroup(), L_scan = L.layerGroup().addTo(map);
let radarLayer = null;

function apPopup(ap) {
  const fr = flightCat(ap.icao), wx = state.weather[ap.icao], mt = state.metar[ap.icao];
  return `<div class="text-xs space-y-1.5 min-w-[240px] max-w-[290px]">
    <div class="flex items-center justify-between pb-1 gap-2" style="border-bottom:1px solid rgba(148,163,184,.2)"><b class="text-emerald-400 text-sm">${ap.icao} / ${ap.iata}</b><span class="pill ${fr.cls}">${fr.label}</span></div>
    <div class="font-semibold text-white">${esc(ap.nameTh)}</div>
    <div class="mono text-[11px] text-cyan-300">${fmtLL(ap.lat, ap.lon)} • ELEV ${ap.elev} ft</div>
    ${mt ? `<div class="mono text-[11px] text-slate-200 bg-black/30 rounded-lg px-1.5 py-1">${esc(mt.raw)}</div>` : wx ? `<div class="mono text-[11px] text-slate-300">${pad3(wx.wdir)}/${wx.wspd}${wx.gust > wx.wspd + 5 ? "G" + wx.gust : ""}kt • VIS ${wx.vis.toFixed(1)}km • ${wx.temp}°C • Q${wx.qnh} <span class="text-slate-500">(โมเดล)</span></div>` : ""}
    <div class="text-[11px] text-slate-300">RWY: ${ap.runways.join(", ")}</div>
    <div class="mono text-[10px] text-emerald-300 bg-black/30 rounded-lg px-1.5 py-1">${Object.entries(ap.atc).map(([k, v]) => `<span class="mr-1.5"><span class="text-slate-400">${k}</span> ${v}</span>`).join("")}</div>
    ${navaidRows(ap, "text-[11px]")}
    <div class="flex gap-1.5 pt-1"><button onclick="addKey('AP:${ap.icao}')" class="btn btn-sm btn-go flex-1">+ เส้นทาง</button><button onclick="inspectAirport('${ap.icao}')" class="btn btn-sm">รายละเอียด</button></div></div>`;
}
function renderMapMarkers() {
  L_ap.clearLayers(); L_nav.clearLayers(); L_ring.clearLayers(); L_vfr.clearLayers();
  AIRPORTS.forEach(ap => {
    const fc = flightCat(ap.icao), metar = fc.src === "METAR";
    const bg = metar ? (fc.imc ? "#ef4444" : "#22c55e") : "#64748b", fg = metar && !fc.imc ? "#060a13" : "#fff";
    const crit = state.notams.some(n => n.icao === ap.icao && n.severity === "critical");
    const icon = L.divIcon({ className: "", html: `<div class="ap-badge" style="position:relative;width:38px;height:20px;background:${bg};color:${fg}" title="${fc.label}">${ap.icao}${crit ? `<span style="position:absolute;top:-5px;right:-5px;width:9px;height:9px;border-radius:9px;background:#f5a524;border:1.5px solid #fff"></span>` : ""}</div>`, iconSize: [38, 20], iconAnchor: [19, 10] });
    L.marker([ap.lat, ap.lon], { icon }).bindPopup(() => apPopup(ap)).addTo(L_ap);
  });
  VOR_STATIONS.forEach(v => {
    const icon = L.divIcon({ className: "", html: `<div class="nav-badge">${v.id}</div>`, iconSize: [28, 20], iconAnchor: [14, 10] });
    L.marker([v.lat, v.lon], { icon }).bindPopup(`<div class="text-xs space-y-1"><b class="text-sky-400">${v.id} ${v.name} — ${v.type}</b><div class="mono">${v.freq} (${v.ch}) • ${v.hours}</div><div class="mono text-[11px] text-cyan-300">${fmtLL(v.lat, v.lon)}</div><button onclick="addKey('VOR:${v.id}')" class="btn btn-sm w-full">+ เส้นทาง</button></div>`).addTo(L_nav);
    L.circle([v.lat, v.lon], { radius: 25 * 1852, color: "#38bdf8", weight: 1, dashArray: "4 4", fillOpacity: .02 }).addTo(L_ring);
  });
  VFR_REPORTING_POINTS.forEach(p => {
    const icon = L.divIcon({ className: "", html: `<div style="display:inline-flex;align-items:center;gap:3px;white-space:nowrap;transform:translate(-6px,-6px)"><div style="width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:11px solid ${p.heli ? "#f97316" : "#eab308"};filter:drop-shadow(0 0 1.5px #fff)"></div><span class="lbl-tag" style="color:#fde68a;border:1px solid #b45309">${esc(p.name)}</span></div>`, iconSize: [12, 12], iconAnchor: [6, 6] });
    L.marker([p.lat, p.lon], { icon }).bindPopup(`<div class="text-xs space-y-1"><b class="text-amber-400">▲ ${esc(p.name)}</b><div class="mono text-[10px] text-sky-300">${esc(p.airport)}${p.alt ? " • ALT " + p.alt + " ft" : ""}</div><div class="mono text-[11px] text-cyan-300">${fmtLL(p.lat, p.lon)}</div><div class="text-[11px] text-slate-300">${esc(p.note)}</div><button onclick="addKey('VFR:${p.id}')" class="btn btn-sm btn-amber w-full">+ เส้นทาง</button></div>`).addTo(L_vfr);
  });
  renderNotamLayer();
}

// ---- NOTAM geometry ----
function notamGeom(n) {
  const pts = parseNotamCoords(n.body + " " + n.title);
  const rm = (n.body || "").match(/RADIUS\s+(\d+(?:\.\d+)?)\s*NM/i) || (n.body || "").match(/(\d+(?:\.\d+)?)\s*NM/i);
  if (pts.length >= 2 && /EITHER\s+SIDE/i.test(n.body)) return { type: "line", pts, r: rm ? +rm[1] : 3, center: pts[Math.floor(pts.length / 2)] };
  if (pts.length >= 3) { const u = pts.slice(0, -1); const c = [u.reduce((s, p) => s + p[0], 0) / u.length, u.reduce((s, p) => s + p[1], 0) / u.length]; return { type: "poly", pts, center: c }; }
  let c = pts[0];
  if (!c) { const ap = AIRPORTS.find(a => a.icao === n.icao); if (ap) c = [ap.lat, ap.lon]; }
  if (!c) return null;
  return { type: "circle", center: c, r: rm ? +rm[1] : 3 };
}
function notamValidity(n) {
  const m = (n.valid || "").match(/(\d{10})\s*-\s*(\d{10})/); if (!m) return null;
  const p = s => new Date(Date.UTC(2000 + +s.slice(0, 2), +s.slice(2, 4) - 1, +s.slice(4, 6), +s.slice(6, 8), +s.slice(8, 10)));
  return { from: p(m[1]), to: p(m[2]) };
}
const SEV = { critical: { s: "#ef4444", bg: "#7f1d1d", t: "#fecaca", op: .16 }, caution: { s: "#f5a524", bg: "#78350f", t: "#fde68a", op: .12 }, info: { s: "#38bdf8", bg: "#0c4a6e", t: "#bae6fd", op: .08 } };
function notamPopup(n) { const v = notamValidity(n); return `<div class="text-xs space-y-1 max-w-[280px]"><div class="flex justify-between gap-2 pb-1" style="border-bottom:1px solid rgba(148,163,184,.2)"><b class="mono">${esc(n.icao)} • ${esc(n.id)}</b><span class="text-amber-300 text-[10px]">${esc(n.category)}</span></div><div class="font-semibold">${esc(n.title)}</div><div class="text-[11px] text-slate-300">${esc(n.body)}</div><div class="mono text-[10px] text-slate-400">VALID ${esc(n.valid)}${v ? ` (${v.to < new Date() ? "หมดอายุแล้ว" : "ยังมีผล"})` : ""}</div></div>`; }
function filteredNotams() {
  const icF = $("notam-icao-filter").value, caF = $("notam-cat-filter").value;
  const onRoute = new Set(routeNotamHits().map(h => h.n.id));
  return state.notams.filter(n => (icF === "ALL" || (icF === "ROUTE" ? onRoute.has(n.id) : n.icao === icF)) && (caF === "ALL" || n.category === caF));
}
function renderNotamLayer() {
  L_notam.clearLayers();
  filteredNotams().forEach(n => {
    const g = notamGeom(n); if (!g) return; const st = SEV[n.severity] || SEV.info; const pop = () => notamPopup(n);
    if (g.type === "poly") L.polygon(g.pts, { color: st.s, weight: 1.6, dashArray: "5,4", fillColor: st.s, fillOpacity: st.op }).bindPopup(pop).addTo(L_notam);
    else if (g.type === "line") { L.polyline(g.pts, { color: st.s, weight: 3, dashArray: "6,4" }).bindPopup(pop).addTo(L_notam); g.pts.forEach(p => L.circle(p, { radius: g.r * 1852, color: st.s, weight: 1, dashArray: "3,4", fillOpacity: st.op * .5 }).addTo(L_notam)); }
    else L.circle(g.center, { radius: Math.max(.05, g.r) * 1852, color: st.s, weight: 1.5, dashArray: "5,4", fillColor: st.s, fillOpacity: st.op }).bindPopup(pop).addTo(L_notam);
    L.marker(g.center, { icon: L.divIcon({ className: "", html: `<div class="ntm-tag" style="display:inline-flex;padding:1px 5px;border-radius:5px;background:${st.bg};border:1.5px solid ${st.s};color:${st.t};font:700 9px 'IBM Plex Mono',monospace;white-space:nowrap">▲ ${esc(n.id)}</div>`, iconSize: [70, 16], iconAnchor: [35, 8] }), zIndexOffset: 250 }).bindPopup(pop).addTo(L_notam);
  });
}

// =========================================================================
// 4. ROUTE, NAVLOG (WIND TRIANGLE), PROFILE
// =========================================================================
function computeLegs() {
  const legs = []; const tas = num(S.tas), burn = num(S.burn), wd = num(S.wdir), ws = num(S.wspd);
  let t = getEtd().getTime(), cumD = 0, cumH = 0;
  for (let i = 0; i < state.route.length - 1; i++) {
    const a = state.route[i], b = state.route[i + 1];
    const dist = distNM(a.lat, a.lon, b.lat, b.lon), tc = brgT(a.lat, a.lon, b.lat, b.lon);
    let wca = 0, gs = tas;
    if (tas > 0 && ws > 0) { const ang = toRad(wd - tc); const x = ws / tas * Math.sin(ang); if (Math.abs(x) < 1) { wca = toDeg(Math.asin(x)); gs = tas * Math.cos(toRad(wca)) - ws * Math.cos(ang); } else gs = 0; }
    const th = (tc + wca + 360) % 360, mh = toMag(th);
    const h = gs > 0 ? dist / gs : 0; cumD += dist; cumH += h; t += h * 3600e3;
    const msa = state.profile && state.profile.legMax[i] != null ? Math.ceil((state.profile.legMax[i] + 1000) / 100) * 100 : null;
    legs.push({ i, a, b, dist, tc, mc: toMag(tc), wca, th, mh, gs, h, fuel: h * burn, eta: new Date(t), cumD, cumH, msa });
  }
  const trip = legs.reduce((s, l) => s + l.fuel, 0);
  state.legs = legs; state.totals = { dist: cumD, h: cumH, trip, eta: legs.length ? legs[legs.length - 1].eta : null };
  return legs;
}
function fuelPlan() {
  const burn = num(S.burn), tas = num(S.tas), trip = state.totals.trip || 0;
  const taxi = num(S.taxi), cont = trip * num(S.cont) / 100, reserve = burn * num(S.res) / 60, extra = num(S.extra);
  let altn = 0, altnDist = 0, altnH = 0; const dest = state.route[state.route.length - 1], ap = AIRPORTS.find(a => a.icao === S.altn);
  if (ap && dest && tas > 0) { altnDist = distNM(dest.lat, dest.lon, ap.lat, ap.lon); altnH = altnDist / tas; altn = altnH * burn; }
  const req = taxi + trip + cont + altn + reserve + extra, fob = num(S.fob);
  return { taxi, trip, cont, altn, altnDist, altnH, reserve, extra, req, fob, margin: fob - req, endur: burn > 0 ? fob / burn : 0, landFuel: fob - taxi - trip };
}
function weightCalc() {
  const fp = fuelPlan(); const zfw = num(S.bew) + num(S.crew) + num(S.pax) + num(S.cargo);
  const tow = zfw + Math.max(0, fp.fob - fp.taxi), lw = tow - fp.trip, mtow = num(S.mtow);
  return { zfw, tow, lw, mtow, margin: mtow - tow, maxFuel: mtow > 0 ? mtow - zfw + fp.taxi : 0 };
}

function afterRouteChange() { LS.set(K.route, state.route); state.profile = null; L_scan.clearLayers(); renderRoute(); scheduleProfile(); scheduleTerrainOverlay(); }

function renderRoute() {
  computeLegs();
  L_route.clearLayers();
  const r = state.route, lines = [];
  for (let i = 0; i < r.length - 1; i++) {
    const a = r[i], b = r[i + 1];
    const active = state.fly.on && i + 1 === state.fly.target;
    L.polyline([[a.lat, a.lon], [b.lat, b.lon]], { color: "#000", weight: active ? 9 : 7.5, opacity: .35, pane: "routePane", interactive: false }).addTo(L_route);
    lines.push(L.polyline([[a.lat, a.lon], [b.lat, b.lon]], { color: active ? "#f472b6" : "#f5a524", weight: active ? 6 : 4.5, opacity: .95, pane: "routePane" }).addTo(L_route));
    const leg = state.legs[i];
    const mid = [(a.lat + b.lat) / 2, (a.lon + b.lon) / 2];
    const h = L.marker(mid, { draggable: true, pane: "routePane", zIndexOffset: 500, icon: L.divIcon({ className: "", html: `<div style="display:flex;align-items:center;gap:3px;white-space:nowrap;transform:translate(-9px,-9px)"><div style="width:18px;height:18px;border-radius:999px;background:#060a13;border:2px solid #f5a524;color:#f5a524;display:flex;align-items:center;justify-content:center;font:700 12px sans-serif;cursor:grab">+</div><span class="lbl-tag" style="color:#fde68a;font-size:10px">${pad3(leg.mh)}° ${leg.dist.toFixed(0)}NM</span></div>`, iconSize: [18, 18], iconAnchor: [0, 0] }) }).addTo(L_route);
    h.on("drag", e => { const p = e.target.getLatLng(); lines[i].setLatLngs([[a.lat, a.lon], [p.lat, p.lng], [b.lat, b.lon]]); });
    h.on("dragend", e => { const p = e.target.getLatLng(); r.splice(i + 1, 0, { id: `WPT${r.length + 1}`, name: "", lat: p.lat, lon: p.lng, elev: 0, kind: "USR" }); afterRouteChange(); toast("แทรกจุดบินใหม่แล้ว"); });
  }
  r.forEach((w, idx) => {
    const icon = L.divIcon({ className: "", html: `<div style="display:inline-flex;align-items:center;gap:4px;white-space:nowrap;cursor:grab;transform:translate(-11px,-11px)"><div class="wp-num">${idx + 1}</div><span class="lbl-tag" style="color:#fff;border:1px solid #f5a524;font-size:10px;line-height:16px">${esc(w.id)}</span></div>`, iconSize: [22, 22], iconAnchor: [0, 0] });
    const m = L.marker([w.lat, w.lon], { icon, draggable: true, pane: "routePane", zIndexOffset: 600 }).addTo(L_route);
    m.bindPopup(() => `<div class="text-xs space-y-1.5"><b>WP ${idx + 1}: ${esc(w.id)}</b><div class="mono text-[11px] text-cyan-300">${fmtLL(w.lat, w.lon)}</div><div class="mono text-[11px] text-sky-300">${vorFixStr(w.lat, w.lon)}</div><div class="flex gap-1"><button onclick="saveRouteWp(${idx})" class="btn btn-sm flex-1">บันทึก WP</button><button onclick="removeWp(${idx})" class="btn btn-sm btn-red flex-1">ลบ</button></div></div>`);
    m.on("drag", e => { const p = e.target.getLatLng(); if (lines[idx - 1]) lines[idx - 1].setLatLngs([[r[idx - 1].lat, r[idx - 1].lon], [p.lat, p.lng]]); if (lines[idx]) lines[idx].setLatLngs([[p.lat, p.lng], [r[idx + 1].lat, r[idx + 1].lon]]); });
    m.on("dragend", e => { const p = e.target.getLatLng(); w.lat = p.lat; w.lon = p.lng; if (w.kind !== "USR" && w.kind !== "CW") { w.kind = "USR"; w.id = w.id + "*"; } afterRouteChange(); });
  });

  $("route-list").innerHTML = r.length ? r.map((w, i) => `<div class="flex items-center gap-2 bg-[#070b14] border border-[#1c2638] rounded-xl px-2 py-1.5">
      <span class="wp-num !w-6 !h-6 shrink-0">${i + 1}</span>
      <div class="min-w-0 flex-1"><div class="text-[13px] font-semibold text-white truncate mono">${esc(w.id)} <span class="text-slate-400 font-normal text-[11px]">${esc(w.name && w.name !== w.id ? w.name : "")}</span></div><div class="mono text-[11px] text-slate-400 truncate">${fmtLL(w.lat, w.lon)}</div></div>
      <button data-mv="${i}" data-d="-1" class="btn btn-sm !px-1.5" ${i === 0 ? "disabled" : ""}>↑</button><button data-mv="${i}" data-d="1" class="btn btn-sm !px-1.5" ${i === r.length - 1 ? "disabled" : ""}>↓</button><button data-rm="${i}" class="btn btn-sm btn-red !px-2">✕</button></div>`).join("")
    : `<div class="text-[12px] text-slate-400 text-center py-4 rounded-xl" style="border:1px dashed var(--line)">ยังไม่มีจุดบิน — ค้นหาด้านบน หรือกดปุ่ม <b class="text-amber-300">📍+</b> ที่แถบเครื่องมือแล้วแตะแผนที่</div>`;

  const L2 = state.legs;
  $("navlog-tbody").innerHTML = L2.length ? L2.map(l => `<tr>
      <td class="py-1.5 px-1 text-slate-200 whitespace-nowrap">${esc(l.a.id)}<span class="text-slate-500">→</span>${esc(l.b.id)}</td>
      <td class="px-1 text-right text-slate-300">${pad3(l.tc)}</td>
      <td class="px-1 text-right text-amber-300 font-semibold" title="WCA ${l.wca >= 0 ? "+" : ""}${l.wca.toFixed(0)}°">${pad3(l.mh)}</td>
      <td class="px-1 text-right text-white">${l.dist.toFixed(1)}</td>
      <td class="px-1 text-right">${l.gs > 0 ? Math.round(l.gs) : "--"}</td>
      <td class="px-1 text-right text-emerald-300">${hhmm(l.h)}</td>
      <td class="px-1 text-right text-slate-300">${l.h > 0 ? ict(l.eta) : "--"}</td>
      <td class="px-1 text-right text-sky-300">${l.fuel ? fmt(l.fuel) : "--"}</td>
      <td class="px-1 text-right ${l.msa && num(S.alt) && l.msa > num(S.alt) ? "text-rose-400 font-bold" : "text-slate-300"}">${l.msa ? fmt(l.msa) : "…"}</td></tr>`).join("")
    : `<tr><td colspan="9" class="py-3 text-center text-slate-500 font-sans">เพิ่มอย่างน้อย 2 จุดเพื่อคำนวณ</td></tr>`;

  const T = state.totals, fp = fuelPlan();
  $("tot-dist").textContent = `${T.dist.toFixed(1)} NM`;
  $("tot-ete").textContent = hhmm(T.h);
  $("tot-fuel").textContent = T.trip ? `${fmt(T.trip)} lb` : "--";
  $("tot-eta").textContent = T.h > 0 ? ict(T.eta) : "--:--";
  $("sum-dist").textContent = `${T.dist.toFixed(0)} NM`;
  $("sum-ete").textContent = hhmm(T.h);
  $("sum-fuel").textContent = T.trip ? `${fmt(T.trip)}` : "--";
  $("sum-eta").textContent = T.h > 0 ? ict(T.eta) : "--:--";
  $("hdr-route").textContent = r.length ? r.map(w => w.id).join(" › ") : "ยังไม่มีเส้นทาง";
  $("hdr-dist").textContent = `${T.dist.toFixed(0)} NM`;
  $("hdr-ete").textContent = hhmm(T.h);
  $("hdr-fuel").textContent = T.trip ? `${fmt(T.trip)} lb` : "--";
  const bn = $("fuel-status-banner");
  if (L2.length && num(S.burn) > 0 && num(S.fob) > 0) {
    bn.classList.remove("hidden");
    const ok = fp.margin >= 0;
    bn.className = `text-[12px] rounded-xl px-2.5 py-2 border ${ok ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-300" : "bg-rose-950/40 border-rose-500/50 text-rose-300"}`;
    bn.textContent = ok ? `เชื้อเพลิงพอ: ต้องการ ${fmt(fp.req)} lb (รวมสำรอง) • FOB ${fmt(fp.fob)} lb • เหลือเกิน ${fmt(fp.margin)} lb` : `เชื้อเพลิงไม่พอ: ต้องการ ${fmt(fp.req)} lb แต่มี ${fmt(fp.fob)} lb — ขาด ${fmt(-fp.margin)} lb`;
  } else bn.classList.add("hidden");

  renderFuelTab(); renderBrief(); drawProfile();
  if ($("notam-icao-filter").value === "ROUTE") renderNotams();
  if (state.fly.on) updateFly();
}

window.removeWp = i => { state.route.splice(i, 1); map.closePopup(); afterRouteChange(); };
window.saveRouteWp = i => { const w = state.route[i]; if (!w) return; upsertCwp(w.id, w.lat, w.lon); map.closePopup(); toast(`บันทึก ${w.id} แล้ว`); };

$("route-list").addEventListener("click", e => {
  const mv = e.target.closest("[data-mv]"), rm = e.target.closest("[data-rm]");
  if (mv) { const i = +mv.dataset.mv, j = i + +mv.dataset.d; if (j < 0 || j >= state.route.length) return; [state.route[i], state.route[j]] = [state.route[j], state.route[i]]; afterRouteChange(); }
  if (rm) { state.route.splice(+rm.dataset.rm, 1); afterRouteChange(); }
});

// ---- terrain profile (Open-Meteo elevation, 100 samples) ----
let profTimer = null, profReq = 0;
function scheduleProfile() { clearTimeout(profTimer); if (state.route.length < 2) { state.profile = null; drawProfile(); return; } $("profile-status").textContent = "กำลังโหลด..."; profTimer = setTimeout(loadProfile, 500); }
async function loadProfile() {
  const r = state.route; if (r.length < 2) return; const id = ++profReq;
  const legD = []; let tot = 0; for (let i = 0; i < r.length - 1; i++) { const d = distNM(r[i].lat, r[i].lon, r[i + 1].lat, r[i + 1].lon); legD.push(d); tot += d; }
  const N = 100, samples = [];
  for (let k = 0; k < N; k++) {
    let d = tot * k / (N - 1), i = 0, acc = 0; while (i < legD.length - 1 && acc + legD[i] < d) { acc += legD[i]; i++; }
    const f = legD[i] ? Math.min(1, (d - acc) / legD[i]) : 0;
    samples.push({ d, leg: i, lat: r[i].lat + (r[i + 1].lat - r[i].lat) * f, lon: r[i].lon + (r[i + 1].lon - r[i].lon) * f });
  }
  try {
    const url = `https://api.open-meteo.com/v1/elevation?latitude=${samples.map(s => s.lat.toFixed(4)).join(",")}&longitude=${samples.map(s => s.lon.toFixed(4)).join(",")}`;
    const res = await fetch(url); if (!res.ok) throw new Error(res.status); const data = await res.json();
    if (id !== profReq) return;
    samples.forEach((s, k) => s.elev = Math.max(0, Math.round((data.elevation[k] || 0) * 3.28084)));
    const legMax = legD.map((_, i) => Math.max(0, ...samples.filter(s => s.leg === i).map(s => s.elev)));
    r.forEach(w => { if (w.kind === "USR" || w.kind === "CW" || w.kind === "VFR") { const s = samples.reduce((b, x) => Math.abs(x.lat - w.lat) + Math.abs(x.lon - w.lon) < Math.abs(b.lat - w.lat) + Math.abs(b.lon - w.lon) ? x : b); w.elev = s.elev; } });
    state.profile = { samples, legMax, tot };
    $("profile-status").textContent = "";
    renderRoute();
  } catch (e) { if (id === profReq) $("profile-status").textContent = "โหลดข้อมูลความสูงไม่ได้ (ออฟไลน์?)"; }
}
function drawProfile() {
  const c = $("profile-canvas"); const W = c.clientWidth, H = c.clientHeight; if (!W) return;
  const dpr = window.devicePixelRatio || 1; c.width = W * dpr; c.height = H * dpr; const g = c.getContext("2d"); g.scale(dpr, dpr); g.clearRect(0, 0, W, H);
  const P = state.profile, alt = num(S.alt);
  const setStat = (a, b, cc) => { $("pf-max").textContent = a; $("pf-clear").textContent = b; $("pf-msa").textContent = cc; };
  if (!P) { g.fillStyle = "#64748b"; g.font = "12px 'IBM Plex Sans Thai'"; g.textAlign = "center"; g.fillText(state.route.length < 2 ? "เพิ่มเส้นทางเพื่อดูโปรไฟล์" : "กำลังคำนวณ...", W / 2, H / 2); setStat("--", "--", "--"); return; }
  const maxE = Math.max(...P.samples.map(s => s.elev)); const top = Math.max(maxE, alt, 500) * 1.18;
  const pl = 38, pr = 8, pt = 10, pb = 18, x = d => pl + (W - pl - pr) * d / (P.tot || 1), y = e => pt + (H - pt - pb) * (1 - e / top);
  g.strokeStyle = "rgba(148,163,184,.12)"; g.fillStyle = "#64748b"; g.font = "10px 'IBM Plex Mono'"; g.textAlign = "right";
  const step = top > 8000 ? 2000 : top > 3000 ? 1000 : 500;
  for (let e = 0; e <= top; e += step) { g.beginPath(); g.moveTo(pl, y(e)); g.lineTo(W - pr, y(e)); g.stroke(); g.fillText(e >= 1000 ? (e / 1000) + "k" : e, pl - 4, y(e) + 3); }
  g.beginPath(); g.moveTo(x(0), y(0)); P.samples.forEach(s => g.lineTo(x(s.d), y(s.elev))); g.lineTo(x(P.tot), y(0)); g.closePath();
  const grad = g.createLinearGradient(0, pt, 0, H - pb); grad.addColorStop(0, "#b45309"); grad.addColorStop(1, "#1a2e05"); g.fillStyle = grad; g.fill();
  g.strokeStyle = "#fbbf24"; g.lineWidth = 1.2; g.beginPath(); P.samples.forEach((s, i) => i ? g.lineTo(x(s.d), y(s.elev)) : g.moveTo(x(s.d), y(s.elev))); g.stroke(); g.lineWidth = 1;
  if (alt > 0) { P.samples.forEach(s => { if (s.elev > alt - 500) { g.fillStyle = s.elev >= alt ? "rgba(239,68,68,.85)" : "rgba(245,165,36,.6)"; g.fillRect(x(s.d) - 2, y(s.elev), 4, y(0) - y(s.elev)); } });
    g.strokeStyle = "#38bdf8"; g.lineWidth = 2; g.setLineDash([6, 4]); g.beginPath(); g.moveTo(pl, y(alt)); g.lineTo(W - pr, y(alt)); g.stroke(); g.setLineDash([]); g.lineWidth = 1;
    g.fillStyle = "#7dd3fc"; g.textAlign = "left"; g.fillText(`${fmt(alt)} ft`, pl + 4, y(alt) - 4); }
  let acc = 0; g.textAlign = "center"; g.fillStyle = "#fde68a";
  state.route.forEach((w, i) => { if (i > 0) acc += distNM(state.route[i - 1].lat, state.route[i - 1].lon, w.lat, w.lon); const xx = x(acc); g.strokeStyle = "rgba(245,165,36,.4)"; g.beginPath(); g.moveTo(xx, pt); g.lineTo(xx, H - pb); g.stroke(); if (W > 360 || i === 0 || i === state.route.length - 1) g.fillText(w.id.slice(0, 7), Math.min(W - 20, Math.max(pl + 14, xx)), H - 5); });
  const clear = alt > 0 ? alt - maxE : null, msa = Math.ceil((maxE + 1000) / 100) * 100;
  setStat(`${fmt(maxE)} ft`, clear == null ? "--" : `${fmt(clear)} ft`, `${fmt(msa)} ft`);
  $("pf-clear").className = clear != null && clear < 500 ? "!text-rose-400" : clear != null && clear < 1000 ? "!text-amber-300" : "!text-emerald-300";
}
new ResizeObserver(() => drawProfile()).observe($("profile-canvas"));

// ---- terrain hazard overlay ----
let terrTimer = null, terrReq = 0;
function scheduleTerrainOverlay() { clearTimeout(terrTimer); L_terr.clearLayers(); if (state.route.length < 2 || !$("tg-terrain").checked || num(S.alt) <= 0) return; terrTimer = setTimeout(loadTerrainOverlay, 700); }
async function loadTerrainOverlay() {
  const id = ++terrReq, la = state.route.map(w => w.lat), lo = state.route.map(w => w.lon), pd = .3;
  const a0 = Math.min(...la) - pd, a1 = Math.max(...la) + pd, o0 = Math.min(...lo) - pd, o1 = Math.max(...lo) + pd, N = 10, dA = (a1 - a0) / N, dO = (o1 - o0) / N, A = [], O = [];
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) { A.push((a0 + (i + .5) * dA).toFixed(4)); O.push((o0 + (j + .5) * dO).toFixed(4)); }
  try {
    const d = await (await fetch(`https://api.open-meteo.com/v1/elevation?latitude=${A.join(",")}&longitude=${O.join(",")}`)).json(); if (id !== terrReq) return;
    L_terr.clearLayers(); let k = 0;
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) { const ft = Math.round((d.elevation[k++] || 0) * 3.28084); if (ft > num(S.alt) - 500) L.rectangle([[a0 + i * dA, o0 + j * dO], [a0 + (i + 1) * dA, o0 + (j + 1) * dO]], { pane: "terrainPane", color: ft > num(S.alt) ? "#ef4444" : "#f5a524", weight: .4, fillOpacity: ft > num(S.alt) ? .28 : .14 }).bindPopup(`<div class="text-xs"><b class="text-rose-400">ภูมิประเทศ ${fmt(ft)} ft</b><br/>ความสูงบิน ${fmt(num(S.alt))} ft</div>`).addTo(L_terr); }
  } catch (_) {}
}

// =========================================================================
// 5. FUEL / WEIGHT TAB
// =========================================================================
function bar(val, max, color) { const p = max > 0 ? Math.min(100, val / max * 100) : 0; return `<div class="h-2.5 rounded-full overflow-hidden" style="background:rgba(148,163,184,.15)"><div class="h-full rounded-full" style="width:${p}%;background:${color}"></div></div>`; }
function renderFuelTab() {
  const fp = fuelPlan(), ap = AIRPORTS.find(a => a.icao === S.altn), burn = num(S.burn);
  const row = (k, v, sub, cls = "") => `<div class="flex items-baseline justify-between py-1.5 border-b border-[#1c2638] ${cls}"><span>${k}${sub ? ` <span class="text-[11px] text-slate-500">${sub}</span>` : ""}</span><span class="mono">${fmt(v)} lb <span class="text-slate-500 text-[11px]">${burn > 0 ? hhmm(v / burn) : ""}</span></span></div>`;
  $("fuel-plan").innerHTML = (num(S.burn) > 0 ? `
    ${row("Start / Taxi / Hover", fp.taxi)}
    ${row("Trip fuel", fp.trip, state.legs.length ? `${state.totals.dist.toFixed(0)} NM` : "ยังไม่มีเส้นทาง")}
    ${row("Contingency", fp.cont, `${num(S.cont)}% ของ trip`)}
    ${row("Alternate", fp.altn, ap ? `${ap.icao} ${fp.altnDist.toFixed(0)} NM` : "ไม่ได้เลือก")}
    ${row("Final reserve", fp.reserve, `${num(S.res)} นาที`)}
    ${row("Extra", fp.extra)}
    <div class="flex items-baseline justify-between py-2 font-semibold text-white"><span>ต้องการขั้นต่ำ</span><span class="mono text-[16px]">${fmt(fp.req)} lb</span></div>
    <div class="flex items-baseline justify-between pb-1"><span>FOB</span><span class="mono text-[16px] text-sky-300">${fmt(fp.fob)} lb <span class="text-[11px] text-slate-400">(${(fp.fob * 0.4536).toFixed(0)} kg)</span></span></div>
    ${bar(fp.req, Math.max(fp.fob, fp.req, num(S.cap)), fp.margin >= 0 ? "#22c55e" : "#ef4444")}
    <div class="grid grid-cols-3 gap-1.5 mt-2">
      <div class="stat"><span>ส่วนเกิน</span><b class="${fp.margin >= 0 ? "!text-emerald-300" : "!text-rose-400"}">${fp.margin >= 0 ? "+" : ""}${fmt(fp.margin)}</b></div>
      <div class="stat"><span>Endurance</span><b>${hhmm(fp.endur)}</b></div>
      <div class="stat"><span>เหลือเมื่อถึง</span><b>${fmt(fp.landFuel)}</b></div>
    </div>` : `<p class="text-[12px] text-slate-400">ใส่อัตราสิ้นเปลืองในแท็บแผนบินก่อน</p>`);
  const w = weightCalc();
  $("wb-out").innerHTML = w.mtow > 0 && num(S.bew) > 0 ? `
    <div class="grid grid-cols-3 gap-1.5">
      <div class="stat"><span>Zero fuel wt</span><b>${fmt(w.zfw)}</b></div>
      <div class="stat"><span>Takeoff wt</span><b class="${w.margin >= 0 ? "" : "!text-rose-400"}">${fmt(w.tow)}</b></div>
      <div class="stat"><span>Landing wt</span><b>${fmt(w.lw)}</b></div>
    </div>
    <div class="mt-2 flex justify-between text-[12px]"><span class="text-slate-400">TOW / MTOW ${fmt(w.mtow)} lb</span><span class="mono ${w.margin >= 0 ? "text-emerald-300" : "text-rose-400"}">${w.margin >= 0 ? "เหลือ " + fmt(w.margin) : "เกิน " + fmt(-w.margin)} lb</span></div>
    ${bar(w.tow, w.mtow, w.margin >= 0 ? (w.margin < w.mtow * .03 ? "#f5a524" : "#22c55e") : "#ef4444")}
    <p class="text-[12px] text-slate-300 mt-2">เติมน้ำมันได้สูงสุดตาม MTOW: <b class="mono text-amber-300">${fmt(Math.max(0, Math.min(w.maxFuel, num(S.cap) || Infinity)))} lb</b></p>`
    : `<p class="text-[12px] text-slate-400">ใส่ BEW และ MTOW เพื่อคำนวณ</p>`;
}

// =========================================================================
// 6. BRIEFING: GO/NO-GO, SUN, NOTAM ON ROUTE, WX
// =========================================================================
function sunTimes(date, lat, lon, zenith) {
  const ymd = date.toLocaleDateString("en-CA", { timeZone: "Asia/Bangkok" }).split("-").map(Number);
  const N = Math.round((Date.UTC(ymd[0], ymd[1] - 1, ymd[2]) - Date.UTC(ymd[0], 0, 0)) / 864e5), lh = lon / 15;
  const calc = rise => {
    const t = N + ((rise ? 6 : 18) - lh) / 24, M = .9856 * t - 3.289;
    let Lg = (M + 1.916 * Math.sin(toRad(M)) + .02 * Math.sin(toRad(2 * M)) + 282.634 + 360) % 360;
    let RA = (toDeg(Math.atan(.91764 * Math.tan(toRad(Lg)))) + 360) % 360; RA += Math.floor(Lg / 90) * 90 - Math.floor(RA / 90) * 90; RA /= 15;
    const sd = .39782 * Math.sin(toRad(Lg)), cd = Math.cos(Math.asin(sd)), cH = (Math.cos(toRad(zenith)) - sd * Math.sin(toRad(lat))) / (cd * Math.cos(toRad(lat)));
    if (cH > 1 || cH < -1) return null;
    const H = (rise ? 360 - toDeg(Math.acos(cH)) : toDeg(Math.acos(cH))) / 15, T = H + RA - .06571 * t - 6.622;
    const local = ((T - lh + 7) % 24 + 24) % 24;
    return new Date(Date.UTC(ymd[0], ymd[1] - 1, ymd[2]) - 7 * 3600e3 + local * 3600e3);
  };
  return { rise: calc(true), set: calc(false) };
}
function routeNotamHits() {
  const r = state.route; if (r.length < 1) return [];
  const pts = [];
  if (r.length === 1) pts.push({ p: [r[0].lat, r[0].lon], leg: 0 });
  for (let i = 0; i < r.length - 1; i++) { const d = distNM(r[i].lat, r[i].lon, r[i + 1].lat, r[i + 1].lon), n = Math.max(1, Math.ceil(d / .5)); for (let k = 0; k <= n; k++) pts.push({ p: [r[i].lat + (r[i + 1].lat - r[i].lat) * k / n, r[i].lon + (r[i + 1].lon - r[i].lon) * k / n], leg: i }); }
  const hits = [], etd = getEtd(), eta = state.totals.eta || new Date(etd.getTime() + 3600e3);
  for (const n of state.notams) {
    const g = notamGeom(n); if (!g) continue; let best = Infinity, leg = 0, inside = false;
    for (const s of pts) {
      let d;
      if (g.type === "circle") d = distNM(s.p[0], s.p[1], g.center[0], g.center[1]) - g.r;
      else if (g.type === "poly") { if (inPoly(s.p, g.pts)) d = -1; else { d = Infinity; for (let i = 0; i < g.pts.length - 1; i++) d = Math.min(d, segDistNM(s.p, g.pts[i], g.pts[i + 1])); } }
      else { d = Infinity; for (let i = 0; i < g.pts.length - 1; i++) d = Math.min(d, segDistNM(s.p, g.pts[i], g.pts[i + 1])); d -= g.r; }
      if (d < best) { best = d; leg = s.leg; } if (d <= 0) inside = true;
    }
    if (best <= 3) { const v = notamValidity(n); const active = v ? (v.from <= eta && v.to >= etd) : true; hits.push({ n, dist: best, inside, leg, active }); }
  }
  return hits.sort((a, b) => (b.active - a.active) || (b.inside - a.inside) || ((a.n.severity === "critical" ? 0 : 1) - (b.n.severity === "critical" ? 0 : 1)) || a.dist - b.dist);
}
// flight category: real METAR first, model fallback
const METAR_MAX_AGE = 150;   // minutes — older reports are treated as "no current METAR"
// VMC per ICAO Annex 2 / Thai AIP ENR 1.2 inside a control zone: visibility ≥ 5 km and ceiling ≥ 1,500 ft, no fog / VV.
function flightCat(icao) {
  const mt = state.metar[icao], vmin = num(S.vismin), cmin = num(S.ceilmin);
  if (mt && (Date.now() - mt.obs) / 6e4 <= METAR_MAX_AGE) {
    const wx = mt.wx || "";
    const imc = mt.vis < 5 || (mt.ceil != null && mt.ceil < 1500) || mt.vv || /(^|\s)[-+]?(FG|FZFG)\b/.test(wx);
    if (imc) return { label: "IMC", cls: "pill-stop", ok: false, imc: true, src: "METAR" };
    const below = mt.vis < vmin || (mt.ceil != null && mt.ceil < cmin);
    const hazard = /(^|\s)[-+]?TS|SQ|FC|\+RA|\+SHRA/.test(wx) || mt.gust >= 25;
    if (below || hazard) return { label: below ? "VMC • ต่ำกว่าขั้นต่ำที่ตั้ง" : "VMC • " + (mt.gust >= 25 ? `ลมกระโชก ${mt.gust}kt` : "TS/ฝนหนัก"), cls: "pill-warn", ok: true, marg: true, imc: false, src: "METAR" };
    return { label: "VMC", cls: "pill-go", ok: true, imc: false, src: "METAR" };
  }
  if (mt) return { label: "METAR เก่า", cls: "pill-info", ok: null, src: "STALE" };
  const wx = state.weather[icao]; if (!wx) return { label: "ไม่มี METAR", cls: "pill-info", ok: null };
  const ceil = wx.cloud >= 60 ? wx.base : null, bad = wx.vis < 5 || (ceil != null && ceil < 1500);
  return bad ? { label: "IMC? (โมเดล)", cls: "pill-warn", ok: true, marg: true, src: "MODEL" } : { label: "VMC? (โมเดล)", cls: "pill-info", ok: true, marg: true, src: "MODEL" };
}
function wxLine(ap, tag) {
  const wx = state.weather[ap.icao], mt = state.metar[ap.icao], taf = state.taf[ap.icao], fc = flightCat(ap.icao);
  let body;
  if (mt) {
    const age = Math.max(0, Math.round((Date.now() - mt.obs) / 6e4));
    body = `<div class="mono text-[12px] text-slate-100 mt-1 leading-snug break-words">${esc(mt.raw)}</div>
      <div class="text-[11px] mt-0.5 ${age > 90 ? "text-amber-300" : "text-slate-500"}">METAR • ${age} นาทีที่แล้ว${mt.fltCat ? " • " + esc(mt.fltCat) : ""}${mt.ceil != null ? ` • ceiling ${fmt(mt.ceil)} ft` : ""}</div>
      ${taf ? `<details class="mt-1"><summary class="text-[11px] text-sky-300 cursor-pointer select-none">TAF</summary><div class="mono text-[11px] text-slate-300 whitespace-pre-wrap leading-snug mt-0.5">${esc(taf)}</div></details>` : ""}`;
  } else if (wx) body = `<div class="mono text-[12px] text-slate-300 mt-1">${pad3(wx.wdir)}/${wx.wspd}${wx.gust > wx.wspd + 5 ? "G" + wx.gust : ""}KT • VIS ${wx.vis.toFixed(1)}km • เมฆ ${wx.cloud}% ฐาน~${fmt(wx.base)}ft • ${wx.temp}/${wx.dew}°C • Q${wx.qnh}${wx.rain ? ` • ฝน ${wx.rain}mm` : ""}</div><div class="text-[11px] text-slate-500 mt-0.5">ค่าโมเดล Open-Meteo (ไม่มี METAR)</div>`;
  else body = `<div class="text-[12px] text-slate-500 mt-1">ไม่มีข้อมูล</div>`;
  return `<div class="bg-[#070b14] border border-[#1c2638] rounded-xl p-2.5"><div class="flex justify-between items-center gap-2"><span class="text-[13px] min-w-0 truncate"><span class="text-slate-500 text-[10.5px]">${tag}</span> <b class="mono text-emerald-300">${ap.icao}</b> ${esc(ap.nameTh)}</span><span class="pill ${fc.cls} shrink-0">${fc.label}</span></div>${body}</div>`;
}
function renderBrief() {
  const r = state.route, fp = fuelPlan(), w = weightCalc(), items = [];
  const add = (st, t, d) => items.push({ st, t, d });
  if (r.length < 2) add("info", "ยังไม่มีเส้นทาง", "เพิ่มอย่างน้อย 2 จุดในแท็บแผนบิน");
  if (!(num(S.tas) > 0 && num(S.burn) > 0)) add("warn", "ข้อมูลสมรรถนะไม่ครบ", "ใส่ TAS และอัตราสิ้นเปลือง");
  else if (r.length >= 2) {
    if (num(S.fob) <= 0) add("warn", "ยังไม่ได้ใส่ FOB", "แท็บน้ำมัน/น้ำหนัก");
    else add(fp.margin >= 0 ? "go" : "stop", "เชื้อเพลิง", fp.margin >= 0 ? `เหลือเกินขั้นต่ำ ${fmt(fp.margin)} lb` : `ขาด ${fmt(-fp.margin)} lb จากขั้นต่ำ ${fmt(fp.req)} lb`);
  }
  if (w.mtow > 0 && num(S.bew) > 0) add(w.margin >= 0 ? "go" : "stop", "น้ำหนักขึ้นบิน", w.margin >= 0 ? `${fmt(w.tow)} / ${fmt(w.mtow)} lb` : `เกิน MTOW ${fmt(-w.margin)} lb`);
  else add("warn", "ยังไม่คำนวณน้ำหนัก", "ใส่ BEW / MTOW");
  if (state.profile && num(S.alt) > 0) { const mx = Math.max(...state.profile.samples.map(s => s.elev)), c = num(S.alt) - mx; add(c >= 1000 ? "go" : c >= 500 ? "warn" : "stop", "ระยะห่างภูมิประเทศ", `${fmt(c)} ft เหนือจุดสูงสุด ${fmt(mx)} ft`); }
  else if (r.length >= 2 && num(S.alt) <= 0) add("warn", "ยังไม่กำหนดความสูงบิน", "ใส่ความสูงบินเพื่อตรวจภูมิประเทศ");
  const dep = AIRPORTS.find(a => r[0] && a.icao === r[0].id), dst = AIRPORTS.find(a => r.length > 1 && a.icao === r[r.length - 1].id), alt = AIRPORTS.find(a => a.icao === S.altn);
  [[dep, "ต้นทาง"], [dst, "ปลายทาง"]].forEach(([ap, t]) => { if (ap) { const f = flightCat(ap.icao); if (f.ok != null) add(f.ok ? (f.marg ? "warn" : "go") : "stop", `อากาศ${t} ${ap.icao}`, f.label + (f.src === "METAR" ? " (METAR)" : " (ค่าโมเดล)")); } });
  const hits = routeNotamHits(), act = hits.filter(h => h.active && h.inside);
  add(act.some(h => h.n.severity === "critical") ? "stop" : act.length ? "warn" : "go", "NOTAM ตามเส้นทาง", act.length ? `${act.length} รายการตัดผ่านเส้นทางในช่วงเวลาบิน` : hits.length ? `${hits.length} รายการใกล้เส้นทาง (ไม่ตัดผ่าน/ไม่อยู่ในช่วงเวลา)` : "ไม่พบในชุดข้อมูล");
  if (state.scan && state.scan.key === routeKey()) { const sc = state.scan; add(sc.power.length || sc.tall.length ? "warn" : "go", "สิ่งกีดขวาง (OSM)", `สายไฟแรงสูงตัดผ่าน ${sc.power.length} • เสา/หอสูง ${sc.obst.length}${sc.tall.length ? ` (≥300 ft: ${sc.tall.length})` : ""}`); }
  const end = r[r.length - 1] || r[0];
  let sunHtml = `<p class="text-[12px] text-slate-400">เพิ่มเส้นทางเพื่อคำนวณ</p>`;
  if (end) {
    const etd = getEtd(), st = sunTimes(etd, end.lat, end.lon, 90.833), ct = sunTimes(etd, end.lat, end.lon, 96), s0 = r[0] ? sunTimes(etd, r[0].lat, r[0].lon, 90.833) : st;
    const eta = state.totals.eta || etd, mins = st.set ? (st.set - eta) / 6e4 : null;
    const preDawnDep = s0.rise && etd < s0.rise, preDawnArr = st.rise && eta < st.rise;
    const sunMsg = preDawnArr ? `ถึงก่อนพระอาทิตย์ขึ้น ${Math.round((st.rise - eta) / 6e4)} นาที — เป็นการบินกลางคืน ต้องมีคุณสมบัติ/อนุญาตบินกลางคืน`
      : mins == null ? "" : mins >= 0 ? `ถึงก่อนพระอาทิตย์ตก ${Math.floor(mins / 60)} ชม. ${Math.round(mins % 60)} นาที` : `ถึงหลังพระอาทิตย์ตก ${Math.round(-mins)} นาที — ต้องมีคุณสมบัติ/อนุญาตบินกลางคืน`;
    const sunBad = preDawnArr || preDawnDep || (mins != null && mins < 30);
    sunHtml = `<div class="grid grid-cols-2 gap-1.5"><div class="stat"><span>พระอาทิตย์ขึ้น (ต้นทาง)</span><b>${ict(s0.rise)}</b></div><div class="stat"><span>พระอาทิตย์ตก (ปลายทาง)</span><b class="!text-amber-300">${ict(st.set)}</b></div><div class="stat"><span>สิ้นสุด civil twilight</span><b>${ict(ct.set)}</b></div><div class="stat"><span>ETD → ETA</span><b>${ict(etd)} → ${ict(eta)}</b></div></div>
      <p class="mt-2 text-[12px] ${sunBad ? "text-rose-300" : "text-slate-300"}">${preDawnDep ? `ออกก่อนพระอาทิตย์ขึ้น (${ict(s0.rise)}) • ` : ""}${sunMsg}</p>`;
    if (r.length > 1) {
      if (preDawnDep || preDawnArr) add("stop", "แสงกลางวัน", preDawnDep ? `ETD ${ict(etd)} ก่อนพระอาทิตย์ขึ้น ${ict(s0.rise)}` : `ETA ${ict(eta)} ก่อนพระอาทิตย์ขึ้น ${ict(st.rise)}`);
      else if (mins != null) add(mins >= 30 ? "go" : mins >= 0 ? "warn" : "stop", "แสงกลางวัน", mins >= 0 ? `ถึงก่อนตะวันตก ${hhmm(mins / 60)} ชม.` : "ถึงหลังพระอาทิตย์ตก");
    }
  }
  $("sun-out").innerHTML = sunHtml;
  const ic = { go: ["check-circle-2", "text-emerald-400"], warn: ["alert-triangle", "text-amber-300"], stop: ["x-octagon", "text-rose-400"], info: ["info", "text-sky-300"] };
  $("go-list").innerHTML = items.map(i => `<div class="row-st"><i data-lucide="${ic[i.st][0]}" class="w-4 h-4 mt-0.5 shrink-0 ${ic[i.st][1]}"></i><div><div class="font-medium text-slate-100">${esc(i.t)}</div><div class="text-[12px] text-slate-400">${esc(i.d)}</div></div></div>`).join("");
  const anyStop = items.some(i => i.st === "stop"), anyWarn = items.some(i => i.st === "warn" || i.st === "info");
  const badge = anyStop ? ["NO-GO", "pill-stop"] : anyWarn ? ["CHECK", "pill-warn"] : ["GO", "pill-go"];
  ["go-badge", "brief-badge", "sum-go"].forEach(id => { const el = $(id); el.className = el.className.replace(/pill-(go|stop|warn|info)/g, "").trim() + " " + badge[1]; el.textContent = badge[0]; });
  $("route-notams").innerHTML = hits.length ? hits.map(h => `<div class="border rounded-xl p-2 ${h.inside && h.active ? (h.n.severity === "critical" ? "border-rose-500/50 bg-rose-950/20" : "border-amber-500/50 bg-amber-950/20") : "border-[#1c2638] bg-[#070b14] opacity-80"}">
      <div class="flex justify-between gap-2"><b class="mono">${esc(h.n.id)} <span class="text-slate-400 font-normal">${esc(h.n.icao)}</span></b><span class="flex gap-1">${h.inside ? `<span class="pill pill-stop">ตัดผ่าน</span>` : `<span class="pill pill-info">ห่าง ${h.dist.toFixed(1)} NM</span>`}${h.active ? `<span class="pill pill-warn">มีผลช่วงบิน</span>` : `<span class="pill pill-info">นอกช่วงเวลา</span>`}</span></div>
      <div class="text-slate-200 mt-0.5">${esc(h.n.title)}</div><div class="mono text-[11px] text-slate-400">ขา ${h.leg + 1} • VALID ${esc(h.n.valid)}</div></div>`).join("")
    : `<p class="text-slate-400">${r.length ? "ไม่พบ NOTAM ในรัศมี 3 NM ของเส้นทาง (จากชุดข้อมูลในแอป)" : "เพิ่มเส้นทางก่อน"}</p>`;
  $("brief-wx").innerHTML = [[dep, "DEP"], [dst, "DEST"], [alt, "ALTN"]].filter(x => x[0]).map(x => wxLine(x[0], x[1])).join("") || `<p class="text-[12px] text-slate-400">เส้นทางที่เริ่ม/จบที่สนามบินในฐานข้อมูลจะแสดงอากาศที่นี่</p>`;
  lucide.createIcons();
}
function renderChecklist() {
  const st = LS.get(K.check, {});
  $("checklist").innerHTML = CHECKLIST_ITEMS.map((t, i) => `<label class="flex items-start gap-2.5 py-2 px-1 border-b border-[#1c2638] last:border-0 cursor-pointer"><input type="checkbox" data-ck="${i}" ${st[i] ? "checked" : ""} class="accent-emerald-500 w-5 h-5 mt-0.5 shrink-0"/><span class="text-[13px] ${st[i] ? "text-slate-500 line-through" : "text-slate-200"}">${esc(t)}</span></label>`).join("");
}
$("checklist").addEventListener("change", e => { const i = e.target.dataset.ck; if (i == null) return; const st = LS.get(K.check, {}); st[i] = e.target.checked; LS.set(K.check, st); renderChecklist(); });
$("btn-reset-check").onclick = () => { LS.set(K.check, {}); renderChecklist(); };

// =========================================================================
// 7. AIRPORTS / NOTAM LISTS
// =========================================================================
function populateSelectors() {
  const dl = [];
  AIRPORTS.forEach(a => dl.push([`${a.icao} — ${a.nameTh}`, `AP:${a.icao}`]));
  VOR_STATIONS.forEach(v => dl.push([`${v.id} — VOR ${v.name} ${v.freq}`, `VOR:${v.id}`]));
  VFR_REPORTING_POINTS.forEach(p => dl.push([`${p.name} — VFR ${p.airport}`, `VFR:${p.id}`]));
  state.cwps.forEach((c, i) => dl.push([`${c.id} — Waypoint ที่บันทึก`, `CW:${i}`]));
  state.dlMap = new Map(dl);
  $("wp-datalist").innerHTML = dl.map(d => `<option value="${esc(d[0])}"></option>`).join("");
  const apOpts = AIRPORTS.map(a => `<option value="${a.icao}">${a.icao} — ${esc(a.nameTh)}</option>`).join("");
  $("s-altn").innerHTML = `<option value="">— ไม่มี —</option>` + apOpts; $("s-altn").value = S.altn || "";
  if ($("nn-icao").options.length === 0) { $("nn-icao").innerHTML = `<option>VTBB</option>` + AIRPORTS.map(a => `<option>${a.icao}</option>`).join(""); AIRPORTS.forEach(a => $("notam-icao-filter").insertAdjacentHTML("beforeend", `<option value="${a.icao}">${a.icao}</option>`)); }
  $("s-preset").innerHTML = Object.entries(HELI_PRESETS).map(([k, p]) => `<option value="${k}">${esc(p.name)}${p.tas ? ` — ${p.tas} kt / ${p.burn} lb/h` : ""}</option>`).join("");
  $("s-preset").value = S.preset in HELI_PRESETS ? S.preset : "custom";
}
function addFromSearch() {
  const v = $("wp-search").value.trim(); if (!v) return;
  let key = state.dlMap.get(v);
  if (!key) { const up = v.toUpperCase(); if (AIRPORTS.some(a => a.icao === up)) key = `AP:${up}`; else if (VOR_STATIONS.some(x => x.id === up)) key = `VOR:${up}`; else { const p = VFR_REPORTING_POINTS.find(x => x.id === up || x.name.toUpperCase() === up); if (p) key = `VFR:${p.id}`; } }
  if (key) { window.addKey(key); $("wp-search").value = ""; return; }
  const c = parseUserCoords(v); if (c) { window.addLL(c.lat, c.lon); $("wp-search").value = ""; return; }
  toast("ไม่พบจุดนี้ — ลอง ICAO / ชื่อ VOR / พิกัด");
}
$("btn-add-wp").onclick = addFromSearch;
$("wp-search").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); addFromSearch(); } });

window.inspectAirport = icao => { switchTab("airports"); showAirportDetail(icao); if (!isLg() && sheetState === "peek") setSheet("half"); };
function showAirportDetail(icao) {
  const ap = AIRPORTS.find(a => a.icao === icao), c = $("airport-detail-card"); if (!ap) return; c.classList.remove("hidden");
  const st = sunTimes(new Date(), ap.lat, ap.lon, 90.833);
  c.innerHTML = `<div class="flex justify-between gap-2"><div><div class="text-[15px] font-bold text-emerald-300">${ap.icao} / ${ap.iata} — ${esc(ap.nameTh)}</div><div class="mono text-[11px] text-slate-400">${fmtLL(ap.lat, ap.lon)} • ELEV ${ap.elev} ft • ${esc(ap.type)}</div></div><button id="ap-close" class="btn btn-sm">✕</button></div>
    ${wxLine(ap, "WX")}
    <div class="text-[12px] text-slate-300"><b>RWY:</b> ${ap.runways.join(", ")} • <span class="mono">☀ ${ict(st.rise)}–${ict(st.set)}</span></div>
    <div class="grid grid-cols-2 gap-1">${Object.entries(ap.atc).map(([k, v]) => `<div class="flex justify-between bg-[#070b14] border border-[#1c2638] rounded-lg px-2 py-1 mono text-[12px]"><span class="text-slate-400">${k}</span><span class="text-emerald-300 text-right">${v}</span></div>`).join("")}</div>
    ${navaidRows(ap)}
    <div class="text-[12px] bg-amber-500/10 border border-amber-500/30 text-amber-200 rounded-xl p-2"><b>Heli note:</b> ${esc(ap.heliNote)}</div>
    <div class="flex gap-2"><button onclick="addKey('AP:${ap.icao}')" class="btn btn-go flex-1">+ เพิ่มในแผนบิน</button><button id="ap-fly" class="btn">โฟกัสแผนที่</button></div>`;
  $("ap-close").onclick = () => c.classList.add("hidden"); $("ap-fly").onclick = () => map.flyTo([ap.lat, ap.lon], 11);
}
function renderAirportsList() {
  const q = $("airport-search").value.trim().toLowerCase();
  const list = AIRPORTS.filter(a => !q || [a.icao, a.iata, a.name, a.nameTh, ...a.navaids.map(n => n.id), ...a.ils.map(l => l.id || "")].some(s => s.toLowerCase().includes(q)));
  $("airports-list").innerHTML = list.map(a => { const fc = flightCat(a.icao); return `<div data-ap="${a.icao}" class="bg-[#0c1322] border border-[#1c2638] hover:border-amber-500/40 rounded-xl p-2.5 flex items-center justify-between gap-2 cursor-pointer transition">
      <div class="min-w-0"><div class="flex items-center gap-1.5"><b class="mono text-[13px] text-emerald-300">${a.icao}</b><span class="pill ${fc.cls}">${fc.label}</span>${fc.src === "METAR" ? `<span class="text-[9.5px] text-slate-500">METAR</span>` : ""}<span class="text-[13px] truncate">${esc(a.nameTh)}</span></div><div class="mono text-[11px] text-slate-400 truncate">${fmtLL(a.lat, a.lon)} • ${a.elev} ft${a.navaids.length ? " • " + a.navaids.filter(n => /VOR/.test(n.type)).map(n => n.id).join("/") : ""}${a.ils.length ? ` • <span class="text-fuchsia-300">ILS ${a.ils.map(l => l.rwy).join("/")}</span>` : ""}</div></div>
      <button data-add="${a.icao}" class="btn btn-sm btn-go shrink-0">+</button></div>`; }).join("");
}
$("airports-list").addEventListener("click", e => { const add = e.target.closest("[data-add]"); if (add) { e.stopPropagation(); window.addKey("AP:" + add.dataset.add); return; } const row = e.target.closest("[data-ap]"); if (row) { const a = AIRPORTS.find(x => x.icao === row.dataset.ap); map.flyTo([a.lat, a.lon], 10); showAirportDetail(a.icao); } });
$("airport-search").addEventListener("input", renderAirportsList);

function renderNotams() {
  const list = filteredNotams(); $("notam-count-badge").textContent = state.notams.length;
  $("notam-expired-note").textContent = state.notamsExpired ? `ซ่อน ${state.notamsExpired} รายการที่หมดอายุแล้ว` : "";
  const now = new Date();
  $("notams-list").innerHTML = list.length ? list.map(n => { const v = notamValidity(n), exp = v && v.to < now, sty = { critical: "border-rose-500/40 bg-rose-950/15", caution: "border-amber-500/40 bg-amber-950/15", info: "border-[#1c2638] bg-[#0c1322]" }[n.severity] || "";
    return `<div class="border rounded-xl p-2.5 space-y-1 ${sty} ${exp ? "opacity-50" : ""}"><div class="flex justify-between gap-2"><span class="mono text-[12px]"><b class="text-white">${esc(n.icao)}</b> ${esc(n.id)}${n.series === "LOCAL" ? ` <span class="pill pill-info">เพิ่มเอง</span>` : ""}</span><span class="flex gap-1">${exp ? `<span class="pill pill-info">หมดอายุ</span>` : ""}<span class="pill ${n.severity === "critical" ? "pill-stop" : n.severity === "caution" ? "pill-warn" : "pill-info"}">${esc(n.category)}</span></span></div>
      <div class="text-[13px] font-semibold">${esc(n.title)}</div><p class="text-[12px] text-slate-300 leading-relaxed">${esc(n.body)}</p>
      <div class="flex justify-between items-center"><span class="mono text-[11px] text-slate-400">VALID ${esc(n.valid)}</span><span class="flex gap-1"><button data-nfly="${esc(n.id)}" class="btn btn-sm">แผนที่</button>${n.series === "LOCAL" ? `<button data-ndel="${esc(n.id)}" class="btn btn-sm btn-red">ลบ</button>` : ""}</span></div></div>`; }).join("")
    : `<div class="text-center text-[13px] text-slate-500 py-6">ไม่พบ NOTAM ตามตัวกรอง</div>`;
  renderNotamLayer();
}
$("notams-list").addEventListener("click", e => {
  const f = e.target.closest("[data-nfly]"), d = e.target.closest("[data-ndel]");
  if (f) { const n = state.notams.find(x => x.id === f.dataset.nfly), g = n && notamGeom(n); if (g) map.flyTo(g.center, 10); }
  if (d) { state.customNotams = state.customNotams.filter(x => x.id !== d.dataset.ndel); LS.set(K.notams, state.customNotams); rebuildNotams(); renderNotams(); renderMapMarkers(); renderBrief(); }
});
["notam-icao-filter", "notam-cat-filter"].forEach(id => $(id).addEventListener("change", renderNotams));
$("btn-open-notam-form").onclick = () => $("notam-form").classList.toggle("hidden");
$("btn-cancel-notam").onclick = () => $("notam-form").classList.add("hidden");
$("notam-form").addEventListener("submit", e => {
  e.preventDefault();
  const n = { id: $("nn-id").value.trim() || `LOCAL-${Date.now() % 100000}`, series: "LOCAL", icao: $("nn-icao").value, category: $("nn-cat").value, severity: $("nn-sev").value, title: $("nn-title").value.trim(), body: $("nn-body").value.trim().toUpperCase(), valid: $("nn-valid").value.trim() || "PRE-FLIGHT NOTE" };
  if (!n.title || !n.body) return;
  state.customNotams.unshift(n); LS.set(K.notams, state.customNotams); rebuildNotams();
  e.target.reset(); e.target.classList.add("hidden"); renderNotams(); renderMapMarkers(); renderBrief();
  toast(notamGeom(n) && parseNotamCoords(n.body).length ? "เพิ่ม NOTAM และวาดบนแผนที่แล้ว" : "เพิ่ม NOTAM แล้ว (ไม่พบพิกัด — ใช้ตำแหน่งสนามบิน)");
});

// =========================================================================
// 8. WEATHER (MODEL), WINDS ALOFT & RADAR
// =========================================================================
function renderWxCards() {
  const box = $("weather-cards"), routeIcaos = new Set(state.route.map(w => w.id));
  const order = [...AIRPORTS].sort((a, b) => (routeIcaos.has(b.icao) - routeIcaos.has(a.icao)) || (!!state.metar[b.icao] - !!state.metar[a.icao]));
  box.innerHTML = order.filter(a => state.metar[a.icao] || state.weather[a.icao]).map(a => wxLine(a, routeIcaos.has(a.icao) ? "ROUTE" : "")).join("") || `<div class="text-[12px] text-slate-400">กำลังโหลดสภาพอากาศ...</div>`;
}
async function loadWeather() {
  try {
    for (let i = 0; i < AIRPORTS.length; i += 25) {
      const ch = AIRPORTS.slice(i, i + 25);
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${ch.map(a => a.lat).join(",")}&longitude=${ch.map(a => a.lon).join(",")}&current=temperature_2m,dew_point_2m,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,visibility,pressure_msl&wind_speed_unit=kn`;
      const res = await fetch(url); if (!res.ok) continue; const d = await res.json();
      (Array.isArray(d) ? d : [d]).forEach((it, k) => { const c = it.current || {}, t = c.temperature_2m ?? 0, dw = c.dew_point_2m ?? t;
        state.weather[ch[k].icao] = { wdir: Math.round(c.wind_direction_10m || 0), wspd: Math.round(c.wind_speed_10m || 0), gust: Math.round(c.wind_gusts_10m || 0), temp: Math.round(t), dew: Math.round(dw), cloud: Math.round(c.cloud_cover || 0), rain: c.precipitation || 0, vis: c.visibility != null ? c.visibility / 1000 : 10, qnh: Math.round(c.pressure_msl || 1013), base: Math.max(0, Math.round((t - dw) * 400 / 100) * 100) }; });
    }
    setSrc("Open-Meteo", "โมเดลอากาศ", true);
    renderWxCards(); renderAirportsList(); renderBrief();
  } catch (_) { setSrc("Open-Meteo", "ออฟไลน์", false); renderWxCards(); }
}
function windLevelFor(alt) { return alt < 1200 ? "10m" : alt < 3800 ? "925hPa" : alt < 7500 ? "850hPa" : "700hPa"; }
async function fetchWindsAloft() {
  const r = state.route; if (r.length < 1) { toast("เพิ่มเส้นทางก่อน"); return; }
  const mid = r[Math.floor((r.length - 1) / 2)], nxt = r[Math.ceil((r.length - 1) / 2)], la = (mid.lat + nxt.lat) / 2, lo = (mid.lon + nxt.lon) / 2;
  const alt = num(S.alt) || 1000, lv = windLevelFor(alt);
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${la.toFixed(3)}&longitude=${lo.toFixed(3)}&hourly=wind_speed_${lv},wind_direction_${lv}&wind_speed_unit=kn&forecast_days=3&timezone=GMT`;
    const d = await (await fetch(url)).json(); const etd = getEtd(); const key = etd.toISOString().slice(0, 13) + ":00";
    let i = d.hourly.time.indexOf(key); if (i < 0) i = 0;
    S.wdir = Math.round(d.hourly[`wind_direction_${lv}`][i]); S.wspd = Math.round(d.hourly[`wind_speed_${lv}`][i]); saveS();
    $("s-wdir").value = S.wdir; $("s-wspd").value = S.wspd;
    $("wind-src").textContent = `ลมพยากรณ์ ${lv === "10m" ? "ผิวพื้น 10 m" : lv} (~${{ "10m": "30", "925hPa": "2,500", "850hPa": "4,800", "700hPa": "10,000" }[lv]} ft) ณ ${d.hourly.time[i].slice(11)}Z กึ่งกลางเส้นทาง: ${pad3(S.wdir)}°/${S.wspd} kt (Open-Meteo)`;
    renderRoute(); toast("อัปเดตลมระดับบินแล้ว");
  } catch (_) { toast("ดึงลมพยากรณ์ไม่ได้"); }
}
$("btn-fetch-wind").onclick = fetchWindsAloft;

async function loadRadar() {
  try {
    const d = await (await fetch("https://api.rainviewer.com/public/weather-maps.json")).json();
    state.radar.host = d.host; state.radar.frames = d.radar.past || []; state.radar.index = state.radar.frames.length - 1;
    $("radar-slider").max = state.radar.frames.length - 1; applyRadar(state.radar.index);
    $("radar-dot").className = "w-2 h-2 rounded-full bg-emerald-400"; $("radar-detail-status").textContent = `${state.radar.frames.length} เฟรม (ทุก 10 นาที) • รีเฟรชทุก 5 นาที`;
    setSrc("RainViewer", `${state.radar.frames.length} เฟรม`, true);
  } catch (e) { $("radar-dot").className = "w-2 h-2 rounded-full bg-rose-500"; $("radar-time").textContent = "ออฟไลน์"; $("radar-detail-status").textContent = "โหลดเรดาร์ไม่ได้"; setSrc("RainViewer", "ออฟไลน์", false); }
}
function applyRadar(i) {
  const f = state.radar.frames[i]; $("radar-bar").classList.toggle("hidden", !$("tg-radar").checked); if (!f) { if (radarLayer) { map.removeLayer(radarLayer); radarLayer = null; } return; } state.radar.index = i; $("radar-slider").value = i;
  $("radar-time").textContent = ict(new Date(f.time * 1000)) + " ICT";
  if (radarLayer) { map.removeLayer(radarLayer); radarLayer = null; }
  if ($("tg-radar").checked) radarLayer = L.tileLayer(`${state.radar.host}${f.path}/256/{z}/{x}/{y}/2/1_1.png`, { opacity: state.radar.opacity, maxNativeZoom: 7, maxZoom: 18, zIndex: 10, attribution: "RainViewer" }).addTo(map);
}
$("btn-radar-play").onclick = () => {
  const r = state.radar;
  if (r.playing) { clearInterval(r.timer); r.playing = false; $("radar-play-icon").setAttribute("data-lucide", "play"); }
  else if (r.frames.length) { r.playing = true; $("radar-play-icon").setAttribute("data-lucide", "pause"); r.timer = setInterval(() => applyRadar((r.index + 1) % r.frames.length), 800); }
  lucide.createIcons();
};
$("radar-slider").oninput = e => applyRadar(+e.target.value);
$("radar-opacity").oninput = e => { state.radar.opacity = e.target.value / 100; if (radarLayer) radarLayer.setOpacity(state.radar.opacity); };
$("btn-refresh-weather").onclick = () => { loadRadar(); loadWeather(); loadMetar(); };

// =========================================================================
// 9. SAVED WAYPOINTS & ROUTES
// =========================================================================
function upsertCwp(name, lat, lon) { const ex = state.cwps.find(c => c.id.toLowerCase() === name.toLowerCase()); if (ex) { ex.lat = lat; ex.lon = lon; } else state.cwps.push({ id: name, name, lat, lon, elev: 0 }); LS.set(K.wps, state.cwps); renderCwps(); }
function renderCwps() {
  L_cwp.clearLayers();
  state.cwps.forEach((c, i) => L.marker([c.lat, c.lon], { zIndexOffset: 300, icon: L.divIcon({ className: "", html: `<div style="display:inline-flex;padding:1px 6px;border-radius:6px;background:#083344;border:1.5px solid #22d3ee;color:#cffafe;font:700 10px 'IBM Plex Mono',monospace;white-space:nowrap">◆ ${esc(c.id)}</div>`, iconSize: [80, 18], iconAnchor: [10, 9] }) })
    .bindPopup(`<div class="text-xs space-y-1.5"><b class="text-cyan-300">◆ ${esc(c.id)}</b><div class="mono text-[11px]">${fmtLL(c.lat, c.lon)}</div><div class="flex gap-1"><button onclick="addKey('CW:${i}')" class="btn btn-sm btn-go flex-1">+ เส้นทาง</button><button onclick="delCwp(${i})" class="btn btn-sm btn-red">ลบ</button></div></div>`).addTo(L_cwp));
  $("saved-wp-count").textContent = state.cwps.length;
  $("saved-wp-list").innerHTML = state.cwps.length ? state.cwps.map((c, i) => `<div class="flex items-center gap-2 bg-[#070b14] border border-[#1c2638] rounded-xl px-2 py-1.5"><div class="min-w-0 flex-1"><div class="text-[13px] text-cyan-300 font-semibold truncate">◆ ${esc(c.id)}</div><div class="mono text-[11px] text-slate-400 truncate">${fmtLL(c.lat, c.lon)}</div></div><button data-cwa="${i}" class="btn btn-sm btn-go">+</button><button data-cwf="${i}" class="btn btn-sm">ดู</button><button data-cwd="${i}" class="btn btn-sm btn-red">ลบ</button></div>`).join("")
    : `<div class="text-[12px] text-slate-400 text-center py-2">ยังไม่มี — แตะแผนที่แล้วกด "บันทึก WP" หรือ "+ สร้าง"</div>`;
  populateSelectors();
}
window.delCwp = i => { state.cwps.splice(i, 1); LS.set(K.wps, state.cwps); map.closePopup(); renderCwps(); };
$("saved-wp-list").addEventListener("click", e => { const a = e.target.closest("[data-cwa]"), f = e.target.closest("[data-cwf]"), d = e.target.closest("[data-cwd]"); if (a) window.addKey("CW:" + a.dataset.cwa); if (f) { const c = state.cwps[+f.dataset.cwf]; map.flyTo([c.lat, c.lon], 12); } if (d) window.delCwp(+d.dataset.cwd); });
$("btn-toggle-cwp-form").onclick = () => $("cwp-form").classList.toggle("hidden");
$("btn-cwp-cancel").onclick = () => $("cwp-form").classList.add("hidden");
function cwpFromForm(addRoute) { const n = $("cwp-name").value.trim(), c = parseUserCoords($("cwp-coords").value); if (!n) return toast("ใส่ชื่อ Waypoint"); if (!c) return toast("รูปแบบพิกัดไม่ถูกต้อง"); upsertCwp(n, c.lat, c.lon); if (addRoute) window.addLL(c.lat, c.lon, n); map.flyTo([c.lat, c.lon], Math.max(map.getZoom(), 10)); $("cwp-form").reset(); $("cwp-form").classList.add("hidden"); }
$("btn-cwp-pin").onclick = () => cwpFromForm(false);
$("cwp-form").addEventListener("submit", e => { e.preventDefault(); cwpFromForm(true); });
window.saveMapWp = (lat, lon, inputId) => { const n = ($(inputId)?.value || "").trim() || `WP-${lat.toFixed(2)}-${lon.toFixed(2)}`; upsertCwp(n, lat, lon); map.closePopup(); toast(`บันทึก ${n} แล้ว`); };

function renderSavedRoutes() {
  $("saved-routes-count").textContent = state.savedRoutes.length;
  $("saved-routes-list").innerHTML = state.savedRoutes.length ? state.savedRoutes.map(s => `<div class="flex items-center gap-2 bg-[#070b14] border border-[#1c2638] rounded-xl px-2 py-1.5"><div class="min-w-0 flex-1"><div class="text-[13px] text-emerald-300 font-semibold truncate">${esc(s.name)}</div><div class="mono text-[11px] text-slate-400 truncate">${esc((s.route || []).map(w => w.id).join(" › "))}</div></div><button data-srl="${s.id}" class="btn btn-sm btn-go">ใช้</button><button data-sre="${s.id}" class="btn btn-sm">แก้</button><button data-srd="${s.id}" class="btn btn-sm btn-red">ลบ</button></div>`).join("")
    : `<div class="text-[12px] text-slate-400 text-center py-2">ยังไม่มีเส้นทางที่บันทึก</div>`;
}
$("saved-routes-list").addEventListener("click", e => {
  const l = e.target.closest("[data-srl]"), ed = e.target.closest("[data-sre]"), d = e.target.closest("[data-srd]");
  const find = id => state.savedRoutes.find(s => s.id === id);
  if (l) { const s = find(l.dataset.srl); state.route = s.route.map(w => ({ ...w })); afterRouteChange(); fitRoute(); toast(`โหลด "${s.name}"`); }
  if (ed) { const s = find(ed.dataset.sre); $("edit-route-id").value = s.id; $("save-route-name").value = s.name; $("save-route-form").classList.remove("hidden"); toast("แก้ชื่อหรือปรับเส้นทางแล้วกดบันทึกเพื่ออัปเดต"); }
  if (d) { state.savedRoutes = state.savedRoutes.filter(s => s.id !== d.dataset.srd); LS.set(K.routes, state.savedRoutes); renderSavedRoutes(); }
});
$("btn-open-save-route").onclick = () => { if (state.route.length < 2) return toast("ต้องมีอย่างน้อย 2 จุด"); $("edit-route-id").value = ""; $("save-route-name").value = state.route.map(w => w.id).join(" - "); $("save-route-form").classList.remove("hidden"); };
$("btn-cancel-save-route").onclick = () => $("save-route-form").classList.add("hidden");
$("save-route-form").addEventListener("submit", e => {
  e.preventDefault(); const name = $("save-route-name").value.trim(), id = $("edit-route-id").value; if (!name) return;
  if (id) { const s = state.savedRoutes.find(x => x.id === id); if (s) { s.name = name; if (state.route.length >= 2) s.route = state.route.map(w => ({ ...w })); s.updatedAt = Date.now(); } }
  else state.savedRoutes.unshift({ id: `SR-${Date.now()}`, name, route: state.route.map(w => ({ ...w })), updatedAt: Date.now() });
  LS.set(K.routes, state.savedRoutes); renderSavedRoutes(); $("save-route-form").classList.add("hidden"); toast(`บันทึก "${name}" แล้ว`);
});
$("btn-clear-route").onclick = () => { if (!state.route.length) return; state._undo = state.route.slice(); state.route = []; afterRouteChange(); toast("ล้างเส้นทางแล้ว"); };
$("btn-invert-route").onclick = () => { if (state.route.length < 2) return; state.route.reverse(); afterRouteChange(); toast("กลับทิศเส้นทางแล้ว"); };
function mapPad() {
  const top = 76, sheet = isLg() ? 0 : parseInt(getComputedStyle(document.documentElement).getPropertyValue("--sheet-h")) || 0;
  const right = isLg() && !document.body.classList.contains("panel-collapsed") ? 470 : 24;
  return { paddingTopLeft: [64, top], paddingBottomRight: [right, sheet + 24] };
}
function fitRoute() { if (state.route.length >= 2) map.fitBounds(L.latLngBounds(state.route.map(w => [w.lat, w.lon])), mapPad()); else if (state.route[0]) map.flyTo([state.route[0].lat, state.route[0].lon], 10); }
$("btn-fit-route").onclick = () => {
  if (state.route.length) { fitRoute(); toast(state.route.length >= 2 ? `ซูมพอดีเส้นทาง ${state.route[0].id} → ${state.route[state.route.length - 1].id}` : `ไปที่ ${state.route[0].id}`); }
  else { map.fitBounds([[5.6, 97.3], [20.5, 105.7]], mapPad()); toast("ยังไม่มีเส้นทาง — แสดงภาพรวมประเทศไทย"); }
};

// =========================================================================
// 10. SETTINGS BINDING
// =========================================================================
const BIND = { "s-tas": "tas", "s-burn": "burn", "s-alt": "alt", "s-var": "varW", "s-wdir": "wdir", "s-wspd": "wspd", "s-fob": "fob", "s-cap": "cap", "s-taxi": "taxi", "s-cont": "cont", "s-res": "res", "s-extra": "extra", "s-bew": "bew", "s-mtow": "mtow", "s-crew": "crew", "s-pax": "pax", "s-cargo": "cargo", "s-vismin": "vismin", "s-ceilmin": "ceilmin" };
function fillInputs() { for (const [id, k] of Object.entries(BIND)) $(id).value = S[k] ? S[k] : (["varW", "taxi", "cont", "res", "crew", "vismin", "ceilmin"].includes(k) ? S[k] : ""); $("s-etd").value = S.etd || ""; $("coord-format-select").value = S.coord; renderBmGallery(); }
for (const [id, k] of Object.entries(BIND)) $(id).addEventListener("input", e => {
  S[k] = num(e.target.value); if (["tas", "burn", "bew", "mtow", "cap"].includes(k)) { S.preset = "custom"; $("s-preset").value = "custom"; }
  saveS(); renderRoute(); if (k === "alt") scheduleTerrainOverlay(); if (k === "vismin" || k === "ceilmin") { renderAirportsList(); renderWxCards(); renderMetarLayer(); }
});
$("s-etd").addEventListener("change", e => { S.etd = e.target.value; saveS(); renderRoute(); if (map.hasLayer(L_wind)) scheduleWind(); });
$("s-altn").addEventListener("change", e => { S.altn = e.target.value; saveS(); renderRoute(); });
$("s-preset").addEventListener("change", e => { const p = HELI_PRESETS[e.target.value]; S.preset = e.target.value; if (p && p.tas) { Object.assign(S, { tas: p.tas, burn: p.burn, fob: p.fob, cap: p.cap, bew: p.bew, mtow: p.mtow }); fillInputs(); } saveS(); renderRoute(); toast(p.tas ? `ตั้งค่า ${p.name} (ค่าประมาณ — ตรวจกับ RFM)` : "กำหนดเอง"); });
$("btn-pax-calc").onclick = () => { S.pax = num($("pax-n").value) * 190; $("s-pax").value = S.pax; saveS(); renderRoute(); };

// =========================================================================
// 11. MAP INTERACTION, GPS
// =========================================================================
$("bm-gallery").addEventListener("click", e => { const b = e.target.closest("[data-bm]"); if (b) setBasemap(b.dataset.bm); });
$("coord-format-select").onchange = e => { S.coord = e.target.value; saveS(); renderRoute(); renderCwps(); renderAirportsList(); renderMapMarkers(); map.closePopup(); };
const LAYER_TOGGLES = ["tg-airports", "tg-navaids", "tg-vfr", "tg-cwp", "tg-notams", "tg-rings", "tg-terrain", "tg-radar", "tg-metar", "tg-wind", "tg-sat", "tg-osm-heli", "tg-osm-power", "tg-osm-obst", "tg-openaip"];
function saveLayers() { const o = {}; LAYER_TOGGLES.forEach(id => o[id] = $(id).checked); o.windLevel = $("wind-level").value; o.satLayer = $("sat-layer").value; o.satDay = $("sat-day").value; LS.set(K.layers, o); }
const tg = (id, layer, extra) => $(id).addEventListener("change", e => { e.target.checked ? layer.addTo(map) : map.removeLayer(layer); extra && extra(e.target.checked); saveLayers(); });
tg("tg-airports", L_ap); tg("tg-navaids", L_nav); tg("tg-vfr", L_vfr); tg("tg-cwp", L_cwp); tg("tg-notams", L_notam); tg("tg-rings", L_ring);
tg("tg-terrain", L_terr, scheduleTerrainOverlay);
tg("tg-metar", L_metar, on => on && !Object.keys(state.metar).length && loadMetar());
tg("tg-wind", L_wind, on => on ? scheduleWind(0) : setSrc("ลม", null));
tg("tg-osm-heli", L_osmHeli, () => scheduleOsm(0)); tg("tg-osm-power", L_osmPower, () => scheduleOsm(0)); tg("tg-osm-obst", L_osmObst, () => scheduleOsm(0));
$("tg-radar").addEventListener("change", () => { applyRadar(state.radar.index); saveLayers(); });
$("tg-sat").addEventListener("change", () => { applySat(); saveLayers(); });
["sat-layer", "sat-day"].forEach(id => $(id).addEventListener("change", () => { if (!$("tg-sat").checked) $("tg-sat").checked = true; applySat(); saveLayers(); }));
$("wind-level").addEventListener("change", () => { if (!$("tg-wind").checked) { $("tg-wind").checked = true; L_wind.addTo(map); } scheduleWind(0); saveLayers(); });
$("tg-openaip").addEventListener("change", () => { applyOaip(); saveLayers(); });
$("oaip-key").addEventListener("change", e => { try { localStorage.setItem(K.oaip, e.target.value.trim()); } catch (_) {} if ($("tg-openaip").checked) applyOaip(); });

function setAddMode(on) {
  state.addWpMode = on; $("add-wp-label").textContent = `แตะแผนที่เพิ่มจุด: ${on ? "เปิด" : "ปิด"}`;
  $("btn-add-wp-mode").classList.toggle("on", on); $("addmode-banner").classList.toggle("hidden", !on);
  map.getContainer().style.cursor = on ? "crosshair" : "";
  if (on && !isLg() && sheetState !== "peek") setSheet("peek");
}
$("btn-add-wp-mode").onclick = () => setAddMode(!state.addWpMode);
$("addmode-off").onclick = () => setAddMode(false);
$("btn-zoom-in").onclick = () => map.zoomIn(); $("btn-zoom-out").onclick = () => map.zoomOut();
$("btn-layers").onclick = () => { const p = $("layer-panel"); p.classList.toggle("hidden"); $("btn-layers").classList.toggle("on", !p.classList.contains("hidden")); };
$("btn-layers-close").onclick = () => { $("layer-panel").classList.add("hidden"); $("btn-layers").classList.remove("on"); };
const geUrl = (la, lo) => `https://earth.google.com/web/@${la.toFixed(6)},${lo.toFixed(6)},1200a,6000d,35y,0h,0t,0r`;
map.on("moveend", () => { const c = map.getCenter(); $("btn-google-earth").href = geUrl(c.lat, c.lng); scheduleOsm(); if (map.hasLayer(L_wind)) scheduleWind(); });

async function elevAt(lat, lon) { const d = await (await fetch(`https://api.open-meteo.com/v1/elevation?latitude=${lat.toFixed(4)}&longitude=${lon.toFixed(4)}`)).json(); return d.elevation[0]; }
map.on("click", async e => {
  const { lat, lng } = e.latlng;
  if (state.addWpMode) { window.addLL(lat, lng); return; }
  if (!$("layer-panel").classList.contains("hidden") && !isLg()) { $("btn-layers-close").click(); return; }
  const ts = Date.now(), pid = `ep${ts}`, nid = `en${ts}`, def = `WP-${lat.toFixed(2)}-${lng.toFixed(2)}`;
  L.popup().setLatLng(e.latlng).setContent(`<div class="text-xs space-y-1.5 min-w-[230px]"><div class="mono text-[12px] text-cyan-300">${fmtLL(lat, lng)}</div><div id="${pid}" class="mono font-bold text-amber-300">ELEV …</div><div class="mono text-[11px] text-sky-300">${vorFixStr(lat, lng)}</div>
    <input id="${nid}" value="${def}" class="inp !text-[13px] !py-1"/><div class="flex gap-1"><button onclick="saveMapWp(${lat},${lng},'${nid}')" class="btn btn-sm flex-1">บันทึก WP</button><button onclick="addLL(${lat},${lng},document.getElementById('${nid}').value)" class="btn btn-sm btn-go flex-1">+ เส้นทาง</button></div>
    <a href="${geUrl(lat, lng)}" target="_blank" rel="noopener" class="btn btn-sm w-full text-cyan-200">Google Earth ↗</a></div>`).openOn(map);
  try { const m = await elevAt(lat, lng); const ft = Math.max(0, Math.round(m * 3.28084)); const el = $(pid); if (el) el.textContent = `ELEV ${fmt(ft)} ft (${Math.round(m)} m)`; $("hud-elev").textContent = `${fmt(ft)} ft`; } catch (_) { const el = $(pid); if (el) el.textContent = "ELEV —"; }
});
let elevDeb = null;
map.on("mousemove", e => {
  const { lat, lng } = e.latlng; state.lastCursor = { lat, lon: lng };
  $("hud-coords").textContent = fmtLL(lat, lng); $("hud-vor").textContent = vorFixStr(lat, lng);
  clearTimeout(elevDeb); elevDeb = setTimeout(async () => { try { const m = await elevAt(lat, lng); $("hud-elev").textContent = `${fmt(Math.max(0, m * 3.28084))} ft`; } catch (_) {} }, 600);
});

let lastFix = null, wakeLock = null;
function onGps(pos) {
  const c = pos.coords, now = Date.now(); let gs = c.speed != null && c.speed >= 0 ? c.speed * 1.94384 : null, trk = c.heading != null && !isNaN(c.heading) ? c.heading : null;
  if (lastFix && (gs == null || trk == null)) { const d = distNM(lastFix.lat, lastFix.lon, c.latitude, c.longitude), dt = (now - lastFix.t) / 3600e3; if (dt > 0 && d > .003) { if (gs == null) gs = d / dt; if (trk == null) trk = brgT(lastFix.lat, lastFix.lon, c.latitude, c.longitude); } }
  state.gps = { lat: c.latitude, lon: c.longitude, alt: c.altitude != null ? c.altitude * 3.28084 : null, gs: gs ?? 0, trk: trk ?? (state.gps?.trk ?? 0), acc: c.accuracy, t: now };
  lastFix = { lat: c.latitude, lon: c.longitude, t: now };
  drawGps(); $("gps-btn-label").textContent = "GPS ON"; $("btn-my-gps").classList.add("on"); if (state.fly.on) updateFly();
}
function drawGps() {
  const g = state.gps; if (!g) return; L_gps.clearLayers(); const moving = g.gs > 5;
  if (g.acc && g.acc < 5000) L.circle([g.lat, g.lon], { radius: g.acc, color: "#38bdf8", weight: 1, fillOpacity: .08 }).addTo(L_gps);
  const html = moving ? `<svg viewBox="0 0 32 32" width="30" height="30" style="transform:rotate(${Math.round(g.trk)}deg);filter:drop-shadow(0 0 4px rgba(56,189,248,.9))"><line x1="4" y1="6" x2="28" y2="20" stroke="#e2e8f0" stroke-width="1.8"/><line x1="28" y1="6" x2="4" y2="20" stroke="#e2e8f0" stroke-width="1.8"/><path d="M16 4C19 4 20.5 8 20.5 13C20.5 16.5 18.5 18.5 17 19.5L17 27L20 28.5L20 30L12 30L12 28.5L15 27L15 19.5C13.5 18.5 11.5 16.5 11.5 13C11.5 8 13 4 16 4Z" fill="#22c55e" stroke="#fff" stroke-width="1.3"/><ellipse cx="16" cy="9.5" rx="2.6" ry="3.2" fill="#38bdf8"/></svg>`
    : `<span style="display:block;width:14px;height:14px;border-radius:999px;background:#0ea5e9;border:2px solid #fff;box-shadow:0 0 8px #0ea5e9"></span>`;
  L.marker([g.lat, g.lon], { zIndexOffset: 900, icon: L.divIcon({ className: "", html, iconSize: moving ? [30, 30] : [14, 14], iconAnchor: moving ? [15, 15] : [7, 7] }) })
    .bindPopup(`<div class="text-xs space-y-1"><b>ตำแหน่ง GPS</b><div class="mono text-cyan-300">${fmtLL(g.lat, g.lon)}</div><div class="mono">GS ${Math.round(g.gs)} kt • TRK ${pad3(toMag(g.trk))}°M${g.alt != null ? ` • ${fmt(g.alt)} ft` : ""}</div><button onclick="addLL(${g.lat},${g.lon},'MY-POS')" class="btn btn-sm w-full">+ ใช้เป็นจุดในเส้นทาง</button></div>`).addTo(L_gps);
}
let gpsWatch = null;
function startGps(fly) {
  if (!navigator.geolocation) { $("gps-btn-label").textContent = "ไม่มี GPS"; return; }
  if (gpsWatch == null) gpsWatch = navigator.geolocation.watchPosition(p => { const first = !state.gps; onGps(p); if (first && fly) map.flyTo([p.coords.latitude, p.coords.longitude], 11); }, () => { $("gps-btn-label").textContent = "GPS ปิด"; if (fly) toast("เข้าถึงตำแหน่ง GPS ไม่ได้"); }, { enableHighAccuracy: true, maximumAge: 2000, timeout: 15000 });
}
$("btn-my-gps").onclick = () => state.gps ? map.flyTo([state.gps.lat, state.gps.lon], 12) : startGps(true);

// =========================================================================
// 12. FLY MODE
// =========================================================================
function saveFly() { LS.set(K.fly, { target: state.fly.target, takeoff: state.fly.takeoff, landed: state.fly.landed }); }
function fillFlyWp() { $("fly-wp").innerHTML = state.route.map((w, i) => i ? `<option value="${i}">→ ${i + 1}. ${esc(w.id)}</option>` : "").join(""); state.fly.target = Math.min(Math.max(1, state.fly.target), Math.max(1, state.route.length - 1)); $("fly-wp").value = state.fly.target; }
async function setWake(on) { try { if (on && "wakeLock" in navigator) wakeLock = await navigator.wakeLock.request("screen"); else if (wakeLock) { await wakeLock.release(); wakeLock = null; } } catch (_) {} }
function openFly() {
  if (state.route.length < 2) return toast("วางแผนเส้นทางอย่างน้อย 2 จุดก่อนเข้าโหมดบิน");
  state.fly.on = true; state.fly.min = false; fillFlyWp(); $("fly-overlay").classList.remove("hidden"); $("fly-strip").classList.add("hidden");
  startGps(false); setWake(true); renderRoute(); updateFly();
}
function closeFly() { state.fly.on = false; $("fly-overlay").classList.add("hidden"); $("fly-strip").classList.add("hidden"); document.body.classList.remove("night-dim"); setWake(false); renderRoute(); }
$("btn-fly").onclick = openFly; $("fly-exit").onclick = closeFly;
$("fly-min").onclick = () => { state.fly.min = true; $("fly-overlay").classList.add("hidden"); $("fly-strip").classList.remove("hidden"); if (!isLg()) setSheet("peek"); setTimeout(() => { map.invalidateSize(); if (state.gps) map.setView([state.gps.lat, state.gps.lon], Math.max(map.getZoom(), 11)); }, 50); };
$("fs-expand").onclick = () => { state.fly.min = false; $("fly-overlay").classList.remove("hidden"); $("fly-strip").classList.add("hidden"); };
$("fly-night").onclick = () => document.body.classList.toggle("night-dim");
$("fly-wp").onchange = e => { state.fly.target = +e.target.value; saveFly(); renderRoute(); };
$("fly-prev").onclick = () => { if (state.fly.target > 1) { state.fly.target--; saveFly(); fillFlyWp(); renderRoute(); } };
$("fly-next").onclick = () => { if (state.fly.target < state.route.length - 1) { state.fly.target++; saveFly(); fillFlyWp(); renderRoute(); } };
$("fly-takeoff").onclick = () => {
  if (!state.fly.takeoff || state.fly.landed) { state.fly.takeoff = Date.now(); state.fly.landed = null; state.fly.target = 1; fillFlyWp(); toast(`Takeoff ${utc(new Date())}`); }
  else { state.fly.landed = Date.now(); toast(`Landing ${utc(new Date())} • เวลาบิน ${hhmm((state.fly.landed - state.fly.takeoff) / 3600e3)}`); }
  saveFly(); updateFly();
};
function updateFly() {
  const r = state.route, f = state.fly, g = state.gps, tgt = r[f.target], prev = r[f.target - 1], leg = state.legs[f.target - 1], dest = r[r.length - 1];
  const set = (id, v) => { const el = $(id); if (el) el.textContent = v; };
  const tko = f.takeoff, end = f.landed || Date.now(), elapsedH = tko ? (end - tko) / 3600e3 : 0;
  set("fly-timer", tko ? new Date(end - tko).toISOString().slice(11, 19) : "00:00:00");
  $("fly-takeoff").textContent = !tko || f.landed ? "Takeoff" : "Landing"; $("fly-takeoff").className = `btn ${!tko || f.landed ? "btn-go" : "btn-amber"}`;
  const fuelRem = tko ? num(S.fob) - num(S.taxi) - num(S.burn) * elapsedH : num(S.fob);
  set("t-fuel", num(S.fob) ? fmt(fuelRem) : "--"); set("t-fuel-s", num(S.burn) > 0 ? `lbs • endurance ${hhmm(Math.max(0, fuelRem) / num(S.burn))}` : "lbs");
  $("t-fuel").style.color = num(S.burn) > 0 && fuelRem / num(S.burn) * 60 < num(S.res) + 10 ? "#ef4444" : "";
  set("t-wpname", tgt ? tgt.id : ""); set("t-destname", dest ? dest.id : "");
  set("t-mh", leg ? pad3(leg.mh) + "°" : "--"); set("t-mh-s", leg ? `TC ${pad3(leg.tc)} • WCA ${leg.wca >= 0 ? "+" : ""}${leg.wca.toFixed(0)}°` : "--");
  set("t-msa", leg && leg.msa ? fmt(leg.msa) : "--");
  const dap = dest && AIRPORTS.find(a => a.icao === dest.id);
  $("t-freq").innerHTML = dap ? Object.entries(dap.atc).map(([k, v]) => `<span class="mr-3"><span class="text-slate-400">${k}</span> ${esc(v)}</span>`).join("") + dap.ils.map(l => `<span class="mr-3 text-fuchsia-300"><span class="text-slate-400">ILS ${esc(l.rwy)}</span> ${esc(l.freq || "AIP")}</span>`).join("") : "—";
  if (!g) { $("fly-gps").className = "pill pill-warn"; $("fly-gps").textContent = "รอ GPS"; ["t-dist", "t-brg", "t-ete", "t-gs", "t-xte", "t-alt", "t-ddist"].forEach(id => set(id, "--")); return; }
  const age = (Date.now() - g.t) / 1000; $("fly-gps").className = `pill ${age < 10 && g.acc < 100 ? "pill-go" : "pill-warn"}`; $("fly-gps").textContent = `GPS ±${Math.round(g.acc)}m${age > 10 ? " (เก่า)" : ""}`;
  set("t-gs", Math.round(g.gs)); set("t-alt", g.alt != null ? fmt(g.alt) : "--");
  if (!tgt) return;
  const d = distNM(g.lat, g.lon, tgt.lat, tgt.lon), b = toMag(brgT(g.lat, g.lon, tgt.lat, tgt.lon));
  set("t-dist", d < 10 ? d.toFixed(1) : Math.round(d)); set("t-brg", pad3(b) + "°"); set("t-brg-s", `TRK ${pad3(toMag(g.trk))}°M`);
  const gs = g.gs > 10 ? g.gs : (leg?.gs || num(S.tas));
  set("t-ete", gs > 0 ? hhmm(d / gs) : "--"); set("t-eta", gs > 0 ? `ETA ${ict(new Date(Date.now() + d / gs * 3600e3))} • ${utc(new Date(Date.now() + d / gs * 3600e3))}` : "ETA --");
  if (prev) { const x = xteNM(g, prev, tgt); set("t-xte", Math.abs(x).toFixed(1)); set("t-xte-s", Math.abs(x) < .05 ? "NM on track" : `NM ${x > 0 ? "ขวาของเส้น (R)" : "ซ้ายของเส้น (L)"}`); $("t-xte").style.color = Math.abs(x) > 2 ? "#f5a524" : ""; }
  let rem = d; for (let i = f.target; i < r.length - 1; i++) rem += distNM(r[i].lat, r[i].lon, r[i + 1].lat, r[i + 1].lon);
  set("t-ddist", rem.toFixed(rem < 10 ? 1 : 0)); set("t-deta", gs > 0 ? `NM • ETA ${ict(new Date(Date.now() + rem / gs * 3600e3))}` : "NM");
  set("fs-wp", `→ ${tgt.id}`); set("fs-dist", d.toFixed(1)); set("fs-brg", pad3(b) + "°"); set("fs-ete", gs > 0 ? hhmm(d / gs) : "--"); set("fs-gs", Math.round(g.gs));
  if (d < 0.5 && f.target < r.length - 1 && !f._seq) { f._seq = true; f.target++; saveFly(); fillFlyWp(); toast(`ผ่าน ${tgt.id} → มุ่งหน้า ${r[f.target].id}`); renderRoute(); setTimeout(() => f._seq = false, 4000); }
}
setInterval(() => { if (state.fly.on) updateFly(); }, 1000);

// =========================================================================
// 13. TOOLS
// =========================================================================
function calcDA() { const e = num($("da-elev").value), q = num($("da-qnh").value) || 1013.25, t = num($("da-oat").value); const pa = e + (1013.25 - q) * 30, isa = 15 - 2 * pa / 1000, da = pa + 120 * (t - isa); $("da-pa").textContent = `${fmt(pa)} ft`; $("da-isa").textContent = `${t - isa >= 0 ? "+" : ""}${(t - isa).toFixed(0)}°C`; $("da-out").textContent = `${fmt(da)} ft`; }
["da-elev", "da-qnh", "da-oat"].forEach(id => $(id).addEventListener("input", calcDA));
function calcWC() { const r = num($("wc-rwy").value), d = num($("wc-dir").value), s = num($("wc-spd").value), a = toRad(d - r); const hw = s * Math.cos(a), xw = s * Math.sin(a); $("wc-out").innerHTML = `<span class="${hw >= 0 ? "text-emerald-300" : "text-rose-400"}">${hw >= 0 ? "Headwind" : "Tailwind"} ${Math.abs(hw).toFixed(0)} kt</span> • <span class="text-amber-300">Crosswind ${Math.abs(xw).toFixed(0)} kt จาก${xw >= 0 ? "ขวา" : "ซ้าย"}</span>`; }
["wc-rwy", "wc-dir", "wc-spd"].forEach(id => $(id).addEventListener("input", calcWC));
function calcTSD() { const d = $("tsd-d").value, s = $("tsd-s").value, t = $("tsd-t").value; let o = "--"; if (d && s && !t) o = `เวลา ${hhmm(num(d) / num(s))} (${(num(d) / num(s) * 60).toFixed(1)} นาที)`; else if (d && t && !s) o = `GS ${(num(d) / (num(t) / 60)).toFixed(0)} kt`; else if (s && t && !d) o = `ระยะ ${(num(s) * num(t) / 60).toFixed(1)} NM`; else if (d || s || t) o = "เว้นว่าง 1 ช่องที่ต้องการหา"; $("tsd-out").textContent = o; }
["tsd-d", "tsd-s", "tsd-t"].forEach(id => $(id).addEventListener("input", calcTSD));
const CV = { "cv-lbs": 1, "cv-kg": 1 / 0.45359, "cv-l": 0.8 / 0.45359, "cv-gal": 3.78541 * 0.8 / 0.45359 };
Object.keys(CV).forEach(id => $(id).addEventListener("input", e => { const lbs = num(e.target.value) * CV[id]; Object.keys(CV).forEach(o => { if (o !== id) $(o).value = e.target.value === "" ? "" : (lbs / CV[o]).toFixed(o === "cv-gal" ? 1 : 0); }); }));
const PAD = ["pad-atis", "pad-wind", "pad-qnh", "pad-sq", "pad-notes"];
(() => { const p = LS.get(K.pad, {}); PAD.forEach(id => { $(id).value = p[id] || ""; $(id).addEventListener("input", () => { const o = {}; PAD.forEach(x => o[x] = $(x).value); LS.set(K.pad, o); }); }); })();
$("btn-clear-pad").onclick = () => { PAD.forEach(id => $(id).value = ""); LS.set(K.pad, {}); };

// =========================================================================
// 14. PRINT FLIGHT LOG
// =========================================================================
function printLog() {
  if (state.route.length < 2) return toast("ต้องมีเส้นทางอย่างน้อย 2 จุด");
  const fp = fuelPlan(), w = weightCalc(), T = state.totals, etd = getEtd(), hits = routeNotamHits().filter(h => h.active).slice(0, 10);
  const end = state.route[state.route.length - 1], sun = sunTimes(etd, end.lat, end.lon, 90.833);
  const th = "padding:4px 6px;border-bottom:2px solid #0f172a;text-align:left;font-size:10px", td = "padding:4px 6px;border-bottom:1px solid #cbd5e1;font-family:monospace", h3 = "font-size:12px;font-weight:700;border-bottom:2px solid #0f172a;margin:12px 0 4px;padding-bottom:2px";
  let rem = fp.fob - fp.taxi;
  const legRows = state.legs.map(l => { rem -= l.fuel; return `<tr><td style="${td}">${l.i + 1}</td><td style="${td};font-family:sans-serif;font-weight:700">${esc(l.a.id)} → ${esc(l.b.id)}</td><td style="${td}">${pad3(l.tc)}</td><td style="${td};font-weight:700">${pad3(l.mh)}</td><td style="${td}">${l.dist.toFixed(1)}</td><td style="${td}">${Math.round(l.gs)}</td><td style="${td}">${hhmm(l.h)}</td><td style="${td}">${ict(l.eta)}</td><td style="${td}">${fmt(l.fuel)}</td><td style="${td};color:${rem < fp.reserve ? "#dc2626" : "#047857"}">${fmt(rem)}</td><td style="${td}">${l.msa ? fmt(l.msa) : ""}</td><td style="${td};border-left:1px dashed #94a3b8"></td><td style="${td};border-left:1px dashed #94a3b8"></td></tr>`; }).join("");
  const wpRows = state.route.map((x, i) => { const ap = AIRPORTS.find(a => a.icao === x.id); return `<tr><td style="${td}">${i + 1}</td><td style="${td};font-weight:700">${esc(x.id)}</td><td style="${td}">${fmtLL(x.lat, x.lon)}</td><td style="${td}">${x.elev ? fmt(x.elev) : ""}</td><td style="${td}">${vorFixStr(x.lat, x.lon)}</td><td style="${td};font-size:9px">${ap ? Object.entries(ap.atc).map(([k, v]) => `${k} ${esc(v)}`).join(" • ") : ""}</td></tr>`; }).join("");
  const box = (k, v) => `<div style="border:1px solid #cbd5e1;border-radius:4px;padding:4px 6px"><div style="font-size:8px;color:#64748b">${k}</div><div style="font-size:11px;font-weight:700;font-family:monospace">${v}</div></div>`;
  const wxIcaos = [state.route[0].id, end.id, S.altn].filter((v, i, a) => v && a.indexOf(v) === i && AIRPORTS.some(x => x.icao === v));
  const wxRows = wxIcaos.map(ic => { const mt = state.metar[ic], tf = state.taf[ic]; return `<div style="border:1px solid #cbd5e1;border-radius:4px;padding:3px 6px;margin-bottom:3px;font-family:monospace;font-size:9.5px">${mt ? esc(mt.raw) : `${ic} — no METAR (model only)`}${tf ? `<br/><span style="color:#475569">${esc(tf)}</span>` : ""}</div>`; }).join("");
  const sc = state.scan && state.scan.key === routeKey() ? state.scan : null;
  $("print-flight-log").innerHTML = `<div style="font-family:'IBM Plex Sans Thai',sans-serif;color:#0f172a;font-size:11px">
    <div style="display:flex;justify-content:space-between;align-items:flex-end;border-bottom:3px solid #0f172a;padding-bottom:6px"><div><div style="font-size:18px;font-weight:800">THAI HELI-VFR FLIGHT LOG</div><div style="color:#475569">${esc(HELI_PRESETS[S.preset]?.name || "Custom")} • ${esc(state.route.map(x => x.id).join(" → "))}</div></div><div style="text-align:right;font-family:monospace">ETD ${ict(etd)} ICT / ${utc(etd)}<br/>ETA ${ict(T.eta)} ICT / ${utc(T.eta)}<br/>Printed ${new Date().toISOString().slice(0, 16).replace("T", " ")}Z</div></div>
    <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:4px;margin-top:8px">${box("TAS / ALT", `${num(S.tas)} kt / ${fmt(num(S.alt))} ft`)}${box("WIND (°T)", `${pad3(num(S.wdir))}/${num(S.wspd)} kt`)}${box("VAR", `${num(S.varW)}°${num(S.varW) >= 0 ? "W" : "E"}`)}${box("DIST / ETE", `${T.dist.toFixed(1)} NM / ${hhmm(T.h)}`)}${box("SUNSET DEST", ict(sun.set))}${box("TOW / MTOW", w.mtow ? `${fmt(w.tow)} / ${fmt(w.mtow)}` : "—")}</div>
    <div style="${h3}">NAVIGATION LOG</div><table style="width:100%;border-collapse:collapse"><thead><tr>${["#", "FROM → TO", "TC", "MH", "NM", "GS", "ETE", "ETA", "FUEL", "REM", "MSA", "ATA", "NOTES"].map(x => `<th style="${th}">${x}</th>`).join("")}</tr></thead><tbody>${legRows}</tbody></table>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div><div style="${h3}">FUEL PLAN (lbs)</div><table style="width:100%;border-collapse:collapse">${[["Start/Taxi", fp.taxi], ["Trip", fp.trip], [`Contingency ${num(S.cont)}%`, fp.cont], [`Alternate ${esc(S.altn || "—")}`, fp.altn], [`Final reserve ${num(S.res)} min`, fp.reserve], ["Extra", fp.extra], ["REQUIRED", fp.req], ["FOB", fp.fob], ["MARGIN", fp.margin]].map(([k, v]) => `<tr><td style="${td};font-family:sans-serif">${k}</td><td style="${td};text-align:right;font-weight:${k === "REQUIRED" || k === "MARGIN" ? 800 : 400};color:${k === "MARGIN" && v < 0 ? "#dc2626" : "inherit"}">${fmt(v)}</td></tr>`).join("")}</table></div>
    <div><div style="${h3}">ATIS / CLEARANCE</div><div style="border:1px solid #cbd5e1;min-height:110px;padding:6px;font-family:monospace;white-space:pre-wrap">ATIS ${esc($("pad-atis").value)}  WIND ${esc($("pad-wind").value)}  QNH ${esc($("pad-qnh").value)}  SQ ${esc($("pad-sq").value)}\n${esc($("pad-notes").value)}</div></div></div>
    ${wxRows ? `<div style="${h3}">WEATHER (METAR / TAF — AviationWeather.gov)</div>${wxRows}` : ""}
    <div style="${h3}">WAYPOINTS & FREQUENCIES</div><table style="width:100%;border-collapse:collapse"><thead><tr>${["#", "IDENT", "COORDINATES", "ELEV", "VOR FIX", "ATS FREQ"].map(x => `<th style="${th}">${x}</th>`).join("")}</tr></thead><tbody>${wpRows}</tbody></table>
    ${sc ? `<div style="${h3}">OBSTACLES ON ROUTE (OpenStreetMap)</div><div style="font-size:10px">Power lines crossing: ${sc.power.length} • Masts/towers within 1 km: ${sc.obst.length}${sc.tall.length ? ` • ≥300 ft AGL: ${sc.tall.map(o => `${esc(o.name)} ${fmt(o.hft)} ft (leg ${o.leg + 1})`).join(", ")}` : ""}</div>` : ""}
    ${hits.length ? `<div style="${h3}">NOTAM ON/NEAR ROUTE (active during flight)</div>${hits.map(h => `<div style="border:1px solid #cbd5e1;border-radius:4px;padding:3px 6px;margin-bottom:3px;font-size:10px"><b>${esc(h.n.id)} ${esc(h.n.icao)}</b> ${h.inside ? "[CROSSES ROUTE]" : `[${h.dist.toFixed(1)} NM]`} ${esc(h.n.title)} — ${esc(h.n.valid)}</div>`).join("")}` : ""}
    <div style="margin-top:14px;display:flex;justify-content:space-between;font-size:9px;color:#64748b;border-top:1px solid #cbd5e1;padding-top:6px"><span>THAI HELI-VFR EFB — planning aid only; verify with official AIP/NOTAM/MET and RFM</span><span>PIC ____________________ Sign ____________________</span></div></div>`;
  setTimeout(() => window.print(), 150);
}
$("btn-print").onclick = printLog; $("btn-print2").onclick = printLog;

// =========================================================================
// 15. EXTERNAL LIVE DATA SOURCES
// =========================================================================
const SRC = {};
function setSrc(key, text, ok) { if (text == null) delete SRC[key]; else SRC[key] = { text, ok }; renderSrc(); }
function renderSrc() { const el = $("src-status"); if (!el) return; const e = Object.entries(SRC); el.innerHTML = e.length ? e.map(([k, v]) => `<span class="chip ${v.ok === true ? "chip-go" : v.ok === false ? "chip-stop" : "chip-info"}">${esc(k)} · ${esc(v.text)}</span>`).join("") : `<span class="text-[11px] text-slate-500">—</span>`; }

// ---- 15a. METAR / TAF — AviationWeather.gov (NOAA) ----
let metarBusy = false;
function parseAwc(m) {
  const v = String(m.visib ?? "10"), vsm = parseFloat(v);
  const cl = Array.isArray(m.clouds) ? m.clouds : [];
  let ceil = cl.filter(c => /BKN|OVC|OVX|VV/.test(c.cover || "")).map(c => c.base).filter(x => x != null).sort((a, b) => a - b)[0] ?? null;
  const vvm = String(m.rawOb || "").match(/\bVV(\d{3}|\/\/\/)/); if (vvm) ceil = vvm[1] === "///" ? 0 : Math.min(ceil ?? 1e9, +vvm[1] * 100);
  const vism = String(m.rawOb || "").match(/\s(\d{4})(?:NDV)?\s/);   // ICAO metres group is more precise than AWC's statute-mile conversion
  const t = typeof m.obsTime === "number" ? m.obsTime * 1000 : Date.parse(m.reportTime || m.obsTime || "");
  return { raw: m.rawOb || "", obs: new Date(isFinite(t) ? t : Date.now()), wdir: typeof m.wdir === "number" ? m.wdir : null, wspd: m.wspd || 0, gust: m.wgst || 0, temp: m.temp, dew: m.dewp, qnh: Math.round(m.altim || 1013),
    vis: vism ? (+vism[1] >= 9999 ? 10 : +vism[1] / 1000) : v.includes("+") || !isFinite(vsm) ? 10 : Math.min(10, vsm * 1.609), ceil, vv: !!vvm, fltCat: m.fltCat || "", wx: m.wxString || "" };
}
async function loadMetar() {
  if (metarBusy) return; metarBusy = true;
  const ids = AIRPORTS.map(a => a.icao).join(",");
  try {
    const r = await fetch(`https://aviationweather.gov/api/data/metar?ids=${ids}&format=json&hours=3&_=${Date.now()}`, { cache: "no-store" });
    if (r.headers.get("X-THV-Offline")) throw new Error("offline");
    if (!r.ok) throw new Error(r.status);
    const d = await r.json(), best = {};
    (Array.isArray(d) ? d : []).forEach(m => { const p = parseAwc(m); if (!best[m.icaoId] || p.obs > best[m.icaoId].obs) best[m.icaoId] = p; });
    state.metar = best; state.metarAt = Date.now(); const n = Object.keys(best).length;
    $("metar-status").textContent = `${n} สถานี • อัปเดต ${ict(new Date())} ICT`; setSrc("METAR", `${n} สถานี`, true);
  } catch (e) { $("metar-status").textContent = "เชื่อมต่อไม่ได้ — ใช้ค่าโมเดลแทน"; setSrc("METAR", "เชื่อมต่อไม่ได้", false); }
  try {
    const r = await fetch(`https://aviationweather.gov/api/data/taf?ids=${ids}&format=json&_=${Date.now()}`, { cache: "no-store" });
    if (r.ok) { const d = await r.json(); state.taf = {}; (Array.isArray(d) ? d : []).forEach(t => { if (!state.taf[t.icaoId] && t.rawTAF) state.taf[t.icaoId] = t.rawTAF; }); }
  } catch (_) {}
  metarBusy = false;
  renderMetarLayer(); renderMapMarkers(); renderWxCards(); renderAirportsList(); renderBrief();
}
function renderMetarLayer() {
  L_metar.clearLayers();
  AIRPORTS.forEach(ap => {
    const mt = state.metar[ap.icao]; if (!mt) return;
    const fc = flightCat(ap.icao), col = fc.src !== "METAR" ? "#64748b" : fc.imc ? "#ef4444" : "#22c55e";
    const arrow = mt.wdir != null && mt.wspd > 0 ? `<svg width="16" height="16" viewBox="0 0 16 16" style="transform:rotate(${mt.wdir + 180}deg)"><path d="M8 1 L12 9 L8.8 8 L8.8 15 L7.2 15 L7.2 8 L4 9 Z" fill="#e2e8f0"/></svg>` : "";
    const wind = mt.wspd > 0 ? `${mt.wdir == null ? "VRB" : pad3(mt.wdir)}/${mt.wspd}${mt.gust ? "G" + mt.gust : ""}` : "CALM";
    const html = `<div style="display:inline-flex;align-items:center;gap:3px;white-space:nowrap;transform:translate(22px,-8px)"><span style="width:10px;height:10px;border-radius:99px;background:${col};border:1.5px solid #fff;box-shadow:0 0 6px ${col}"></span>${arrow}<span class="lbl-tag" style="color:#e2e8f0;border:1px solid ${col}88">${wind} ${mt.vis >= 10 ? "10+" : mt.vis.toFixed(1)}km${mt.ceil != null ? " " + Math.round(mt.ceil / 100) * 100 + "ft" : ""}</span></div>`;
    L.marker([ap.lat, ap.lon], { zIndexOffset: 120, icon: L.divIcon({ className: "", html, iconSize: [0, 0], iconAnchor: [0, 0] }) }).bindPopup(() => apPopup(ap)).addTo(L_metar);
  });
}

// ---- 15b. Wind barbs — Open-Meteo grid at ETD ----
let windTimer = null, windReq = 0;
function scheduleWind(ms = 800) { clearTimeout(windTimer); windTimer = setTimeout(loadWindGrid, ms); }
function barbSvg(dir, spd, c) {
  const s = Math.round(spd / 5) * 5;
  if (s < 5) return `<svg width="44" height="44" viewBox="0 0 44 44"><circle cx="22" cy="22" r="5" fill="none" stroke="${c}" stroke-width="1.8"/></svg>`;
  let n50 = Math.floor(s / 50), rest = s - n50 * 50, n10 = Math.floor(rest / 10), n5 = rest - n10 * 10 >= 5 ? 1 : 0, y = 4, p = "";
  for (let i = 0; i < n50; i++) { p += `<path d="M22 ${y} L32 ${y + 2.5} L22 ${y + 5} Z" fill="${c}"/>`; y += 6.5; }
  for (let i = 0; i < n10; i++) { p += `<line x1="22" y1="${y}" x2="32" y2="${y - 3.5}"/>`; y += 3.5; }
  if (n5) { if (y === 4) y += 3.5; p += `<line x1="22" y1="${y}" x2="27" y2="${y - 1.75}"/>`; }
  return `<svg width="44" height="44" viewBox="0 0 44 44" style="transform:rotate(${dir}deg)" fill="none" stroke="${c}" stroke-width="1.8" stroke-linecap="round"><line x1="22" y1="22" x2="22" y2="4"/>${p}<circle cx="22" cy="22" r="2" fill="${c}"/></svg>`;
}
function barbHtml(dir, spd) { const c = spd >= 25 ? "#f87171" : spd >= 15 ? "#fbbf24" : "#e2e8f0"; return `<div style="display:flex;flex-direction:column;align-items:center;filter:drop-shadow(0 1px 2px rgba(0,0,0,.95))">${barbSvg(dir, spd, c)}<span style="font:700 9px 'IBM Plex Mono',monospace;color:${c};margin-top:-6px">${pad3(dir)}/${Math.round(spd)}</span></div>`; }
async function loadWindGrid() {
  if (!map.hasLayer(L_wind)) return; const id = ++windReq, lv = $("wind-level").value, b = map.getBounds(), N = isLg() ? 7 : 5, la = [], lo = [];
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) { la.push(b.getSouth() + (i + .5) * (b.getNorth() - b.getSouth()) / N); lo.push(b.getWest() + (j + .5) * (b.getEast() - b.getWest()) / N); }
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${la.map(x => x.toFixed(3)).join(",")}&longitude=${lo.map(x => x.toFixed(3)).join(",")}&hourly=wind_speed_${lv},wind_direction_${lv}&wind_speed_unit=kn&forecast_days=3&timezone=GMT`;
    const d = await (await fetch(url)).json(); if (id !== windReq) return;
    const arr = Array.isArray(d) ? d : [d], key = getEtd().toISOString().slice(0, 13) + ":00";
    L_wind.clearLayers();
    arr.forEach((it, k) => { if (!it.hourly) return; let i = it.hourly.time.indexOf(key); if (i < 0) i = 0; const s = it.hourly[`wind_speed_${lv}`][i], dir = it.hourly[`wind_direction_${lv}`][i]; if (s == null || dir == null) return;
      L.marker([la[k], lo[k]], { interactive: false, icon: L.divIcon({ className: "", html: barbHtml(dir, s), iconSize: [44, 54], iconAnchor: [22, 22] }) }).addTo(L_wind); });
    setSrc("ลม", `${lv} ณ ${key.slice(11, 16)}Z`, true);
  } catch (_) { setSrc("ลม", "โหลดไม่ได้", false); }
}

// ---- 15c. NASA GIBS daily satellite imagery ----
let satLayer = null;
function applySat() {
  if (satLayer) { map.removeLayer(satLayer); satLayer = null; }
  if (!$("tg-sat").checked) { setSrc("NASA GIBS", null); return; }
  const day = new Date(Date.now() - +$("sat-day").value * 864e5).toISOString().slice(0, 10), lyr = $("sat-layer").value;
  satLayer = L.tileLayer(`https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/${lyr}/default/${day}/GoogleMapsCompatible_Level9/{z}/{y}/{x}.jpg`, { maxNativeZoom: 9, maxZoom: 18, opacity: .8, zIndex: 5, attribution: "NASA GIBS" }).addTo(map);
  setSrc("NASA GIBS", `${lyr.split("_")[0]} ${day}`, true);
}

// ---- 15d. openAIP aeronautical overlay (user API key) ----
let oaipLayer = null;
function applyOaip() {
  if (oaipLayer) { map.removeLayer(oaipLayer); oaipLayer = null; }
  if (!$("tg-openaip").checked) { setSrc("openAIP", null); return; }
  const key = $("oaip-key").value.trim();
  if (!key) { $("tg-openaip").checked = false; setSrc("openAIP", null); toast("ใส่ openAIP API key ก่อน (สมัครฟรีที่ openaip.net)"); return; }
  let errs = 0;
  oaipLayer = L.tileLayer(`https://api.tiles.openaip.net/api/data/openaip/{z}/{x}/{y}.png?apiKey=${encodeURIComponent(key)}`, { maxZoom: 18, minZoom: 4, zIndex: 30, attribution: "© openAIP" });
  oaipLayer.on("tileerror", () => { if (++errs === 3) setSrc("openAIP", "key ไม่ถูกต้อง/โหลดไม่ได้", false); });
  oaipLayer.on("load", () => { if (!errs) setSrc("openAIP", "ห้วงอากาศ", true); });
  oaipLayer.addTo(map);
}

// ---- 15e. OpenStreetMap (Overpass) — helipads, power lines, tall obstacles ----
const OVERPASS = ["https://overpass-api.de/api/interpreter", "https://overpass.private.coffee/api/interpreter", "https://overpass.kumi.systems/api/interpreter"];
async function overpass(q, signal) {
  let last;
  for (const u of OVERPASS) {
    try { const r = await fetch(u, { method: "POST", body: "data=" + encodeURIComponent(q), headers: { "Content-Type": "application/x-www-form-urlencoded" }, signal }); if (!r.ok) { last = new Error(r.status); continue; } return await r.json(); }
    catch (e) { if (e.name === "AbortError") throw e; last = e; }
  }
  throw last || new Error("overpass");
}
function elCenter(el) {
  if (el.lat != null) return [el.lat, el.lon];
  if (el.center) return [el.center.lat, el.center.lon];
  const g = (el.geometry || []).filter(Boolean); if (g.length) return [g.reduce((s, p) => s + p.lat, 0) / g.length, g.reduce((s, p) => s + p.lon, 0) / g.length];
  if (el.bounds) return [(el.bounds.minlat + el.bounds.maxlat) / 2, (el.bounds.minlon + el.bounds.maxlon) / 2];
  return null;
}
const hFt = t => { const h = parseFloat(String(t.height || t["height:tip"] || "").replace(",", ".")); return isFinite(h) && h > 0 ? Math.round(h * 3.28084) : null; };
const OBST_TH = { mast: "เสา", tower: "หอสูง", communications_tower: "เสาสื่อสาร", chimney: "ปล่องควัน", flare: "ปล่องเผาก๊าซ" };
const obstType = t => t["generator:source"] === "wind" ? "กังหันลม" : t.aerialway === "pylon" ? "เสากระเช้า" : (OBST_TH[t.man_made] || t.man_made || "สิ่งกีดขวาง");
window._osmPts = [];
window.addOsm = i => { const p = window._osmPts[i]; if (p) window.addLL(p.lat, p.lon, p.name); };
function heliIcon(sz = 22) { return L.divIcon({ className: "", html: `<div style="width:${sz}px;height:${sz}px;border-radius:99px;background:#4a044e;border:2px solid #e879f9;color:#f5d0fe;display:flex;align-items:center;justify-content:center;font:800 ${sz * .5}px 'IBM Plex Mono',monospace;box-shadow:0 0 8px rgba(232,121,249,.6)">H</div>`, iconSize: [sz, sz], iconAnchor: [sz / 2, sz / 2] }); }
function heliPopup(name, t, lat, lon, idx) { return `<div class="text-xs space-y-1 min-w-[200px]"><b class="text-fuchsia-300">H ${esc(name)}</b><div class="text-[11px] text-slate-300">${esc(t.aeroway === "heliport" ? "Heliport" : "Helipad")}${t.operator ? " • " + esc(t.operator) : ""}${t.surface ? " • " + esc(t.surface) : ""}${t.ele ? " • ELEV " + esc(t.ele) + " m" : ""}</div><div class="mono text-[11px] text-cyan-300">${fmtLL(lat, lon)}</div><div class="text-[10px] text-slate-500">OpenStreetMap — ตรวจสถานะ/อนุญาตใช้งานกับเจ้าของ (PPR)</div><button onclick="addOsm(${idx})" class="btn btn-sm btn-go w-full">+ เส้นทาง</button></div>`; }
let osmTimer = null, osmCtl = null, osmLast = { key: "", bounds: null };
function scheduleOsm(ms = 900) { clearTimeout(osmTimer); osmTimer = setTimeout(loadOsm, ms); }
async function loadOsm() {
  const want = { heli: map.hasLayer(L_osmHeli), power: map.hasLayer(L_osmPower), obst: map.hasLayer(L_osmObst) }, z = map.getZoom();
  if (!want.heli && !want.power && !want.obst) { setSrc("OSM", null); return; }
  const ok = { heli: want.heli && z >= 8, power: want.power && z >= 11, obst: want.obst && z >= 10 };
  if (!ok.heli) L_osmHeli.clearLayers(); if (!ok.power) L_osmPower.clearLayers(); if (!ok.obst) L_osmObst.clearLayers();
  if (!ok.heli && !ok.power && !ok.obst) { osmLast = { key: "", bounds: null }; setSrc("OSM", `ซูมเข้า (≥${want.heli ? 8 : want.obst ? 10 : 11})`, null); return; }
  const key = `${+ok.heli}${+ok.power}${+ok.obst}`, view = map.getBounds();
  if (osmLast.key === key && osmLast.bounds && osmLast.bounds.contains(view)) return;
  const b = view.pad(.25), bb = `${b.getSouth().toFixed(4)},${b.getWest().toFixed(4)},${b.getNorth().toFixed(4)},${b.getEast().toFixed(4)}`, parts = [];
  if (ok.heli) parts.push(`nwr["aeroway"~"^(helipad|heliport)$"](${bb});`);
  if (ok.power) parts.push(`way["power"="line"](${bb});`);
  if (ok.obst) parts.push(`node["man_made"~"^(mast|tower|communications_tower|chimney|flare)$"](${bb});way["man_made"~"^(chimney|communications_tower)$"](${bb});node["generator:source"="wind"](${bb});`);
  if (osmCtl) osmCtl.abort(); osmCtl = new AbortController();
  setSrc("OSM", "กำลังโหลด…", null);
  try {
    const d = await overpass(`[out:json][timeout:25];(${parts.join("")});out body geom qt 4000;`, osmCtl.signal);
    osmLast = { key, bounds: b };
    if (ok.heli) L_osmHeli.clearLayers(); if (ok.power) L_osmPower.clearLayers(); if (ok.obst) L_osmObst.clearLayers();
    let nh = 0, np = 0, no = 0;
    (d.elements || []).forEach(el => {
      const t = el.tags || {};
      if (t.power === "line" && el.geometry) {
        const v = t.voltage ? Math.round(parseInt(t.voltage) / 1000) + " kV" : "";
        L.polyline(el.geometry.filter(Boolean).map(p => [p.lat, p.lon]), { renderer: osmCanvas, color: "#f43f5e", weight: 2.2, opacity: .9, dashArray: "7 4" }).bindTooltip(`สายไฟแรงสูง ${v}${t.name ? " — " + esc(t.name) : ""}`, { sticky: true }).addTo(L_osmPower); np++;
      } else if (/helipad|heliport/.test(t.aeroway || "")) {
        const c = elCenter(el); if (!c) return; const name = (t.ref || t.name || t["name:en"] || "HELIPAD").toString().slice(0, 24); const idx = window._osmPts.push({ lat: c[0], lon: c[1], name }) - 1;
        L.marker(c, { icon: heliIcon(), zIndexOffset: 200 }).bindPopup(heliPopup(name, t, c[0], c[1], idx)).bindTooltip(esc(name), { direction: "top", offset: [0, -10] }).addTo(L_osmHeli); nh++;
      } else {
        const c = elCenter(el); if (!c) return; const h = hFt(t), col = h == null ? "#facc15" : h >= 300 ? "#ef4444" : h >= 150 ? "#fb923c" : "#facc15";
        L.circleMarker(c, { renderer: osmCanvas, radius: h && h >= 300 ? 6 : 4.5, color: "#0b0f19", weight: 1.2, fillColor: col, fillOpacity: .95 }).bindTooltip(`${obstType(t)}${h ? ` • ${fmt(h)} ft AGL` : " • ไม่ระบุความสูง"}${t.name ? " — " + esc(t.name) : ""}`).addTo(L_osmObst); no++;
      }
    });
    setSrc("OSM", [ok.heli && `H ${nh}`, ok.power && `สายไฟ ${np}`, ok.obst && `เสา ${no}`].filter(Boolean).join(" • "), true);
  } catch (e) { if (e.name !== "AbortError") setSrc("OSM", "Overpass ไม่ตอบสนอง", false); }
}

// route obstacle scan (Briefing)
const routeKey = () => state.route.map(w => w.lat.toFixed(4) + "," + w.lon.toFixed(4)).join(";");
function nearestLeg(p) {
  const r = state.route; let best = { leg: 0, off: Infinity, along: 0 }, acc = 0;
  for (let i = 0; i < r.length - 1; i++) { const a = [r[i].lat, r[i].lon], b = [r[i + 1].lat, r[i + 1].lon], off = segDistNM(p, a, b), L1 = distNM(a[0], a[1], b[0], b[1]);
    if (off < best.off) { const dA = distNM(a[0], a[1], p[0], p[1]); best = { leg: i, off, along: acc + Math.min(L1, Math.sqrt(Math.max(0, dA * dA - off * off))) }; } acc += L1; }
  return best;
}
async function scanRouteObstacles() {
  const r = state.route; if (r.length < 2) return toast("ต้องมีเส้นทางอย่างน้อย 2 จุด");
  if (state.totals.dist > 400) return toast("เส้นทางยาวเกิน 400 NM — สแกนทีละช่วง");
  const ls = r.map(w => `${w.lat.toFixed(5)},${w.lon.toFixed(5)}`).join(","), btn = $("btn-scan-obst"), out = $("scan-out");
  const q = `[out:json][timeout:90];(node["man_made"~"^(mast|tower|communications_tower|chimney|flare)$"](around:1000,${ls});way["man_made"~"^(chimney|communications_tower)$"](around:1000,${ls});node["generator:source"="wind"](around:1000,${ls});node["aerialway"="pylon"](around:1000,${ls});way["power"="line"](around:150,${ls});nwr["aeroway"~"^(helipad|heliport)$"](around:2000,${ls}););out body geom qt;`;
  btn.disabled = true; out.innerHTML = `<span class="text-orange-300">กำลังสแกน OpenStreetMap ตามเส้นทาง ${state.totals.dist.toFixed(0)} NM…</span>`;
  try {
    const d = await overpass(q), power = [], obst = [], heli = [];
    L_scan.clearLayers();
    (d.elements || []).forEach(el => {
      const t = el.tags || {};
      if (t.power === "line" && el.geometry) {
        const g = el.geometry.filter(Boolean); let bp = null, bo = Infinity;
        g.forEach(pt => { const nl = nearestLeg([pt.lat, pt.lon]); if (nl.off < bo) { bo = nl.off; bp = { lat: pt.lat, lon: pt.lon, ...nl }; } });
        if (!bp) return; const kv = t.voltage ? Math.round(parseInt(t.voltage) / 1000) : null;
        if (power.some(p => distNM(p.lat, p.lon, bp.lat, bp.lon) < .3 && p.kv === kv)) return;
        power.push({ ...bp, kv, name: t.name || t.ref || "" });
      } else if (/helipad|heliport/.test(t.aeroway || "")) {
        const c = elCenter(el); if (!c) return; heli.push({ lat: c[0], lon: c[1], name: (t.ref || t.name || "HELIPAD").toString().slice(0, 24), tags: t, ...nearestLeg(c) });
      } else {
        const c = elCenter(el); if (!c) return; obst.push({ lat: c[0], lon: c[1], hft: hFt(t), type: obstType(t), name: t.name || obstType(t), ...nearestLeg(c) });
      }
    });
    power.sort((a, b) => a.along - b.along); obst.sort((a, b) => (b.hft || 0) - (a.hft || 0)); heli.sort((a, b) => a.off - b.off);
    const tall = obst.filter(o => o.hft && o.hft >= 300);
    state.scan = { key: routeKey(), power, obst, tall, heli };
    // draw
    power.forEach(p => L.marker([p.lat, p.lon], { zIndexOffset: 400, icon: L.divIcon({ className: "", html: `<div style="display:inline-flex;align-items:center;gap:2px;transform:translate(-9px,-9px)"><span style="width:18px;height:18px;border-radius:5px;background:#881337;border:1.5px solid #fb7185;color:#fff;font:800 11px sans-serif;display:flex;align-items:center;justify-content:center">⚡</span>${p.kv ? `<span class="lbl-tag" style="color:#fecdd3">${p.kv}kV</span>` : ""}</div>`, iconSize: [18, 18], iconAnchor: [0, 0] }) }).bindTooltip(`สายไฟแรงสูงตัดผ่าน ขา ${p.leg + 1} @ ${p.along.toFixed(1)} NM${p.kv ? ` • ${p.kv} kV` : ""}`).addTo(L_scan));
    obst.forEach(o => L.marker([o.lat, o.lon], { zIndexOffset: 380, icon: L.divIcon({ className: "", html: `<div style="display:inline-flex;align-items:center;gap:2px;transform:translate(-7px,-12px)"><div style="width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:13px solid ${o.hft >= 300 ? "#ef4444" : o.hft >= 150 ? "#fb923c" : "#facc15"};filter:drop-shadow(0 0 1.5px #000)"></div>${o.hft ? `<span class="lbl-tag" style="color:#fed7aa">${fmt(o.hft)}</span>` : ""}</div>`, iconSize: [14, 14], iconAnchor: [0, 0] }) }).bindTooltip(`${esc(o.type)}${o.hft ? ` ${fmt(o.hft)} ft AGL` : ""} • ห่างเส้นทาง ${(o.off * 1852).toFixed(0)} m`).addTo(L_scan));
    heli.forEach(h => { const idx = window._osmPts.push({ lat: h.lat, lon: h.lon, name: h.name }) - 1; L.marker([h.lat, h.lon], { icon: heliIcon(20), zIndexOffset: 390 }).bindPopup(heliPopup(h.name, h.tags, h.lat, h.lon, idx)).addTo(L_scan); });
    const row = (l, r2, cls = "") => `<div class="flex justify-between gap-2 py-1 border-b border-[#1c2638] last:border-0 ${cls}"><span class="truncate">${l}</span><span class="mono shrink-0">${r2}</span></div>`;
    out.innerHTML = `<div class="grid grid-cols-3 gap-1.5"><div class="stat"><span>สายไฟตัดผ่าน</span><b class="${power.length ? "!text-rose-300" : "!text-emerald-300"}">${power.length}</b></div><div class="stat"><span>เสา/หอสูง ≤1 km</span><b class="${tall.length ? "!text-orange-300" : ""}">${obst.length}</b></div><div class="stat"><span>Helipad ≤2 km</span><b class="!text-fuchsia-300">${heli.length}</b></div></div>
      ${power.length ? `<div class="mt-2 text-[12px]"><div class="text-rose-300 font-medium mb-0.5">⚡ สายไฟแรงสูงตัดผ่านเส้นทาง</div>${power.slice(0, 20).map(p => row(`ขา ${p.leg + 1} ${esc(p.name)}`, `${p.along.toFixed(1)} NM${p.kv ? ` • ${p.kv} kV` : ""}`)).join("")}${power.length > 20 ? `<div class="text-slate-500">+${power.length - 20} รายการ</div>` : ""}</div>` : ""}
      ${obst.length ? `<div class="mt-2 text-[12px]"><div class="text-orange-300 font-medium mb-0.5">▲ สิ่งกีดขวางสูง (เรียงตามความสูง)</div>${obst.slice(0, 15).map(o => row(`${esc(o.type)}${o.name && o.name !== o.type ? " " + esc(o.name) : ""} <span class="text-slate-500">ขา ${o.leg + 1}</span>`, `${o.hft ? fmt(o.hft) + " ft" : "n/a"} • ${(o.off * 1852).toFixed(0)} m`, o.hft >= 300 ? "text-rose-300" : "")).join("")}</div>` : ""}
      ${heli.length ? `<div class="mt-2 text-[12px]"><div class="text-fuchsia-300 font-medium mb-0.5">H จุดลงจอดใกล้เส้นทาง (สำหรับฉุกเฉิน/วางแผน)</div>${heli.slice(0, 10).map(h => row(esc(h.name), `ขา ${h.leg + 1} • ${h.off.toFixed(1)} NM`)).join("")}</div>` : ""}
      <p class="text-[11px] text-slate-500 mt-2">OpenStreetMap ไม่ครบทุกรายการ และความสูงส่วนใหญ่ไม่ได้ระบุ — ใช้ร่วมกับ AIP ENR 5.4 (Air navigation obstacles) และการสำรวจด้วยสายตาเสมอ</p>`;
    renderBrief();
    toast(`สแกนเสร็จ: สายไฟ ${power.length} • เสา ${obst.length} • Helipad ${heli.length}`);
  } catch (e) { out.innerHTML = `<span class="text-rose-300">Overpass ไม่ตอบสนอง (เซิร์ฟเวอร์ไม่ว่าง/ออฟไลน์) — ลองใหม่อีกครั้ง</span>`; }
  btn.disabled = false;
}
$("btn-scan-obst").onclick = scanRouteObstacles;


// =========================================================================
// 16. UI SHELL: TABS, BOTTOM SHEET, CLOCKS & BOOT
// =========================================================================
let sheetState = "half";
const sheetPx = s => s === "peek" ? 162 : s === "half" ? Math.round(window.innerHeight * .5) : window.innerHeight - 70;
function setSheet(s) {
  sheetState = s; document.documentElement.style.setProperty("--sheet-h", isLg() ? "0px" : sheetPx(s) + "px");
  $("side-drawer").dataset.state = s; setTimeout(() => { map.invalidateSize(); drawProfile(); }, 320);
}
(() => {
  const h = $("sheet-handle"), dr = $("side-drawer"); let y0 = null, h0 = 0, moved = false;
  h.addEventListener("pointerdown", e => { if (isLg()) return; y0 = e.clientY; h0 = dr.getBoundingClientRect().height; moved = false; dr.classList.add("dragging"); h.setPointerCapture(e.pointerId); });
  h.addEventListener("pointermove", e => { if (y0 == null) return; const dy = e.clientY - y0; if (Math.abs(dy) > 4) moved = true; const nh = Math.max(120, Math.min(window.innerHeight - 56, h0 - dy)); document.documentElement.style.setProperty("--sheet-h", nh + "px"); });
  h.addEventListener("pointerup", () => {
    if (y0 == null) return; dr.classList.remove("dragging"); y0 = null;
    if (!moved) { setSheet(sheetState === "peek" ? "half" : sheetState === "half" ? "full" : "peek"); return; }
    const cur = dr.getBoundingClientRect().height; const best = ["peek", "half", "full"].reduce((a, b) => Math.abs(sheetPx(b) - cur) < Math.abs(sheetPx(a) - cur) ? b : a);
    setSheet(best);
  });
})();
function switchTab(t) {
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === t));
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.toggle("hidden", p.id !== `tab-${t}`));
  $("panel-scroll").scrollTop = 0;
  if (t === "plan") drawProfile(); try { localStorage.setItem("thv2_tab", t); } catch (_) {}
}
document.querySelectorAll(".tab-btn").forEach(b => b.onclick = () => { switchTab(b.dataset.tab); if (!isLg() && sheetState === "peek") setSheet("half"); });
$("sum-go").onclick = () => { switchTab("brief"); if (!isLg() && sheetState === "peek") setSheet("half"); };
$("btn-toggle-drawer").onclick = () => {
  if (isLg()) { document.body.classList.toggle("panel-collapsed"); setTimeout(() => map.invalidateSize(), 320); }
  else setSheet(sheetState === "peek" ? "half" : "peek");
};
window.addEventListener("resize", () => setSheet(sheetState));
const TAB_ORDER = ["plan", "fuel", "brief", "airports", "notams", "weather", "tools"];
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { if (!$("app-modal").classList.contains("hidden")) return closeAppModal(); $("btn-layers-close").click(); setAddMode(false); return; }
  if (e.target.matches("input,textarea,select") || e.metaKey || e.ctrlKey || e.altKey) return;
  if (!$("app-modal").classList.contains("hidden")) return;
  const k = e.key.toLowerCase();
  if (e.key === "/") { e.preventDefault(); switchTab("plan"); if (!isLg()) setSheet("half"); $("wp-search").focus(); }
  else if (k === "l") $("btn-layers").click();
  else if (k === "f") state.fly.on ? closeFly() : openFly();
  else if (k === "a") setAddMode(!state.addWpMode);
  else if (/^[1-7]$/.test(e.key) && !state.fly.on) { switchTab(TAB_ORDER[+e.key - 1]); if (!isLg() && sheetState === "peek") setSheet("half"); }
});
function clocks() { const n = new Date(); $("clock-ict").textContent = n.toLocaleTimeString("en-GB", { timeZone: "Asia/Bangkok", hour12: false }) + " ICT"; $("clock-utc").textContent = utc(n); }

// =========================================================================
// 17. PWA SHELL — install, updates, offline status, offline maps, backup/GPX
// =========================================================================
const APP_VERSION = "4.0.0";
const UA = navigator.userAgent;
const isIOS = /iPad|iPhone|iPod/.test(UA) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const isAndroid = /Android/i.test(UA);
const isStandalone = () => window.matchMedia("(display-mode: standalone)").matches || window.matchMedia("(display-mode: fullscreen)").matches || window.matchMedia("(display-mode: window-controls-overlay)").matches || navigator.standalone === true;
let installEvt = null;

function renderInstall() {
  const st = $("install-state"), help = $("install-help"), can = !!installEvt;
  $("btn-install-pwa").classList.toggle("hidden", !can || isStandalone());
  $("btn-install-2").classList.toggle("hidden", !can || isStandalone());
  $("app-dot").classList.toggle("hidden", !can || isStandalone());
  if (isStandalone()) { st.className = "pill pill-go"; st.textContent = "ติดตั้งแล้ว"; help.innerHTML = `<p>แอปทำงานแบบเต็มจอและใช้งานออฟไลน์ได้ ข้อมูลอากาศ/จราจรจะอัปเดตเมื่อมีอินเทอร์เน็ต</p>`; return; }
  st.className = "pill pill-warn"; st.textContent = "ยังไม่ติดตั้ง";
  const step = (n, t) => `<div class="flex gap-2.5 items-start"><span class="w-5 h-5 rounded-full bg-amber-400 text-[#1a1205] text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">${n}</span><span>${t}</span></div>`;
  if (isIOS) help.innerHTML = `<p class="text-slate-400">iPhone / iPad (เปิดด้วย <b class="text-white">Safari</b>):</p>${step(1, `แตะปุ่ม <b class="text-white">แชร์</b> <i data-lucide="share" class="inline w-4 h-4 -mt-1 text-sky-300"></i> ที่แถบเครื่องมือ Safari`)}${step(2, `เลือก <b class="text-white">"เพิ่มไปยังหน้าจอโฮม"</b> (Add to Home Screen)`)}${step(3, `แตะ <b class="text-white">เพิ่ม</b> — ไอคอน HELI-VFR จะอยู่บนหน้าจอโฮม เปิดแบบเต็มจอ`)}`;
  else if (can) help.innerHTML = `<p>กดปุ่มด้านบนเพื่อติดตั้ง — แอปจะมีไอคอนบนหน้าจอ เปิดแบบเต็มจอ และใช้งานออฟไลน์ได้</p>`;
  else if (isAndroid) help.innerHTML = `<p class="text-slate-400">Android (Chrome / Edge / Samsung Internet):</p>${step(1, `แตะเมนู <b class="text-white">⋮</b> มุมขวาบน`)}${step(2, `เลือก <b class="text-white">"ติดตั้งแอป"</b> หรือ <b class="text-white">"เพิ่มลงในหน้าจอหลัก"</b>`)}`;
  else help.innerHTML = `<p class="text-slate-400">คอมพิวเตอร์ (Chrome / Edge): คลิกไอคอน <b class="text-white">ติดตั้ง</b> <i data-lucide="monitor-down" class="inline w-4 h-4 -mt-1 text-sky-300"></i> ที่ช่อง URL หรือเมนู ⋮ → "ติดตั้ง THAI HELI-VFR EFB" • บน iPad/iPhone ใช้ Safari → แชร์ → เพิ่มไปยังหน้าจอโฮม</p>`;
  lucide.createIcons();
}
async function doInstall() {
  if (!installEvt) { openAppModal(); return; }
  installEvt.prompt(); const r = await installEvt.userChoice; installEvt = null; renderInstall();
  if (r && r.outcome === "accepted") toast("กำลังติดตั้ง THAI HELI-VFR EFB");
}
window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); installEvt = e; renderInstall(); });
window.addEventListener("appinstalled", () => { installEvt = null; renderInstall(); toast("ติดตั้งแอปเรียบร้อย ✓"); });
$("btn-install-pwa").onclick = doInstall; $("btn-install-2").onclick = doInstall;

// ---- modal ----
function openAppModal() { renderInstall(); renderOffline(); $("app-modal").classList.remove("hidden"); lucide.createIcons(); }
function closeAppModal() { $("app-modal").classList.add("hidden"); offlineAbort && offlineAbort.abort(); }
$("btn-app").onclick = openAppModal;
$("app-modal").addEventListener("click", e => { if (e.target.closest("[data-close]")) closeAppModal(); });
$("btn-shortcuts").onclick = () => $("shortcuts-list").classList.toggle("hidden");
$("app-version").textContent = APP_VERSION;
$("app-build").textContent = document.documentElement.dataset.build || "dev";

// ---- online / offline ----
function renderNet() { $("net-pill").style.display = navigator.onLine ? "none" : ""; }
window.addEventListener("online", () => { renderNet(); toast("กลับมาออนไลน์ — กำลังอัปเดตข้อมูล"); loadMetar(); loadWeather(); loadRadar(); });
window.addEventListener("offline", () => { renderNet(); toast("ออฟไลน์ — ใช้แผนที่และข้อมูลที่บันทึกไว้"); });

// ---- service worker + update flow ----
let swReg = null, reloading = false;
function showUpdate(w) { $("update-banner").classList.remove("hidden"); $("btn-update-now").onclick = () => { $("update-banner").classList.add("hidden"); w.postMessage({ type: "SKIP_WAITING" }); }; }
$("btn-update-later").onclick = () => $("update-banner").classList.add("hidden");
if ("serviceWorker" in navigator && location.protocol.startsWith("http") && !/claude|anthropic|usercontent/.test(location.hostname)) {
  navigator.serviceWorker.register("./sw.js").then(reg => {
    swReg = reg;
    if (reg.waiting && navigator.serviceWorker.controller) showUpdate(reg.waiting);
    reg.addEventListener("updatefound", () => { const w = reg.installing; w && w.addEventListener("statechange", () => { if (w.state === "installed" && navigator.serviceWorker.controller) showUpdate(w); }); });
    setInterval(() => reg.update().catch(() => {}), 60 * 60e3);
  }).catch(() => {});
  navigator.serviceWorker.addEventListener("controllerchange", () => { if (reloading || !navigator.serviceWorker.controller) return; reloading = true; if (!state.fly.on) location.reload(); });
}
$("btn-check-update").onclick = async () => {
  if (!swReg) return toast("เปิดผ่าน https เพื่อใช้การอัปเดตอัตโนมัติ");
  toast("กำลังตรวจหาอัปเดต..."); try { await swReg.update(); } catch (_) {}
  setTimeout(() => { if (!swReg.waiting && !swReg.installing) toast("ใช้เวอร์ชันล่าสุดอยู่แล้ว ✓"); }, 1500);
};
if (navigator.storage && navigator.storage.persist) navigator.storage.persisted().then(p => { if (!p && isStandalone()) navigator.storage.persist().catch(() => {}); }).catch(() => {});

// ---- offline map download along route ----
const OFFLINE_OK = { esri: true, topo: true, dark: true, otm: true, relief: true };
let offlineAbort = null;
const lon2x = (lon, z) => Math.floor((lon + 180) / 360 * 2 ** z);
const lat2y = (lat, z) => { const r = toRad(lat); return Math.floor((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2 * 2 ** z); };
function tileUrl(layer, x, y, z) {
  const o = layer.options, sd = o.subdomains || "abc", s = typeof sd === "string" ? sd[Math.abs(x + y) % sd.length] : sd[Math.abs(x + y) % sd.length];
  return L.Util.template(layer._url, { s, x, y, z, r: L.Browser.retina ? "@2x" : "" });
}
function offlineTiles(key, bufNM, maxZ) {
  const base = BASEMAPS[key].l, layers = base.getLayers ? base.getLayers() : [base], set = new Set(), out = [];
  for (const layer of layers) {
  const mz = Math.min(maxZ, layer.options.maxZoom || 18);
  const pts = state.route.length ? state.route : [{ lat: map.getCenter().lat, lon: map.getCenter().lng }];
  for (let z = 6; z <= mz; z++) {
    for (let i = 0; i < Math.max(1, pts.length - 1); i++) {
      const a = pts[i], b = pts[i + 1] || pts[i], d = distNM(a.lat, a.lon, b.lat, b.lon), steps = Math.max(1, Math.ceil(d / Math.max(1, bufNM)));
      for (let k = 0; k <= steps; k++) {
        const la = a.lat + (b.lat - a.lat) * k / steps, lo = a.lon + (b.lon - a.lon) * k / steps;
        const dLa = bufNM / 60, dLo = bufNM / (60 * Math.cos(toRad(la)));
        const x0 = lon2x(lo - dLo, z), x1 = lon2x(lo + dLo, z), y0 = lat2y(la + dLa, z), y1 = lat2y(la - dLa, z);
        for (let x = x0; x <= x1; x++) for (let y = y0; y <= y1; y++) { const u = tileUrl(layer, x, y, z); if (!set.has(u)) { set.add(u); out.push(u); } }
      }
    }
  }
  }
  return out;
}
const MAX_DL = 6000;
function estimateOffline() {
  const key = $("off-base").value; if (!key) return [];
  const list = offlineTiles(key, +$("off-buf").value, +$("off-zoom").value);
  $("off-est").innerHTML = `${state.route.length >= 2 ? `เส้นทาง ${esc(state.route[0].id)} → ${esc(state.route[state.route.length - 1].id)}` : "บริเวณกลางแผนที่ (ยังไม่มีเส้นทาง)"} • <b class="${list.length > MAX_DL ? "text-rose-300" : "text-white"}">${fmt(list.length)}</b> ไทล์ ≈ ${(list.length * 22 / 1024).toFixed(0)} MB${list.length > MAX_DL ? ` — เกิน ${fmt(MAX_DL)} ลดซูม/ความกว้าง` : ""}`;
  $("btn-off-dl").disabled = !list.length || list.length > MAX_DL;
  return list;
}
async function renderOffline() {
  const sel = $("off-base");
  if (!sel.options.length) sel.innerHTML = Object.entries(BASEMAPS).filter(([k]) => OFFLINE_OK[k]).map(([k, b]) => `<option value="${k}">${b.n}</option>`).join("");
  if (OFFLINE_OK[S.basemap]) sel.value = S.basemap;
  estimateOffline();
  try {
    if ("caches" in window) { const c = await caches.open("thv-tiles-v1"); const n = (await c.keys()).length; const o = await (await caches.open("thv-tiles-opaque-v1")).keys(); $("tiles-count").textContent = `${fmt(n + o.length)} ไทล์ในเครื่อง`; }
    if (navigator.storage && navigator.storage.estimate) { const e = await navigator.storage.estimate(); $("storage-use").textContent = `${(e.usage / 1048576).toFixed(1)} MB / ${(e.quota / 1073741824).toFixed(1)} GB`; }
  } catch (_) {}
}
["off-base", "off-buf", "off-zoom"].forEach(id => $(id).addEventListener("change", estimateOffline));
$("btn-off-dl").onclick = async () => {
  if (!("caches" in window)) return toast("เบราว์เซอร์นี้ไม่รองรับการเก็บแผนที่ออฟไลน์");
  if (!navigator.onLine) return toast("ต้องเชื่อมต่ออินเทอร์เน็ตเพื่อดาวน์โหลด");
  const list = estimateOffline(); if (!list.length || list.length > MAX_DL) return;
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
  const cache = await caches.open("thv-tiles-v1"), bar = $("off-prog").firstElementChild;
  offlineAbort = new AbortController(); const sig = offlineAbort.signal;
  $("off-prog").classList.remove("hidden"); $("btn-off-stop").classList.remove("hidden"); $("btn-off-dl").disabled = true;
  let done = 0, fail = 0, i = 0;
  const worker = async () => {
    while (i < list.length && !sig.aborted) {
      const u = list[i++];
      try { if (!(await cache.match(u))) { const r = await fetch(u, { mode: "cors", signal: sig }); if (r.ok) await cache.put(u, r); else fail++; } } catch (_) { if (!sig.aborted) fail++; }
      done++; if (done % 10 === 0 || done === list.length) { bar.style.width = (done / list.length * 100).toFixed(1) + "%"; $("off-est").textContent = `ดาวน์โหลด ${fmt(done)} / ${fmt(list.length)}${fail ? ` • ล้มเหลว ${fail}` : ""}`; }
    }
  };
  await Promise.all(Array.from({ length: 6 }, worker));
  $("btn-off-stop").classList.add("hidden"); $("btn-off-dl").disabled = false;
  toast(sig.aborted ? "หยุดดาวน์โหลดแล้ว" : fail ? `ดาวน์โหลดเสร็จ (ล้มเหลว ${fail} ไทล์)` : "ดาวน์โหลดแผนที่ออฟไลน์เสร็จ ✓");
  offlineAbort = null; setTimeout(() => $("off-prog").classList.add("hidden"), 1500); renderOffline();
};
$("btn-off-stop").onclick = () => offlineAbort && offlineAbort.abort();
$("btn-off-clear").onclick = async () => {
  if (!confirm("ลบแผนที่ที่เก็บไว้ในเครื่องทั้งหมด?")) return;
  await caches.delete("thv-tiles-v1"); await caches.delete("thv-tiles-opaque-v1"); toast("ล้างแผนที่ออฟไลน์แล้ว"); renderOffline();
};

// ---- backup / restore ----
function download(name, text, type) {
  const blob = new Blob([text], { type }), a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}
async function shareOrDownload(name, text, type) {
  try { const f = new File([text], name, { type }); if (navigator.canShare && navigator.canShare({ files: [f] }) && (isIOS || isAndroid)) { await navigator.share({ files: [f], title: name }); return; } } catch (e) { if (e && e.name === "AbortError") return; }
  download(name, text, type);
}
const stamp = () => new Date().toLocaleString("sv-SE", { timeZone: "Asia/Bangkok" }).slice(0, 16).replace(/[-: ]/g, "");
$("btn-backup").onclick = () => {
  const data = { app: "thai-heli-vfr-efb", version: APP_VERSION, exported: new Date().toISOString(), data: {} };
  Object.values(K).forEach(k => { try { const v = localStorage.getItem(k); if (v != null) data.data[k] = JSON.parse(v); } catch (_) {} });
  try { data.data[K.oaip] = localStorage.getItem(K.oaip) || ""; } catch (_) {}
  shareOrDownload(`heli-vfr-backup-${stamp()}.json`, JSON.stringify(data, null, 1), "application/json");
};
$("btn-restore").onclick = () => $("file-restore").click();
$("file-restore").onchange = async e => {
  const f = e.target.files[0]; e.target.value = ""; if (!f) return;
  try {
    const j = JSON.parse(await f.text()); if (j.app !== "thai-heli-vfr-efb" || !j.data) throw new Error("ไม่ใช่ไฟล์สำรองของแอปนี้");
    if (!confirm(`กู้คืนข้อมูลจากไฟล์ (${(j.exported || "").slice(0, 10)})? ข้อมูลปัจจุบันจะถูกแทนที่`)) return;
    for (const [k, v] of Object.entries(j.data)) { if (!Object.values(K).includes(k)) continue; if (k === K.oaip) localStorage.setItem(k, v); else LS.set(k, v); }
    toast("กู้คืนข้อมูลแล้ว — กำลังโหลดใหม่"); setTimeout(() => location.reload(), 800);
  } catch (err) { toast("กู้คืนไม่สำเร็จ: " + err.message); }
};

// ---- GPX ----
function routeGpx() {
  const x = s => esc(s), name = state.route.map(w => w.id).join("-");
  const pts = state.route.map(w => `    <rtept lat="${w.lat.toFixed(6)}" lon="${w.lon.toFixed(6)}"><name>${x(w.id)}</name>${w.name && w.name !== w.id ? `<desc>${x(w.name)}</desc>` : ""}</rtept>`).join("\n");
  const wpts = state.route.map(w => `  <wpt lat="${w.lat.toFixed(6)}" lon="${w.lon.toFixed(6)}"><name>${x(w.id)}</name>${w.name && w.name !== w.id ? `<desc>${x(w.name)}</desc>` : ""}</wpt>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<gpx version="1.1" creator="THAI HELI-VFR EFB" xmlns="http://www.topografix.com/GPX/1/1">\n  <metadata><name>${x(name)}</name><time>${new Date().toISOString()}</time></metadata>\n${wpts}\n  <rte><name>${x(name)}</name>\n${pts}\n  </rte>\n</gpx>\n`;
}
function exportGpx() {
  if (state.route.length < 1) return toast("ยังไม่มีเส้นทางให้ส่งออก");
  shareOrDownload(`${state.route[0].id}-${state.route[state.route.length - 1].id}.gpx`.replace(/[^\w.-]+/g, "_"), routeGpx(), "application/gpx+xml");
}
$("btn-export-gpx").onclick = exportGpx; $("btn-gpx-out").onclick = exportGpx;
$("btn-gpx-in").onclick = () => $("file-gpx").click();
$("file-gpx").onchange = async e => {
  const f = e.target.files[0]; e.target.value = ""; if (!f) return;
  try {
    const doc = new DOMParser().parseFromString(await f.text(), "application/xml");
    let nodes = [...doc.getElementsByTagName("rtept")]; if (!nodes.length) nodes = [...doc.getElementsByTagName("wpt")]; if (!nodes.length) nodes = [...doc.getElementsByTagName("trkpt")].filter((_, i, a) => i % Math.max(1, Math.ceil(a.length / 50)) === 0 || i === a.length - 1);
    const pts = nodes.map((n, i) => { const lat = +n.getAttribute("lat"), lon = +n.getAttribute("lon"), nm = (n.getElementsByTagName("name")[0]?.textContent || `WPT${i + 1}`).trim().slice(0, 24); return isFinite(lat) && isFinite(lon) ? { lat, lon, nm } : null; }).filter(Boolean);
    if (pts.length < 1) throw new Error("ไม่พบจุดในไฟล์");
    if (state.route.length && !confirm(`แทนที่เส้นทางปัจจุบันด้วย ${pts.length} จุดจากไฟล์?`)) return;
    state.route = pts.map(p => { const ap = AIRPORTS.find(a => a.icao === p.nm.toUpperCase()); return ap ? resolveKey("AP:" + ap.icao) : { id: p.nm, name: p.nm, lat: p.lat, lon: p.lon, elev: 0, kind: "USR" }; });
    afterRouteChange(); fitRoute(); closeAppModal(); toast(`นำเข้า ${pts.length} จุดแล้ว`);
  } catch (err) { toast("นำเข้า GPX ไม่สำเร็จ: " + err.message); }
};

// ---- map label declutter by zoom ----
function declutter() { const z = map.getZoom(), c = map.getContainer().classList; c.toggle("z-lo", z < 10); c.toggle("z-vlo", z < 9); }
map.on("zoomend", declutter);

// ---- deep links from manifest shortcuts: ?tab=brief, ?action=fly ----
function handleLaunchParams() {
  const q = new URLSearchParams(location.search), t = q.get("tab"), act = q.get("action");
  if (t && $("tab-" + t)) { switchTab(t); if (!isLg()) setSheet("half"); }
  if (act === "fly") setTimeout(openFly, 300);
  if (t || act || q.get("source")) history.replaceState(null, "", location.pathname);
}
document.addEventListener("visibilitychange", () => { if (state.fly.on && document.visibilityState === "visible") setWake(true); });

rebuildNotams();
setInterval(() => { const n = state.notams.length; rebuildNotams(); if (n !== state.notams.length) { renderNotams(); renderMapMarkers(); renderBrief(); } }, 30 * 60e3);
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible" && navigator.onLine && (!state.metarAt || Date.now() - state.metarAt > 5 * 60e3)) { loadMetar(); loadRadar(); } });
(async function boot() {
  setSheet(window.innerHeight < 700 ? "peek" : "half");
  if (!state.cwps.length) { const v = await idbGet(K.wps); if (Array.isArray(v)) state.cwps = v; }
  if (!state.savedRoutes.length) { const v = await idbGet(K.routes); if (Array.isArray(v)) state.savedRoutes = v; }
  if (!state.route.length) { const v = await idbGet(K.route); if (Array.isArray(v)) state.route = v; }
  populateSelectors(); fillInputs(); renderChecklist(); calcDA(); calcWC(); renderSrc();
  renderMapMarkers(); renderCwps(); renderSavedRoutes(); renderAirportsList(); renderNotams(); renderRoute(); renderWxCards();
  if (state.route.length >= 2) { fitRoute(); scheduleProfile(); scheduleTerrainOverlay(); }
  try { const t = localStorage.getItem("thv2_tab"); if (t && $("tab-" + t)) switchTab(t); } catch (_) {}
  // restore layer preferences, then sync every toggle with the map
  try { $("oaip-key").value = localStorage.getItem(K.oaip) || ""; } catch (_) {}
  const lp = LS.get(K.layers, null) || {};
  if (lp.windLevel) $("wind-level").value = lp.windLevel; if (lp.satLayer) $("sat-layer").value = lp.satLayer; if (lp.satDay != null) $("sat-day").value = lp.satDay;
  LAYER_TOGGLES.forEach(id => { if (id in lp) $(id).checked = !!lp[id]; });
  LAYER_TOGGLES.filter(id => id !== "tg-radar").forEach(id => $(id).dispatchEvent(new Event("change")));
  lucide.createIcons(); clocks(); setInterval(clocks, 1000);
  renderNet(); renderInstall(); declutter(); handleLaunchParams();
  startGps(false); loadRadar(); loadWeather(); loadMetar();
  setInterval(loadRadar, 5 * 60e3); setInterval(loadWeather, 30 * 60e3); setInterval(loadMetar, 10 * 60e3);
})();
