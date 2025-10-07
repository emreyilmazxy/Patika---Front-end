# İstanbul Şehir Rehberi - Çoklu Sayfa Web Sitesi

Bu proje, **Patika+ Front-End Bootcamp** programının üçüncü ödevi olan çoklu sayfa web sitesi görevini kapsamaktadır. HTML5 yapısı kullanarak 4 sayfalık basit bir rehber sitesi geliştirilmiştir.

## 📋 Proje Hakkında

İstanbul Şehir Rehberi, ziyaretçilere şehrin turistik yerlerini, hizmetlerini ve iletişim bilgilerini sunan basit bir rehber web sitesidir. Çoklu sayfa navigasyonu ve temel HTML elementleri kullanılarak oluşturulmuştur.

## 🎯 Ödev Gereksinimleri

Proje aşağıdaki ödev gereksinimlerini karşılamaktadır:

### ✅ 1. Genel Yapı
- **Ana sayfa**: `index.html`
- **Üç alt sayfa**: `hakkinda.html`, `servisler.html`, `iletisim.html`
- HTML5 doküman yapısı (`<!DOCTYPE html>`)
- `<head>` içinde `<title>` ve `<meta charset="UTF-8">`

### ✅ 2. Navigasyon Menüsü
- Her sayfada tutarlı navigasyon menüsü
- **4 bağlantı**: Ana Sayfa, Hakkında, Servisler, İletişim
- CSS hover efektleri ile etkileşimli menü

### ✅ 3. Ana Sayfa (index.html)
- Ana başlık (`<h1>`): "İstanbul Şehir Rehberi"
- **Tanıtım metni**: 2 paragraf
- **Görsel**: Lorem Picsum'dan placeholder image
- **Sırasız liste**: Popüler kategoriler (5 madde)

### ✅ 4. Hakkında Sayfası (hakkinda.html)
- Şirket hakkında bilgi (`<h2>` ve paragraflar)
- **Sıralı liste**: Tarihçe (5 madde - 2020'den 2024'e)
- Kurumsal hikaye ve vizyon

### ✅ 5. Servisler Sayfası (servisler.html)
- **3 Hizmet** için başlık (`<h2>`) ve açıklama:
  1. Yer Rehberi
  2. Etkinlik Takvimi
  3. Yerel Lezzet Rehberi
- **Sırasız liste**: Sunulan özellikler (6 madde)

### ✅ 6. İletişim Sayfası (iletisim.html)
- İletişim bilgileri (`<h2>` ve paragraf)
- **Sırasız liste**: Adres, telefon, e-posta, çalışma saatleri
- **İletişim formu**: Ad, e-posta, mesaj alanları

## 📁 Proje Yapısı

```
Task 3- rehber-site/
├── index.html          # Ana sayfa
├── hakkinda.html       # Hakkında sayfası
├── servisler.html      # Servisler sayfası
├── iletisim.html       # İletişim sayfası
└── README.md           # Bu dosya
```

## 🛠️ Kullanılan Teknolojiler

- **HTML5**: Semantic markup ve form elementleri
- **CSS3**: Inline CSS ile temel styling
- **Lorem Picsum**: Placeholder görseller

## 🎨 Tasarım Özellikleri

### Basit CSS Stilleri
- **Font**: Arial, sans-serif
- **Navigation**: Açık gri arka plan (#f0f0f0)
- **Hover**: Mavi renk efekti (#0066cc)
- **Responsive**: Görseller için max-width: 100%

### Sayfa Düzeni
- **Margin**: 20px genel boşluk
- **Navigation**: Her sayfada tutarlı menü
- **Typography**: Başlıklar ve paragraflar ile hiyerarşi

## 📝 Sayfa İçerikleri

### 🏠 Ana Sayfa
- İstanbul rehberi tanıtımı
- Şehir keşfi motivasyonu
- 600x300 placeholder görsel
- Popüler kategoriler listesi

### ℹ️ Hakkında Sayfası
- 2020 kuruluş hikayesi
- Ekip ve vizyon açıklaması
- 5 yıllık gelişim tarihçesi

### 🛎️ Servisler Sayfası
- 3 ana hizmet kategorisi
- Her hizmet için detaylı açıklama
- 6 özellik listesi

### 📞 İletişim Sayfası
- Beyoğlu adres bilgisi
- Telefon ve e-posta
- Basit iletişim formu (3 alan)

## 🔧 Form Özellikleri

### İletişim Formu
- **Ad alanı**: Text input (required)
- **E-posta**: Email input (required)  
- **Mesaj**: Textarea (5 satır, required)
- **Gönder butonu**: Mavi arka plan

## 🚀 Nasıl Çalıştırılır

1. Herhangi bir sayfa dosyasını tarayıcıda açın
2. Navigasyon menüsü ile sayfalar arası geçiş yapın
3. İletişim formu doldurulabilir (backend yok)

## 📚 Öğrenilen Konular

### HTML Temelleri
- Çoklu sayfa yapısı ve navigasyon
- Form elementleri (input, textarea, button)
- Semantic HTML (nav, section yapısı)
- Liste türleri (ul, ol) kullanımı

### CSS Temelleri
- Inline CSS styling
- Hover pseudo-selectors
- Responsive image techniques
- Form styling basics

### Web Sitesi Yapısı
- Sayfa içi tutarlılık
- Navigation menu tasarımı
- İçerik organizasyonu
- Kullanıcı deneyimi temelleri

## 🎯 Hedef Kazanımlar

- [x] HTML5 çoklu sayfa yapısı
- [x] Navigasyon menüsü oluşturma
- [x] Form elementleri kullanımı
- [x] Liste yapıları (ul, ol)
- [x] Temel CSS styling
- [x] Sayfa içi tutarlılık

## 📋 Ödev Kontrol Listesi

- ✅ 4 sayfa oluşturuldu (ana + 3 alt sayfa)
- ✅ Her sayfada navigasyon menüsü var
- ✅ Ana sayfada h1, paragraflar, görsel ve liste
- ✅ Hakkında sayfasında sıralı liste
- ✅ Servisler sayfasında hizmet açıklamaları
- ✅ İletişim sayfasında form ve bilgiler
- ✅ Tüm gereksinimleri karşılıyor

---

**Proje Geliştirici**: Emre Yılmaz  
**Tarih**: Ocak 2025  
**Eğitim Programı**: Patika+ Front-End Bootcamp  
**Ödev**: Week 1 - Task 3 (Çoklu Sayfa Web Sitesi)  
**Konu**: İstanbul Şehir Rehberi
