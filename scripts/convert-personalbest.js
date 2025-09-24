// scripts/convert-personalbest.js
import fs from "fs";
import path from "path";

function stripKS(value) {
  return typeof value === "string" ? value.replace(/KS_/g, "") : value;
}

// zona waktu untuk tanggal (Asia/Makassar, UTC+8)
// Kita simpan tanggal ISO YYYY-MM-DD berdasarkan zona waktu ini.
function toLocalDateYYYYMMDD(ms, offsetHours = 8) {
  const d = new Date(ms + offsetHours * 3600 * 1000);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

const iniPath = path.resolve("data/assetto/personalbest.ini");
const outPath = path.resolve("data/assetto/laps.json");

const text = fs.readFileSync(iniPath, "utf-8");
const lines = text.split(/\r?\n/);

let current = null;
const rows = [];

for (const raw of lines) {
  const line = raw.trim();
  if (!line) continue;

  if (line.startsWith("[") && line.endsWith("]")) {
    // format: [CAR@TRACK]
    const section = line.slice(1, -1);
    const atIdx = section.indexOf("@");
    const rawCar = atIdx >= 0 ? section.slice(0, atIdx) : section;
    const rawTrack = atIdx >= 0 ? section.slice(atIdx + 1) : "UNKNOWN";
    current = {
      car: stripKS(rawCar),
      track: stripKS(rawTrack),
      date: null,
      laptime_ms: null
    };
    continue;
  }

  if (current) {
    const [k, v] = line.split("=");
    if (!k || v == null) continue;
    if (k === "DATE") {
      const ms = Number(v);
      current.date = toLocalDateYYYYMMDD(ms, 8); // Asia/Makassar
    } else if (k === "TIME") {
      current.laptime_ms = Number(v);
    }
    // Jika keduanya sudah ada, dorong & reset agar aman ke section berikutnya
    if (current.date && Number.isFinite(current.laptime_ms)) {
      rows.push(current);
      current = null;
    }
  }
}

fs.writeFileSync(outPath, JSON.stringify(rows, null, 2), "utf-8");
console.log(`Converted ${rows.length} entries -> ${outPath}`);