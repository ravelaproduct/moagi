# Product Requirements Document (PRD)

## Project Title
Revamp Website Company Profile **Moagi Laundry** (Frontend Only)

## Document Purpose
Dokumen ini bertujuan sebagai **acuan resmi (context & PRD)** untuk pengembangan website company profile Moagi Laundry menggunakan **React (frontend only)**. Dokumen ini menjelaskan secara detail mengenai **tujuan produk, target user, scope fitur, struktur halaman, UI/UX pattern, SEO, serta non-functional requirements**.

Website ini **tidak menggunakan backend**, seluruh konten bersifat statis/dummy (bisa diubah ke CMS di masa depan).

---

## 1. Background & Problem Statement
Website Moagi Laundry saat ini:
- Belum modern secara visual
- Kurang menarik secara estetika
- Kurang optimal untuk SEO
- Belum memiliki struktur konten yang kuat sebagai company profile

Sebagai bisnis jasa laundry, Moagi Laundry membutuhkan website yang:
- Terlihat profesional & terpercaya
- Mudah dipahami oleh user awam
- Menarik secara visual (aesthetic & clean)
- Mudah ditemukan di Google (SEO-friendly)

---

## 2. Product Goals
### Primary Goals
- Menampilkan identitas & kredibilitas Moagi Laundry
- Menjadi landing page utama untuk calon pelanggan
- Meningkatkan kepercayaan user
- Meningkatkan reach melalui SEO

### Secondary Goals
- Menjadi dasar untuk pengembangan fitur lanjutan (CMS / booking)
- Menjadi media branding jangka panjang

---

## 3. Target Users
1. **Pelanggan Laundry Lokal**
   - Ingin mencari jasa laundry terpercaya
   - Mengutamakan kebersihan & kecepatan

2. **Calon Pelanggan Baru**
   - Menemukan Moagi Laundry dari Google
   - Membandingkan dengan kompetitor

3. **Partner / Corporate Client**
   - Melihat profil perusahaan
   - Menilai profesionalitas bisnis

---

## 4. Scope of Work (Frontend Only)
### In Scope
- Website company profile
- Responsive design (mobile, tablet, desktop)
- SEO on-page
- Static content
- CTA WhatsApp

### Out of Scope
- Backend / API
- Authentication
- Booking system
- Payment system
- Admin panel

---

## 5. Tech Stack
### Core Technology
- React (Vite)
- React Router DOM
- Tailwind CSS

### Supporting Libraries
- Framer Motion (animation)
- React Helmet Async (SEO)
- Lucide-react / React Icons

---

## 6. Information Architecture (Struktur Halaman)

### Sitemap
- `/` Home
- `/about`
  - `/about/sejarah`
  - `/about/visi-misi`
  - `/about/strategi`
  - `/about/struktur-organisasi`
- `/layanan`
- `/lokasi`
- `/kontak`
- `/article` atau `/news`

---

## 7. Detailed Page Requirements

### 7.1 Home Page
**Tujuan:**
- Menarik perhatian user dalam 5 detik pertama
- Menyampaikan value utama Moagi Laundry

**Section:**
1. Hero Section
2. How It Works
3. Our Services
4. Why Choose Us
5. CTA WhatsApp

---

### 7.2 About Us
Menjelaskan identitas dan profesionalitas perusahaan.

- Sejarah: timeline
- Visi & Misi: card layout
- Strategi: bullet / icon-based
- Struktur Organisasi: card / diagram sederhana

---

### 7.3 Layanan
Menampilkan layanan utama laundry dalam bentuk service cards.

---

### 7.4 Lokasi
- Google Maps embed
- Alamat lengkap
- Jam operasional

---

### 7.5 Kontak
- Form kontak (static)
- WhatsApp
- Email
- Social media

---

### 7.6 Article / News
- List artikel
- SEO booster
- Konten edukatif seputar laundry

---

## 8. UI / UX Pattern (PENTING)

Bagian ini menjelaskan **gaya visual, prinsip desain, dan pola UI utama** yang WAJIB digunakan agar tampilan website Moagi Laundry konsisten, modern, dan sesuai referensi desain.

---

### 8.1 Style Utama (Design Foundation)

#### 🎨 Warna (Color Palette)
Website menggunakan palet warna **pastel & soft** untuk menciptakan kesan bersih dan segar.

