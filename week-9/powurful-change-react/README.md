# Powurful Sport Center - React

Modern ve responsive bir spor salonu web sitesi. Bu proje, [Powerfull Sport Center](../week-8/powerfull%20sport%20center/) projesinin React + TypeScript + Vite kullanılarak yeniden yazılmış versiyonudur.

**Teknolojiler:** React 19.2.0 | TypeScript 5.9 | Vite 7.2 | Sass 1.94

## 📋 Proje Hakkında

Bu proje, Patika Front-end Bootcamp Week-9 ödevi kapsamında geliştirilmiştir. Orijinal vanilla TypeScript projesi, React framework'üne migrate edilmiştir.

### 🔄 Orijinal Proje
- **Kaynak:** `week-8/powerfull sport center`
- **Teknoloji:** Vanilla TypeScript + Vite + SCSS
- **Yapı:** Modüler TypeScript dosyaları ve SCSS bileşenleri

### ⚛️ React Versiyonu
- **Konum:** `week-9/powurful-change-react`
- **Teknoloji:** React 19 + TypeScript + Vite + SCSS
- **Yapı:** Component-based architecture

## 🚀 Özellikler

- ⚛️ **React 19** - En güncel React sürümü
- 📱 **Tam Responsive** - Mobil, tablet ve desktop uyumlu
- 🎨 **SCSS** - Modüler ve organize stil dosyaları
- 🔤 **Material Symbols** - Modern ikon seti
- 🎯 **TypeScript** - Tip güvenli kod
- ⚡ **Vite** - Hızlı geliştirme deneyimi
- 🏗️ **Component-Based** - Yeniden kullanılabilir bileşenler

## 📦 Bileşenler

| Bileşen | Açıklama |
|---------|----------|
| `Navbar` | Sabit navigasyon çubuğu, scroll'da renk değişimi, mobil menü |
| `Hero` | Ana banner bölümü, call-to-action butonları |
| `Stats` | İstatistik kartları (üyeler, antrenörler, vb.) |
| `Classes` | Fitness sınıfları kartları |
| `Bmi` | BMI hesaplayıcı bölümü |
| `Trainers` | Antrenör profil kartları |
| `Products` | Ürün vitrin kartları |
| `Reviews` | Müşteri yorumları/testimonials |
| `Contact` | İletişim formu ve bilgileri |
| `Footer` | Alt bilgi ve sosyal medya linkleri |

## 📁 Klasör Yapısı

```
src/
├── components/
│   ├── Bmi/
│   │   ├── Bmi.tsx
│   │   └── Bmi.scss
│   ├── Classes/
│   │   ├── Classes.tsx
│   │   └── Classes.scss
│   ├── Contact/
│   │   ├── Contact.tsx
│   │   └── Contact.scss
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.scss
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── Hero.scss
│   ├── Navbar/
│   │   ├── navbar.tsx
│   │   └── navbar.scss
│   ├── Products/
│   │   ├── Products.tsx
│   │   └── Products.scss
│   ├── Reviews/
│   │   ├── Reviews.tsx
│   │   └── Reviews.scss
│   ├── Stats/
│   │   ├── Stats.tsx
│   │   └── Stats.scss
│   └── Trainers/
│       ├── Trainers.tsx
│       └── Trainers.scss
├── styles/
│   ├── base/
│   │   ├── _base.scss
│   │   ├── _reset.scss
│   │   └── _typography.scss
│   ├── components/
│   │   ├── _button.scss
│   │   ├── _card.scss
│   │   └── _section-title.scss
│   ├── utils/
│   │   ├── _helpers.scss
│   │   ├── _mixins.scss
│   │   └── _variables.scss
│   └── index.scss
├── App.tsx
├── main.tsx
└── vite-env.d.ts
public/
└── images/
    ├── hero-man.jpg
    ├── logo.png
    ├── trainer1.jpg
    ├── trainer2.jpg
    ├── trainer3.jpg
    └── ...
```

## 🛠️ Kurulum

1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/emreyilmazxy/Patika---Front-end.git
   cd week-9/powurful-change-react
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

4. **Tarayıcıda açın:**
   ```
   http://localhost:5173
   ```

## 📜 Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusunu başlatır |
| `npm run build` | Production build oluşturur |
| `npm run preview` | Production build'i önizler |
| `npm run lint` | ESLint ile kod kontrolü yapar |

## 🎨 SCSS Mimarisi

Proje, **7-1 Pattern** benzeri bir SCSS mimarisi kullanmaktadır:

- **base/** - Reset, typography, temel stiller
- **components/** - Button, card gibi yeniden kullanılabilir bileşenler
- **utils/** - Variables, mixins, helpers

### Kullanılan Mixins

```scss
@mixin flex-center { ... }
@mixin flex-between { ... }
@mixin grid-responsive($min-width, $gap) { ... }
@mixin respond-to($breakpoint) { ... }
```

## 🔧 Teknolojiler

- **React 19.2.0** - UI library
- **TypeScript 5.9** - Type safety
- **Vite 7.2** - Build tool
- **Sass 1.94** - CSS preprocessor
- **ESLint** - Code linting
- **Material Symbols Outlined** - Icon font

## 📱 Responsive Breakpoints

| Breakpoint | Boyut |
|------------|-------|
| Mobile | < 768px |
| Tablet | 768px - 1024px |
| Desktop | > 1024px |

## 🔄 Migrasyon Notları

Orijinal vanilla TypeScript projesinden React'e geçişte yapılan değişiklikler:

1. **DOM Manipülasyonu** → React State ve Hooks
2. **Event Listeners** → React Event Handlers
3. **Modüler TS dosyaları** → React Components
4. **Ayrı SCSS dosyaları** → Component-scoped SCSS
5. **index.html içeriği** → JSX components

## 👨‍💻 Geliştirici

**Emre Yılmaz**

- GitHub: [@emreyilmazxy](https://github.com/emreyilmazxy)

## 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

---

<p align="center">
  <strong>Patika Front-end Bootcamp - Week 9</strong><br>
  React Migration Project
</p>
