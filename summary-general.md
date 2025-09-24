Berikut rekomendasi eksekusi UI untuk personal website minimalis—rapi, cepat, dan mudah dibaca—beserta tema warna yang selaras dengan nuansa sim-racing namun tetap profesional.

A. Prinsip Desain

Grid & ruang kosong: container max-width 1120–1200px, grid 12 kolom, line-height 1.6+, spacing konsisten (8px scale).

Hierarchy jelas: 1 hero → 2–3 CTA maksimal → konten berkelompok (cards/tables).

Aksesibilitas: kontras ≥ 4.5:1, fokus jelas, navigasi keyboard, dukung prefers-reduced-motion.

Responsif: breakpoint utama 640 / 768 / 1024 / 1280 px; navbar sticky + menu drawer di mobile.

B. Struktur Halaman (UI Ringkas)

Navbar minimal

Kiri: logo/initials. Kanan: Home, About, Projects, Games, Assetto Corsa, Contact + toggle light/dark.

Hero

Avatar kecil, heading singkat (nama + role), 1 paragraf ~2 kalimat, CTA: “Lihat Portofolio” dan “Lap Time Board”.

Projects (cards)

Card berdasar grid; isi: judul, 1–2 kalimat, chip tech, tombol “Demo” / “Repo”.

About

Timeline vertikal sederhana; fakta ringkas (hobi, minat).

Games

Tabs/segmented control: “Semua”, “FPS/Mobile”, “Sim Racing”, “Rhythm”.

Setiap game: mini-card (logo kecil, jam main/level, 1 highlight).

Assetto Corsa (khas)

Lap Time Board (tabel ramping, sortable): Track | Car | Lap | Date | Conditions | Notes.

Badge “PB” (personal best), delta hijau/merah kecil (±ms).

Filter chip: Track, Car, Weather; pencarian cepat.

Sub-section “Car Setup” (accordion per mobil): aero/tyre/suspension.

Galeri 3-kolom untuk livery/screenshot (lazy-loaded).

Blog (opsional)

Daftar ringkas; tag filter.

Contact

Form 3 field + link sosial (GitHub, LinkedIn, Steam).

C. Tema Warna (pilih salah satu; semuanya minimal & aksesibel)
1) Light Minimal + Cobalt (profesional serbaguna)

Background: #FFFFFF

Surface (card/nav): #F7F7F8

Text utama: #0B0F13

Subtext: #5A616B

Primary (cobalt): #2A5BFF

Primary hover: #2049CC

Accent success (lap -delta): #1FA971

Accent danger (lap +delta): #D24545

Border: #E6E8EC

Kesan bersih, aman untuk rekrutrer/klien; aksen biru memberi fokus pada CTA & tautan.

2) Dark Graphite + Racing Red (identitas sim-racing)

Background: #0D0F13

Surface: #141821

Text utama: #E9EDF3

Subtext: #9AA3AD

Primary (racing red): #E10600

Primary hover: #B30500

Accent success: #30D158

Accent danger: #FF453A

Border: #232A35

Kontras kuat untuk lap board malam hari; merah menggemakan motorsport, tetap elegan.

3) Warm Gray + Lime Accent (fresh & techy)

Background: #FCFCFC

Surface: #F2F2F2

Text: #111315

Subtext: #60656B

Primary (lime): #7FD320

Primary hover: #64A919

Success: #1FA971

Danger: #D24545

Border: #E5E7EA

Nuansa modern ringan; lime memberi kesan cepat/enerjik tanpa terlalu “gaming”.

Saran pemilihan:

Untuk profil yang menyasar kerja/proyek: Tema 1.

Untuk menonjolkan identitas sim racing: Tema 2 (sediakan toggle ke Tema 1).

Untuk tampilan segar non-konvensional: Tema 3.

D. Tipografi

Sans modern: Inter / Manrope / SF Pro (fallback system font); ukuran: 16px base, 28–36px H1.

Weight: 600 untuk heading, 400–500 body; maksimal 2 ukuran heading di satu layar.

Kode/angka lap: gunakan tabular numerals (Inter mendukung) agar kolom waktu rata.

E. Komponen Kunci (detail implementasi)

Buttons: solid untuk aksi utama, ghost untuk sekunder; radius 12–16px, padding vertikal 10–12px.

Cards: sudut 16–20px, shadow lembut; hover: sedikit elevate + ring halus.

Chips/Badges: untuk track/car/conditions; jangan lebih dari 3 warna aktif bersamaan.

Table Lap Time:

Header sticky, zebra sangat tipis.

Kolom waktu right-aligned; “PB” badge kecil.

Delta: teks kecil ±ms; hijau untuk lebih cepat, merah untuk lebih lambat.

Sort & filter di atas tabel; simpan state di URL query (?track=...&car=...).

F. Interaksi & Motion

Durasi 180–220ms, ease-out; hover halus pada card & tombol.

Skeleton loader untuk galeri/fetch lap.

Respect prefers-reduced-motion.

G. Kualitas & Performa

Gambar: next/image/lazy load, ukuran responsif.

Font: subset + display=swap.

Warna via CSS variables untuk mudah switch tema:
```
:root{--bg:#fff;--surface:#f7f7f8;--text:#0b0f13;--muted:#5a616b;--primary:#2a5bff;--border:#e6e8ec;--success:#1fa971;--danger:#d24545}
.dark{--bg:#0d0f13;--surface:#141821;--text:#e9edf3;--muted:#9aa3ad;--primary:#e10600;--border:#232a35;--success:#30d158;--danger:#ff453a}
```
H. Khusus “Assetto Corsa” (UX)

Quick filter bar (chips): Track, Car, Weather, Tyre.

Impor data: CSV sederhana (Track, Car, Lap(ms), Date, Weather, Notes).

Highlight otomatis: baris PB ditandai ring tipis + ikon kecil “🏁”.

Setup accordion: kelompokkan Aero / Tyre / Suspension; tombol “Copy as text”.

Jika diinginkan, saya bisa:

membuat sitemap visual sederhana dari struktur di atas, atau

menyiapkan starter UI (Next.js + Tailwind) dengan 2 tema (Light Minimal & Dark Graphite) dan contoh Lap Time Board yang sudah sortable/filterable.
Silakan pilih tema yang Anda suka, lalu saya siapkan kerangka awalnya.