- **Pastel Blue** → warna utama
  - Digunakan untuk: background section, icon, accent
  - Memberikan kesan: bersih, air, laundry, fresh

- **White** → warna netral
  - Digunakan untuk: background utama, whitespace
  - Memberikan kesan: rapi, profesional, modern

- **Soft Yellow** → warna aksen / CTA
  - Digunakan untuk: tombol utama, highlight text
  - Memberikan kontras lembut tanpa terasa agresif

Prinsip:
> Tidak menggunakan warna terlalu gelap atau kontras keras.

---

#### 🧼 Kesan Visual
Website harus memunculkan kesan:
- Bersih
- Profesional
- Ramah
- Modern

Implementasi:
- Banyak whitespace
- Rounded corner
- Shadow halus
- Tidak menggunakan border keras

---

#### 📱 Responsiveness (Mobile-First)
Desain dibuat dengan pendekatan **mobile-first**:
- Layout vertikal di mobile
- Grid horizontal di desktop
- Font dan tombol cukup besar untuk sentuhan jari

Breakpoint utama:
- Mobile
- Tablet
- Desktop

---

#### ✨ Animasi
Animasi bersifat **halus dan fungsional**, bukan dekoratif berlebihan.

Jenis animasi:
- Scroll reveal
- Hover animation
- Micro-interaction

Tools:
- Framer Motion

Prinsip:
> Animasi tidak boleh mengganggu konten atau memperlambat loading.

---

### 8.2 UI Pattern Utama

#### 1. Hero Section Pattern
Hero section adalah **area paling penting** di website.

Karakteristik:
- Full width
- Headline besar dan kuat (H1)
- Subheadline singkat
- CTA button kontras
- Ilustrasi / foto manusia + laundry

Tujuan:
- Menyampaikan value proposition dalam < 5 detik

---

#### 2. How It Works Pattern
Digunakan untuk menjelaskan alur layanan laundry.

Struktur:
- Step 1: Sign Up / Hubungi
- Step 2: Pickup
- Step 3: Proses Laundry
- Step 4: Delivery

Visual:
- Icon minimalis
- Title singkat
- Deskripsi 1–2 baris

Layout:
- Horizontal (desktop)
- Vertical (mobile)

---

#### 3. Card-Based Services Pattern
Digunakan untuk:
- Layanan
- Visi & Misi
- Strategi

Karakteristik card:
- Rounded corner
- Soft shadow
- Icon di atas
- Judul jelas
- Deskripsi singkat

Interaksi:
- Hover scale
- Hover shadow

---

#### 4. Wave / Curved Section Divider
Digunakan sebagai pemisah antar section.

Karakteristik:
- Menggunakan SVG
- Bentuk gelombang
- Warna soft

Manfaat:
- Menghindari kesan kaku
- Memberi flow visual yang lembut

---

#### 5. Iconography Pattern
Icon digunakan untuk mempercepat pemahaman user.

Style icon:
- Outline
- Minimalis
- Konsisten ukuran

Library:
- Lucide React
- React Icons

---

### 8.3 Micro Interaction Guidelines
Micro interaction digunakan untuk meningkatkan pengalaman user.

Contoh:
- Button hover berubah warna
- Card sedikit membesar saat hover
- Icon animasi ringan

Prinsip:
> Micro interaction harus terasa natural dan intuitif.

---

## 9. SEO Requirements


### On-Page SEO
- Title unik tiap halaman
- Meta description
- Heading hierarchy (H1-H3)
- Alt text pada image

---

### Content SEO
- Artikel edukatif
- Keyword terkait laundry
- Internal linking

---

## 10. Non-Functional Requirements
- Fast loading
- Mobile-first
- Cross-browser compatible
- Maintainable code

---

## 11. Success Metrics
- Website tampil modern & profesional
- Mudah dipahami user
- SEO-ready
- Siap dikembangkan lebih lanjut

---

## 12. Future Enhancement (Optional)
- CMS integration
- Booking system
- Online payment
- Admin dashboard

---

## 13. Conclusion
Website ini dirancang sebagai **modern company profile** yang:
- Menjual kepercayaan
- Menjual kualitas
- Menjadi wajah digital Moagi Laundry

Dokumen ini menjadi **single source of truth** untuk pengembangan frontend Moagi Laundry.

