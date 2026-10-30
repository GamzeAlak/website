# Dr. Gamze Alak - Personal Academic Website

<div align="center">

[![GitHub Pages Deployment](https://img.shields.io/badge/GitHub%20Pages-Live%20Website-success?style=for-the-badge&logo=github&logoColor=white)](https://gamzealak.github.io/website/)
[![Release Version](https://img.shields.io/badge/Release-v1.0.0-blue?style=for-the-badge&logo=github&logoColor=white)](https://github.com/GamzeAlak/website/releases/tag/v1.0.0)
[![Code License: MIT](https://img.shields.io/badge/Code%20License-MIT-green?style=for-the-badge)](LICENSE.md)
[![Academic Content: All Rights Reserved](https://img.shields.io/badge/Academic%20Content-All%20Rights%20Reserved-lightgrey?style=for-the-badge)](LICENSE.md)

<p align="center">
  <strong>🌐 Modern, Responsive & Multilingual Academic Portfolio and Research Portal</strong><br>
  <em>Dr. Öğr. Üyesi Gamze ALAK · Atatürk Üniversitesi · Özel Eğitim Bölümü</em>
</p>

[**Canlı Web Sitesi / Live Website**](https://gamzealak.com) • [**GitHub Pages**](https://gamzealak.github.io/website/) • [**Sürüm Notları / Release Notes**](#-sürüm-notları-v100--release-notes-v100) • [**Lisans / License**](LICENSE.md)

</div>

---

> [!NOTE]
> **Multilingual Documentation / Çok Dilli Dokümantasyon**:  
> Bu dokümantasyon **Türkçe** ve **İngilizce** dillerinde hazırlanmıştır. Diller arasında geçiş yapmak için aşağıdaki açılır panelleri (`<details>`) kullanabilirsiniz.  
> *This documentation is available in both **Turkish** and **English**. Use the collapsible toggle blocks below to switch between languages.*

---

<details open>
<summary>🇹🇷 <b>Türkçe Dokümantasyon (Varsayılan - Genişletmek/Daraltmak için Tıklayın)</b></summary>

<br>

## 📌 Proje Hakkında

Bu proje, Atatürk Üniversitesi Kazım Karabekir Eğitim Fakültesi Özel Eğitim Bölümü öğretim üyesi **Dr. Öğr. Üyesi Gamze ALAK**'ın kişisel akademik portfolyosu ve araştırma merkezidir. 

Site, Dr. Gamze Alak'ın akademik kariyerini, yürüttüğü ulusal ve uluslararası araştırma projelerini, telif ve çeviri kitap çalışmalarını, hakemli yayınlarını, verdiği lisans/lisansüstü dersleri ve uluslararası sertifikasyonlarını kapsamlı ve etkileşimli bir biçimde sunmak üzere tasarlanmıştır.

### 🔬 Başlıca Araştırma Alanları ve Projeler
- **Otizm Spektrum Bozukluğu (OSB)**: Erken tanı, eğitsel değerlendirme, damgalamayı önleyici akran eğitimi programları.
- **Uygulamalı Davranış Analizi (UDA)** & **RUBI Autism Network**: Uluslararası sertifikalı klinisyen/eğitici unvanıyla ebeveyn ve uzman eğitimleri.
- **Sosyal İletişim ve Dil Gelişimi**: Söz öncesi iletişim, DATA modeli, erken çocuklukta özel eğitim müdahaleleri.
- **Öne Çıkan Projeler**:
  - **ODKAEP** (*TÜBİTAK 3005 - Proje No: 122G245*): Otizm Spektrum Bozukluğu Damgalama Karşıtı Akran Eğitimi Programı (Proje Yürütücüsü).
  - **ÖZREDEP** (*TÜBİTAK 1002*): ADDIE Öğretim Tasarımı ile Rehber Öğretmen Adaylarına Yönelik Web Tabanlı Öğretim Modülü (Proje Yürütücüsü).
  - **IAS2026**: Uluslararası Otizm Sempozyumu (Uluslararası Etkinlik ve BAP Yürütücülüğü).

### 🌟 Öne Çıkan Platform Özellikleri
- **21 Farklı Dil Desteği (i18n)**: Türkçe (`tr`), İngilizce (`en`), Almanca (`de`), Fransızca (`fr`), Çince (`zh`), Rusça (`ru`), İspanyolca (`es`), Arapça (`ar`), Japonca (`ja`) dahil olmak üzere 21 dilde anında istemci taraflı yerelleştirme.
- **Karanlık / Aydınlık Tema**: Sistem tercihini (OS theme) otomatik algılayan, `localStorage` ile kalıcı hale getirilen modern koyu/açık mod geçişi.
- **Etkileşimli Yayın ve Kitap Modalleri**: Kitap bölümleri, makale özetleri, DOI bağlantıları ve sertifika belgeleri için hızlı önizleme modalleri.
- **Yüksek Performans & Erişilebilirlik**: Harici ağır JavaScript kütüphaneleri olmadan, saf ve optimize kod mimarisiyle 100/100 performans hedefi.

---

## 🛠️ Kullanılan Teknolojiler

Proje, herhangi bir ağır framework veya derleme adımı gerektirmeden maksimum performans, sıfır bağımlılık ve yüksek sürdürülebilirlik sunan saf web standartlarıyla inşa edilmiştir:

| Katman | Teknoloji / Kütüphane | Açıklama |
| :--- | :--- | :--- |
| **İşaretleme & Semantik** | **HTML5** | W3C ve WAI-ARIA standartlarına tam uyumlu semantik yapı. |
| **Stil ve Tasarım** | **CSS3 (Modern Variables & Grid)** | Özel tasarım sistemi, CSS custom properties, responsive grid ve cam efektleri (glassmorphism). |
| **Etkileşim & Dinamizm** | **Vanilla JavaScript (ES6+)** | Modüler, hafif ve derleme gerektirmeyen reaktif istemci betikleri. |
| **Çok Dilli Altyapı** | **Custom i18n Localization Engine** | `locales/*.js` üzerinden harici kütüphanesiz, anlık reaktif dil çevirisi ve URL rota uyumu. |
| **Tipografi & Vektörler** | **Google Fonts & SVG** | IBM Plex Sans, IBM Plex Serif, Playfair Display ve inline optimize SVG simgeleri. |
| **Dağıtım & Yönlendirme** | **Multi-Host Configuration** | GitHub Pages, Vercel (`vercel.json`), Netlify (`_redirects`) ve Apache (`.htaccess`). |

---

## 💻 Yerel Geliştirme ve Önizleme

Projeyi yerel bilgisayarınızda çalıştırmak için herhangi bir paket yöneticisi (`npm`, `yarn`, `pnpm` vb.) kurmanıza gerek yoktur.

### 1. Depoyu Klonlayın
```bash
git clone https://github.com/GamzeAlak/website.git
cd website
```

### 2. Yerel Sunucu Başlatın
Dinamik i18n dil dosyalarının ve SVG ikonlarının CORS/file protokolü kısıtlamalarına takılmadan sorunsuz yüklenmesi için statik bir yerel HTTP sunucusu önerilir:

- **Python 3 ile:**
  ```bash
  python -m http.server 8000
  ```
- **Node.js (npx) ile:**
  ```bash
  npx serve .
  # veya
  npx http-server -p 8000
  ```
- **VS Code Live Server ile:**
  VS Code'da `index.html` dosyasına sağ tıklayıp **"Open with Live Server"** seçeneğini kullanabilirsiniz.
- **PHP ile:**
  ```bash
  php -S localhost:8000
  ```

Tarayıcınızda `http://localhost:8000` adresine giderek siteyi anında test edebilirsiniz.

---

## 🚀 Dağıtım ve Özel Alan Adı Yapılandırması (GitHub Pages)

### GitHub Pages Kurulumu
1. GitHub üzerinde deponuzun **Settings** sekmesine gidin.
2. Sol menüden **Pages** bölümünü seçin.
3. **Build and deployment** > **Source** alanını **"Deploy from a branch"** olarak ayarlayın.
4. **Branch** olarak `main` ve kök dizini (`/root`) seçip **Save** butonuna tıklayın.
5. Birkaç dakika içinde siteniz `https://gamzealak.github.io/website/` adresinde yayına girecektir.

### Özel Alan Adı Kurulumu (`gamzealak.com`)
1. **GitHub Pages Ayarları**:
   - **Custom domain** kutusuna `gamzealak.com` yazıp **Save** butonuna basın (bu işlem otomatik olarak bir `CNAME` kaydı oluşturur/günceller).
2. **DNS Sağlayıcı (Domain Registrar) Ayarları**:
   - Alan adınızın DNS yönetim panelinde kök alan adı (`@`) için aşağıdaki 4 adet GitHub Pages **A Kaydı**nı ekleyin:
     ```text
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - `www` alt alanı için bir **CNAME Kaydı** tanımlayın:
     ```text
     Host: www
     Type: CNAME
     Target / Value: gamzealak.github.io
     ```
3. **HTTPS Zorunluluğu**:
   - DNS yayılımı (propagation) tamamlandıktan sonra GitHub Pages panelinde **"Enforce HTTPS"** seçeneğini aktif hale getirin.

---

## 📦 Sürüm Notları (`v1.0.0`)

**Sürüm:** `v1.0.0` (İlk Kararlı Canlı Sürüm - *Initial Production Release*)  
**Çıkış Tarihi:** 2026

- ✅ **Akademik Portfolyo Lansmanı**: Hakkımda, Akademik Kariyer, Eğitim, Kitaplar, Projeler, Yayınlar ve Dersler bölümlerinin eksiksiz entegrasyonu.
- ✅ **21 Dilli Çoklu Dil Motoru**: Türkçe, İngilizce, Almanca, Fransızca, Rusça, Çince, İspanyolca ve Arapça dahil 21 dilde anlık dil değiştirme ve URL yönlendirme yeteneği.
- ✅ **Karanlık / Aydınlık Mod Desteği**: Kullanıcı ve işletim sistemi tercihlerini hatırlayan pürüzsüz tema geçişleri.
- ✅ **Etkileşimli Araştırma ve Proje Vitrini**: ODKAEP, ÖZREDEP ve IAS2026 projelerine yönelik detay sayfaları ve modaller.
- ✅ **Uluslararası Sertifikasyon Entegrasyonu**: RUBI Autism Network sertifikası ve doğrulanabilir belge görüntüleyicisi.
- ✅ **Çoklu Platform Dağıtım Desteği**: GitHub Pages, Netlify (`_redirects`), Vercel (`vercel.json`) ve Apache (`.htaccess`) kuralları.

---

## 📄 Lisans ve Telif Hakkı Bildirimi

Bu proje, teknik kaynak kodları ile akademik içerikleri birbirinden ayıran **çift katmanlı (split-licensing)** lisanslama modeline tabidir:

1. **Kaynak Kodları (Source Code)**:  
   Tüm HTML, CSS, JavaScript mimarisi ve altyapı kodları **[MIT Lisansı](LICENSE.md)** kapsamında açık kaynaklıdır. Kodu inceleyebilir, çatallayabilir (fork) ve referans vererek portfolyo projelerinizde kullanabilirsiniz.
   *(Copyright © 2026 Bilgin Eren Karademir)*

2. **Akademik İçerik, Medya ve Marka (Academic Content & Media)**:  
   Bu sitede yer alan tüm biyografik metinler, makale ve kitap bölümleri, araştırma verileri, ders içerikleri, fotoğraflar ve kişisel medya öğeleri **Dr. Öğr. Üyesi Gamze ALAK**'a aittir ve **Tüm Hakları Saklıdır (All Rights Reserved)**. Dr. Gamze Alak'ın önceden yazılı izni olmaksızın kısmen veya tamamen kopyalanamaz, çoğaltılamaz, dağıtılamaz veya ticari amaçla kullanılamaz.
   *(Copyright © 2026 Dr. Gamze ALAK. All rights reserved.)*

Ayrıntılı bilgi için [LICENSE.md](LICENSE.md) belgesini inceleyebilirsiniz.

</details>

---

<details>
<summary>🇬🇧 <b>English Documentation (Click to Expand / Collapse)</b></summary>

<br>

## 📌 About the Project

This repository hosts the official personal academic website and research portal of **Asst. Prof. Dr. Gamze ALAK**, faculty member at Atatürk University, Kazım Karabekir Faculty of Education, Department of Special Education.

The website serves as an interactive portfolio highlighting Dr. Gamze Alak's academic background, research projects (funded by TÜBİTAK and scientific research funds), authored and translated books, peer-reviewed publications, university courses, and international clinical certifications.

### 🔬 Core Research Domains & Flagship Projects
- **Autism Spectrum Disorder (ASD)**: Early intervention, educational assessment, peer-mediated anti-stigma school programs.
- **Applied Behavior Analysis (ABA)** & **RUBI Autism Network**: Certified international clinician and parent trainer for behavioral challenges.
- **Social Communication & Early Language**: Prelinguistic communication, DATA model preschool interventions, and inclusive education.
- **Key Research Projects**:
  - **ODKAEP** (*TÜBİTAK 3005 - Project No: 122G245*): Development of Anti-Stigma Peer Training Program for Autism Spectrum Disorder (Lead Principal Investigator).
  - **ÖZREDEP** (*TÜBİTAK 1002*): Web-Based ADDIE Instructional Module for Preservice Counselors Supporting Students with Special Needs (Lead Principal Investigator).
  - **IAS2026**: International Autism Symposium 2026 (Event Coordinator & BAP Investigator).

### 🌟 Key Platform Features
- **Native 21-Language Localization (i18n)**: Seamless client-side dynamic switching across 21 languages (Turkish, English, German, French, Chinese, Russian, Spanish, Arabic, Japanese, etc.) without external libraries.
- **Adaptive Dark / Light Themes**: Theme switcher honoring operating system preferences (`prefers-color-scheme`) and persisted through `localStorage`.
- **Interactive Publications & Modal Previews**: Quick inspection modals for peer-reviewed papers, book chapters, DOI links, and official certificates.
- **Zero-Dependency Ultra-Fast Architecture**: Built with lightweight native web standards for sub-second loading speeds and 100/100 Lighthouse performance scores.

---

## 🛠️ Tech Stack / Built With

The project is intentionally developed without heavy JavaScript frameworks or complicated build steps to maximize speed, accessibility, and long-term maintainability:

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Markup & Semantics** | **HTML5** | Semantic, accessible structure fully aligned with W3C and WAI-ARIA guidelines. |
| **Styling & Design System** | **CSS3 (Custom Properties & Grid)** | Modern CSS variables, responsive flexbox/grid layouts, and glassmorphic aesthetics. |
| **Interactivity & Logic** | **Vanilla JavaScript (ES6+)** | Lightweight, modular client-side logic without heavy framework runtimes. |
| **Localization (i18n)** | **Custom Lightweight i18n Engine** | Modular dictionary files (`locales/*.js`) enabling instant translation and URL route consistency. |
| **Typography & Assets** | **Google Fonts & SVG** | IBM Plex Sans, IBM Plex Serif, Playfair Display, and hand-crafted vector icons. |
| **Hosting & Routing Configs** | **Multi-Platform Deployment** | GitHub Pages, Vercel (`vercel.json`), Netlify (`_redirects`), and Apache (`.htaccess`). |

---

## 💻 Local Development & Preview Instructions

No build tools or package managers (`npm`, `yarn`, `pnpm`) are required to run or preview this project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/GamzeAlak/website.git
cd website
```

### 2. Launch a Local Development Server
To ensure that modular localization scripts (`locales/*.js`) and SVG icons load without browser CORS/file protocol restrictions, launch any simple HTTP server:

- **Using Python 3:**
  ```bash
  python -m http.server 8000
  ```
- **Using Node.js (npx):**
  ```bash
  npx serve .
  # or
  npx http-server -p 8000
  ```
- **Using VS Code Live Server:**
  Right-click `index.html` inside VS Code and choose **"Open with Live Server"**.
- **Using PHP:**
  ```bash
  php -S localhost:8000
  ```

Open your browser and navigate to `http://localhost:8000` to preview the site.

---

## 🚀 Deployment & Custom Domain Setup (GitHub Pages)

### Deploying to GitHub Pages
1. In your GitHub repository, open the **Settings** tab.
2. Select **Pages** from the navigation sidebar on the left.
3. Under **Build and deployment** > **Source**, choose **"Deploy from a branch"**.
4. Set the **Branch** to `main` with the root directory (`/root`) and click **Save**.
5. Your website will be deployed live at `https://gamzealak.github.io/website/`.

### Custom Domain Configuration (`gamzealak.com`)
1. **GitHub Pages Configuration**:
   - In the **Custom domain** field under GitHub Pages settings, enter `gamzealak.com` and click **Save** (creates/updates the `CNAME` file).
2. **DNS Registrar Configuration**:
   - At your DNS provider / registrar, add the following 4 GitHub Pages **A Records** for your apex domain (`@`):
     ```text
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add a **CNAME Record** for the `www` subdomain:
     ```text
     Host: www
     Type: CNAME
     Target / Value: gamzealak.github.io
     ```
3. **Enforce HTTPS**:
   - Once DNS propagation is complete, enable the **"Enforce HTTPS"** checkbox in repository settings.

---

## 📦 Release Notes (`v1.0.0`)

**Version:** `v1.0.0` (Initial Production Release)  
**Release Date:** 2026

- ✅ **Complete Academic Portfolio**: Launched sections covering About Me, Academic Career, Education, Books, Research Projects, Publications, and Courses.
- ✅ **21-Language i18n Engine**: Dynamic client-side language switching supporting Turkish, English, German, French, Russian, Chinese, Spanish, Arabic, and more.
- ✅ **Adaptive Dark / Light Themes**: Automatic system preference detection with persistent manual toggle.
- ✅ **Research & Project Showcase**: Dedicated interactive overviews and modaller for ODKAEP, ÖZREDEP, and IAS2026.
- ✅ **International Certification Integration**: Verified RUBI Autism Network clinician credential and downloadable certificate modal.
- ✅ **Multi-Platform Hosting Configurations**: Preconfigured route rewrites for GitHub Pages, Netlify (`_redirects`), Vercel (`vercel.json`), and Apache (`.htaccess`).

---

## 📄 License & Copyright Notice

This project operates under a **split-licensing model** that separates software code from academic intellectual property:

1. **Source Code (MIT License)**:  
   All website source code (HTML structure, CSS styles, JavaScript logic, and build configs) is released under the **[MIT License](LICENSE.md)**. You are free to inspect, fork, and adapt the technical implementation for your own personal portfolio projects with appropriate attribution.  
   *(Copyright © 2026 Bilgin Eren Karademir)*

2. **Academic Content, Media & Branding (All Rights Reserved)**:  
   All biographical texts, research summaries, publication listings, course materials, photographs, book covers, and personal media published on this website are the copyrighted intellectual property of **Dr. Gamze ALAK** and are protected under international copyright law. No part of this content may be copied, reproduced, redistributed, mirrored, or utilized for commercial purposes without prior written permission from Dr. Gamze Alak.  
   *(Copyright © 2026 Dr. Gamze ALAK. All rights reserved.)*

For complete legal terms, please review [LICENSE.md](LICENSE.md).

</details>

---

<div align="center">
  <sub>Designed & Developed with modern web standards for <strong>Dr. Gamze ALAK</strong> · Atatürk University</sub>
</div>
