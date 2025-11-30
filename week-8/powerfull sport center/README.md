# 💪 Powerfull Sport Center

Modern ve responsive bir fitness/spor salonu web sitesi. Vite, TypeScript ve SCSS kullanılarak geliştirilmiştir.

🔗 **[Live Demo](https://fluffy-bienenstitch-12c316.netlify.app/)**

<p>
  <img src="https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Sass-1.94.2-CC6699?style=flat-square&logo=sass&logoColor=white" alt="Sass" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
</p>

<p>
  <a href="https://fluffy-bienenstitch-12c316.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/🚀_Live_Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Live Demo" />
  </a>
</p>

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Demo](https://fluffy-bienenstitch-12c316.netlify.app/)
- [Kurulum](#-kurulum)
- [Proje Yapısı](#-proje-yapısı)
- [Teknolojiler](#-teknolojiler)
- [Responsive Tasarım](#-responsive-tasarım)
- [Katkıda Bulunma](#-katkıda-bulunma)
- [Lisans](#-lisans)

## ✨ Özellikler

- 🎨 **Modern UI/UX** - Temiz ve profesyonel tasarım
- 📱 **Tam Responsive** - Mobil, tablet ve masaüstü uyumlu
- ⚡ **Hızlı Performans** - Vite ile optimize edilmiş build
- 🎯 **BEM Metodolojisi** - Düzenli ve sürdürülebilir CSS yapısı
- 🔧 **SCSS 7-1 Mimarisi** - Modüler ve ölçeklenebilir stil yapısı
- 🖼️ **Smooth Animasyonlar** - Hover efektleri ve geçişler
- 📊 **BMI Hesaplayıcı** - Interaktif vücut kitle indeksi hesaplama
- 🗺️ **Google Maps Entegrasyonu** - Konum haritası

## 🌐 Bölümler

| Bölüm | Açıklama |
|-------|----------|
| **Navbar** | Fixed pozisyonlu, scroll'da arka plan değişen navigasyon |
| **Hero** | Ana karşılama bölümü, CTA butonları |
| **Stats** | İstatistik sayaçları (Kurslar, Antrenmanlar, Çalışma Saatleri, Mutlu Müşteriler) |
| **Classes** | Yoga, Group, Solo, Stretching kategorileri ile dinamik içerik |
| **BMI Calculator** | Boy/kilo girişi ile BMI hesaplama |
| **Trainers** | Eğitmen kartları, hover animasyonları |
| **Products** | Ürün kartları, sepete ekleme butonu |
| **Reviews** | Müşteri yorumları/testimonials |
| **Contact** | İletişim formu ve Google Maps |
| **Footer** | Logo, açıklama ve link grupları |

## 🚀 Kurulum

### Gereksinimler

- Node.js (v18+)
- npm veya yarn

### Adımlar

```bash
# Repoyu klonlayın
git clone https://github.com/emreyilmazxy/Patika---Front-end.git

# Proje dizinine gidin
cd "week-8/powerfull sport center"

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Production build
npm run build

# Build önizleme
npm run preview
```

## 📁 Proje Yapısı

```
powerfull-sport-center/
├── index.html
├── package.json
├── tsconfig.json
├── public/
│   └── vite.svg
└── src/
    ├── main.ts
    ├── style.scss
    ├── assets/
    │   └── images/
    │       ├── logo.png
    │       ├── hero-man.jpg
    │       ├── yoga.jpg
    │       ├── trainer1-3.jpg
    │       ├── purchase1-4.jpg
    │       ├── client1-2.jpg
    │       └── bmi-index.jpg
    ├── scss/
    │   ├── base/
    │   │   ├── _index.scss
    │   │   ├── _reset.scss
    │   │   └── _typography.scss
    │   ├── components/
    │   │   ├── _index.scss
    │   │   ├── _buttons.scss
    │   │   └── _cards.scss
    │   ├── layout/
    │   │   ├── _index.scss
    │   │   ├── _navbar.scss
    │   │   └── _footer.scss
    │   ├── sections/
    │   │   ├── _index.scss
    │   │   ├── _hero.scss
    │   │   ├── _about.scss
    │   │   ├── _classes.scss (programs)
    │   │   ├── _pricing.scss (bmi)
    │   │   ├── _trainers.scss
    │   │   ├── _gallery.scss (products)
    │   │   ├── _testimonials.scss (reviews)
    │   │   └── _contact.scss
    │   └── utils/
    │       ├── _index.scss
    │       ├── _variables.scss
    │       ├── _mixins.scss
    │       └── _helpers.scss
    └── ts/
        ├── navbar.ts
        ├── hero.ts
        ├── about.ts
        ├── programs.ts
        ├── pricing.ts
        ├── trainers.ts
        ├── gallery.ts
        ├── testimonials.ts
        ├── contact.ts
        └── footer.ts
```

## 🛠️ Teknolojiler

### Build & Development
- **[Vite](https://vitejs.dev/)** - Hızlı frontend build aracı
- **[TypeScript](https://www.typescriptlang.org/)** - Tip güvenliği ile JavaScript
- **[Sass/SCSS](https://sass-lang.com/)** - CSS preprocessor

### CSS Metodolojisi
- **BEM (Block Element Modifier)** - Naming convention
- **7-1 Pattern** - SCSS dosya organizasyonu
- **Mobile-First** - Responsive tasarım yaklaşımı

### Tasarım Sistemi

| Token | Değer |
|-------|-------|
| Primary Color | `#355494` |
| Secondary Color | `#F49A11` |
| Font Family | Inter, sans-serif |
| Mobile Breakpoint | 576px |
| Transition | 300ms ease-in-out |

## 📱 Responsive Tasarım

> ⚠️ **Not:** Bu proje sadece **Desktop** ve **Mobile (576px)** görünümleri için tasarlanmıştır. Tablet boyutları için ayrı bir breakpoint bulunmamaktadır.

### Desteklenen Görünümler

| Görünüm | Genişlik |
|---------|----------|
| Desktop | > 576px |
| Mobile | ≤ 576px |

### Mobil Özellikler

- ✅ Hamburger menü
- ✅ Full-width görseller (full-bleed tekniği)
- ✅ Yeniden düzenlenmiş grid layoutlar
- ✅ Touch-friendly buton boyutları
- ✅ Optimize edilmiş tipografi

## 🎨 Renk Paleti

```scss
// Primary
$color-primary: #355494;
$color-primary-dark: #324e86;
$color-primary-light: #8295BD;

// Secondary
$color-secondary: #F49A11;

// Neutrals
$color-light: #F1F8FF;
$color-white: #FFFFFF;
$color-gray-400: #F6F6F6;
$color-gray-900: #27282E;

// Text
$text-primary: #464646;
$text-secondary: #666666;
```

## 📜 Scripts

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Build önizleme
npm run preview
```

## 🤝 Katkıda Bulunma

1. Fork'layın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit'leyin (`git commit -m 'Add amazing feature'`)
4. Push'layın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👤 Geliştirici

**Emre Yılmaz**

- GitHub: [@emreyilmazxy](https://github.com/emreyilmazxy)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
