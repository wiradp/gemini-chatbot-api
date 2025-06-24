# Gemini AI Chatbot

Aplikasi web chatbot sederhana yang ditenagai oleh Google Gemini AI, dibangun dengan Node.js dan Vanilla JavaScript.

## Deskripsi

Proyek ini adalah implementasi chatbot interaktif yang memungkinkan pengguna berkomunikasi langsung dengan model AI canggih dari Google, yaitu Gemini. Backend dibangun menggunakan Node.js dan Express, sementara frontend dirancang dengan HTML, CSS, dan JavaScript murni untuk memastikan performa yang cepat dan ringan.

Aplikasi ini memiliki antarmuka yang bersih dan modern, di mana respons dari AI yang mendukung format Markdown (seperti daftar, teks tebal, dan blok kode) akan ditampilkan dengan rapi.

## Fitur Utama

- **Interaksi Real-time:** Komunikasi langsung dengan Gemini AI.
- **Antarmuka Modern:** Tampilan yang bersih, responsif, dan mudah digunakan.
- **Dukungan Markdown:** Respons dari bot ditampilkan dengan format yang kaya (tebal, miring, daftar, blok kode).
- **Arsitektur Sederhana:** Backend dan frontend yang terpisah untuk kemudahan pengembangan dan pemeliharaan.
- **Mudah Dijalankan:** Konfigurasi minimal untuk memulai.

## Teknologi yang Digunakan

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
  - [Google Generative AI SDK](https://www.npmjs.com/package/@google/generative-ai)
  - `dotenv` untuk manajemen environment variable.
  - `cors` untuk Cross-Origin Resource Sharing.
- **Frontend:**
  - HTML5
  - CSS3
  - Vanilla JavaScript
  - Marked.js (via CDN) untuk merender Markdown.

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

- Node.js (disarankan versi 18.0.0 atau lebih baru).
- Sebuah **API Key** dari Google AI Studio.

## Instalasi dan Konfigurasi

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di lingkungan lokal Anda:

1.  **Clone repository ini:**

    ```bash
    git clone https://github.com/username/repository-name.git
    ```

    _(Ganti `username/repository-name` dengan URL repository Anda)_

2.  **Masuk ke direktori proyek:**

    ```bash
    cd gemini-chatbot-api
    ```

3.  **Install semua dependency yang dibutuhkan:**

    ```bash
    npm install
    ```

4.  **Buat file `.env` di root direktori proyek:**
    File ini akan digunakan untuk menyimpan API Key Anda secara aman.

    ```bash
    touch .env
    ```

5.  **Tambahkan API Key Anda ke dalam file `.env`:**
    Buka file `.env` dan tambahkan baris berikut, ganti `API_KEY_ANDA` dengan kunci yang Anda dapatkan dari Google AI Studio.
    ```
    GEMINI_API_KEY=API_KEY_ANDA
    ```

## Menjalankan Aplikasi

Untuk memulai server, jalankan perintah berikut di terminal:

```bash
npm start
```

Setelah server berjalan, Anda akan melihat pesan di terminal:
`Gemini Chatbot running on http://localhost:3000`

Buka browser Anda dan kunjungi **http://localhost:3000** untuk mulai berinteraksi dengan chatbot.

## Struktur Proyek

```
/
├── public/
│   ├── index.html      # Struktur utama halaman chat
│   ├── style.css       # Styling untuk antarmuka
│   └── script.js       # Logika frontend (interaksi & fetch API)
├── .env                # File untuk menyimpan variabel lingkungan (API Key)
├── .gitignore          # File yang diabaikan oleh Git
├── index.js            # File utama server (Backend Express)
├── package.json        # Metadata proyek dan daftar dependency
└── README.md           # Dokumentasi proyek (file ini)
```

## Lisensi

Proyek ini dilisensikan di bawah Lisensi ISC.

Yuk mampir ke [portofolio](https://wiradp.github.io/) saya
