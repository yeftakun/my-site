📌 Project Summary — Personal Website + Assetto Corsa Lap Board
🎯 Tujuan

Membangun personal website minimalis yang menampilkan:

Profil pribadi (About, Projects, Games, Contact).

Lap Time Board khusus untuk Assetto Corsa, membaca data dari personalbest.ini → dikonversi ke laps.json.

Dideploy gratis di GitHub Pages.

🛠️ Teknologi

Astro (static site generator, cocok GitHub Pages).

TailwindCSS (utility-first CSS, styling cepat).

React (untuk komponen interaktif seperti Lap Time Table).

📂 Struktur Folder
```
src/
 ├─ pages/
 │   ├─ index.astro           # Halaman utama
 │   ├─ about.astro           # Tentang saya
 │   ├─ projects.astro        # Proyek portofolio
 │   ├─ games.astro           # Game yang dimainkan
 │   └─ assetto-corsa.astro   # Lap Time Board
 ├─ components/
 │   └─ LapTable.jsx          # Komponen tabel interaktif
 ├─ styles/globals.css        # Tailwind + variabel tema
 └─ layouts/Base.astro        # Layout global
data/
 └─ assetto/
     ├─ personalbest.ini      # Data asli dari Assetto Corsa
     └─ laps.json             # Hasil konversi INI → JSON
scripts/
 └─ convert-personalbest.js   # Script konversi ke JSON
.github/workflows/
 └─ deploy.yml                # CI/CD GitHub Pages
```
🔄 Alur Data

Salin personalbest.ini dari game ke data/assetto/.

Jalankan npm run laps:build → hasilkan laps.json.

Halaman /assetto-corsa fetch laps.json → tampilkan tabel interaktif.

🎨 UI & Tema

Minimalis, berbasis grid, banyak whitespace.

Light theme: putih + cobalt accent.

Dark theme: graphite + racing red.

Tabel: sortable, filterable, highlight PB (personal best).

🚀 Deployment

Konfigurasi astro.config.mjs → site & base.

Build via GitHub Actions → otomatis deploy ke Pages.

Update data cukup push file personalbest.ini.