=================================================================
 PORTOFOLIO — PRAYOGO PANGESTU
 Front-End Developer & Logo Designer
=================================================================

STRUKTUR FOLDER
-----------------------------------------------------------------
index.html          -> halaman utama, buka file ini di browser
css/style.css        -> semua tampilan & animasi (warna, efek glow, dll)
js/main.js            -> navigasi, efek ketik, scroll reveal, render proyek
js/webcanvas.js      -> animasi jaring titik-titik di background Hero
js/spiderman.js      -> interaksi klik "tembak jaring" di section Tentang
data/projects.js     -> ISI DATA 8 PROYEK KAMU (edit di sini!)
data/projects.json   -> format data yang sama dalam JSON murni (referensi/opsional,
                        jika suatu saat mau dipakai di server/backend lain)
assets/web-pattern.svg -> pola jaring dekoratif untuk background

CARA MEMBUKA
-----------------------------------------------------------------
1. Ekstrak folder ini.
2. Klik dua kali "index.html" -> otomatis terbuka di browser.
   Semua fitur (animasi, tombol, kontak) langsung berfungsi tanpa
   perlu install apa pun.

CARA MENGGANTI GAMBAR & LINK PROYEK
-----------------------------------------------------------------
1. Buka folder "data" -> buka file "projects.js" pakai Notepad,
   VS Code, atau text editor apa saja.
2. Untuk tiap proyek, ubah:
     title  -> nama proyek
     desc   -> deskripsi singkat
     image  -> alamat gambar (bisa link dari internet, atau taruh
               file gambar di folder "assets" lalu tulis contoh:
               "assets/project-1.jpg")
     link   -> alamat/link demo atau repository proyekmu
3. Simpan file, lalu refresh halaman index.html di browser.

Tips: kalau mau pakai gambar sendiri, taruh file gambarnya
(jpg/png) di dalam folder "assets", lalu isi "image" dengan
nama file tersebut, contoh: "assets/project-1.jpg".

MENGGANTI KONTAK
-----------------------------------------------------------------
Buka index.html, cari bagian "CONTACT", nomor WhatsApp, Instagram,
dan Gmail ada di sana dan bisa langsung diganti.

CATATAN ANIMASI SPIDERMAN
-----------------------------------------------------------------
Di section "Tentang Saya", ada sosok yang bergelantungan di jaring
(animasi CSS pendulum + SVG) sebagai elemen dekoratif bertema
web-slinger/robotic. Klik kotak tersebut untuk memicu efek
"tembakan jaring" partikel.

Selamat memakai portofolionya!
