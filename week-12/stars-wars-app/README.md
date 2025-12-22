# 🚀 Star Wars Starships App

SWAPI (Star Wars API) kullanarak yıldız gemilerini listeleyen, arayan ve detaylarını gösteren modern bir React uygulaması.

<p>
  <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter" alt="React Router" />
</p>

## 📋 Özellikler

- 🛸 **Yıldız Gemilerini Listele** - SWAPI'den tüm yıldız gemilerini çek
- 🔍 **Arama** - İsim veya modele göre API üzerinden arama yap
- 📄 **Detay Sayfası** - Her geminin detaylı bilgilerini görüntüle
- ➕ **Daha Fazla Yükle** - Sayfalama ile daha fazla gemi yükle
- 🎨 **Star Wars Teması** - Sarı/siyah renk paleti ve uzay efektleri
- 📱 **Responsive Tasarım** - Tüm ekran boyutlarında mükemmel görünüm

## 🎯 API Bilgileri

**API:** https://swapi.dev/

Uygulama aşağıdaki endpoint'leri kullanır:
- `GET /starships/` - Tüm yıldız gemilerini listele
- `GET /starships/?search=<query>` - Arama yap
- `GET /starships/<id>/` - Tek bir geminin detayları

## 🚀 Kurulum

```bash
# Projeyi klonlayın
git clone <repo-url>
cd stars-wars-app

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

## 📁 Proje Yapısı

```
src/
├── App.tsx                      # Ana uygulama - routing
├── App.css                      # Ana stiller
├── index.css                    # Global stiller
├── types/
│   └── index.ts                 # TypeScript tipleri
├── services/
│   └── api.ts                   # SWAPI API fonksiyonları
├── pages/
│   └── home/                    # Ana sayfa
│       ├── home.tsx
│       ├── home.css
│       └── index.ts
└── components/
    ├── header/                  # Star Wars başlık
    │   ├── header.tsx
    │   ├── header.css
    │   └── index.ts
    ├── search-bar/              # Arama çubuğu
    │   ├── search-bar.tsx
    │   ├── search-bar.css
    │   └── index.ts
    ├── starship-card/           # Gemi kartı
    │   ├── starship-card.tsx
    │   ├── starship-card.css
    │   └── index.ts
    ├── starship-list/           # Gemi listesi
    │   ├── starship-list.tsx
    │   ├── starship-list.css
    │   └── index.ts
    └── starship-detail/         # Detay sayfası
        ├── starship-detail.tsx
        ├── starship-detail.css
        └── index.ts
```

## 🎮 Kullanım

| Özellik | Açıklama |
|---------|----------|
| **Listeleme** | Ana sayfada tüm yıldız gemileri kartlar halinde listelenir |
| **Arama** | Üstteki arama çubuğuna yazarak isim veya modele göre arama yapın |
| **Detay Görüntüleme** | Herhangi bir karta tıklayarak geminin detaylarını görün |
| **Daha Fazla Yükle** | Listenin altındaki butona tıklayarak daha fazla gemi yükleyin |
| **Geri Dönme** | Detay sayfasından "← Ana Sayfa" linkine tıklayarak geri dönün |

## 📦 Detay Sayfasında Gösterilen Bilgiler

- **Ad** (name)
- **Model** (model)
- **Yolcu Sayısı** (passengers)
- **Maksimum Atmosferik Hız** (max_atmosphering_speed)
- **Üretici** (manufacturer)
- **Mürettebat** (crew)
- **Kargo Kapasitesi** (cargo_capacity)
- **Uzunluk** (length)
- **Hyperdrive Değeri** (hyperdrive_rating)
- **Sınıf** (starship_class)
- **MGLT**
- **Maliyet** (cost_in_credits)
- **Tüketim Süresi** (consumables)

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|-----------|----------|
| React 19 | UI framework |
| TypeScript | Tip güvenliği |
| Vite | Build tool & dev server |
| React Router | Sayfa yönlendirme |
| SWAPI | Star Wars API |
| ESLint | Kod kalitesi |

## 📜 Scriptler

```bash
npm run dev      # Geliştirme sunucusu
npm run build    # Production build
npm run preview  # Build önizleme
npm run lint     # Kod analizi
```

## 🎨 Tasarım Özellikleri

- **Renk Paleti:** Star Wars sarısı (#FFE81F) ve koyu uzay tonları
- **Animasyonlar:** Hover efektleri, yıldız parlamaları, yükleme spinnerları
- **Tipografi:** Modern sans-serif fontlar
- **Responsive:** Mobile-first yaklaşım
- **Scrollbar:** Özelleştirilmiş Star Wars temalı scrollbar

## 📝 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

---

**Patika.dev** Front-end Bootcamp - Week 12 | Star Wars App
