import { useEffect, useMemo, useState } from "react";

const DATA_URL = `${import.meta.env.BASE_URL}data/assetto/laps.json`;

function fmtLap(ms) {
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  const x = ms % 1000;
  return `${m}:${String(s).padStart(2,"0")}.${String(x).padStart(3,"0")}`;
}

export default function LapTable() {
  const [rows, setRows] = useState([]);
  const [q, setQ] = useState({ track: "", car: "" });
  const [sortKey, setSortKey] = useState("date");
  const [sortDir, setSortDir] = useState("desc");

  useEffect(() => {
    fetch(DATA_URL).then((r) => r.json()).then(setRows);
  }, []);

  const filtered = useMemo(() => {
    const t = q.track.toLowerCase();
    const c = q.car.toLowerCase();
    return rows.filter(
      (r) => (!t || r.track.toLowerCase().includes(t)) && (!c || r.car.toLowerCase().includes(c)),
    );
  }, [rows, q]);

  const sorted = useMemo(() => {
    const v = [...filtered];
    v.sort((a, b) => {
      const A = a[sortKey], B = b[sortKey];
      if (A === B) return 0;
      return sortDir === "asc" ? (A > B ? 1 : -1) : (A < B ? 1 : -1);
    });
    return v;
  }, [filtered, sortKey, sortDir]);

  const th = (key, label) => (
    <th
      className="py-2 px-3 text-left cursor-pointer"
      onClick={() =>
        setSortKey((prev) =>
          prev === key ? (setSortDir((d) => (d === "asc" ? "desc" : "asc")), key) : (setSortDir("asc"), key),
        )
      }
    >
      {label}
      {sortKey === key ? (sortDir === "asc" ? " ^" : " v") : ""}
    </th>
  );

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          className="border rounded px-3 py-2 w-60 bg-white/80 dark:bg-[#141821] border-gray-200 dark:border-[#232A35]"
          placeholder="Filter Track"
          value={q.track}
          onChange={(e) => setQ((p) => ({ ...p, track: e.target.value }))}
        />
        <input
          className="border rounded px-3 py-2 w-60 bg-white/80 dark:bg-[#141821] border-gray-200 dark:border-[#232A35]"
          placeholder="Filter Car"
          value={q.car}
          onChange={(e) => setQ((p) => ({ ...p, car: e.target.value }))}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="sticky top-0 bg-white/90 dark:bg-[#141821]/90 backdrop-blur">
            <tr className="border-b border-gray-200 dark:border-[#232A35]">
              {th("track", "Track")}
              {th("car", "Car")}
              {th("laptime_ms", "Lap")}
              {th("date", "Date")}
            </tr>
          </thead>
          <tbody>
            {sorted.map((r, i) => (
              <tr key={i} className="border-b border-gray-100 dark:border-[#232A35]">
                <td className="py-2 px-3">{r.track}</td>
                <td className="py-2 px-3">{r.car}</td>
                <td className="py-2 px-3 tabular-nums">{fmtLap(r.laptime_ms)}</td>
                <td className="py-2 px-3">{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}