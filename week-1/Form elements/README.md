# HTML Form Elemanları Pratiği

Bu proje, HTML form elemanlarının temel kullanımını ve çeşitli input tiplerini göstermek için oluşturulmuş kapsamlı bir form uygulamasıdır.

## 📋 Proje Açıklaması

Bu alıştırmada, HTML formlarının temel yapısı ve çeşitli form elemanlarının kullanımı pratik edilmiştir. Form, kişisel bilgi toplama amacıyla tasarlanmış ve farklı input tiplerini içermektedir.

## 🏗️ Kullanılan HTML Elemanları

### Form Yapısı
- `<form>` - Ana form container'ı
- `<fieldset>` - Form elemanlarını gruplandırma
- `<legend>` - Fieldset için başlık

### Input Elemanları
- `<input type="text">` - Metin girişi (İsim, Soyisim)
- `<input type="email">` - E-posta girişi (otomatik validasyon)
- `<input type="password">` - Şifre girişi (gizli metin)
- `<input type="radio">` - Tek seçim butonu (Cinsiyet)

### Diğer Form Elemanları
- `<select>` - Açılır liste
- `<optgroup>` - Seçenek gruplandırma
- `<option>` - Liste seçenekleri
- `<textarea>` - Çok satırlı metin alanı
- `<button>` - Gönderme butonu
- `<label>` - Etiketleme

## 📝 Form İçeriği

Form şu bilgileri toplamaktadır:

### Kişisel Bilgiler
1. **İsim** - Text input
2. **Soyisim** - Text input  
3. **E-posta** - Email input (format kontrolü)
4. **Şifre** - Password input (gizli)
5. **Cinsiyet** - Radio button (Erkek/Kadın)
6. **Favori Meyve** - Select dropdown (gruplandırılmış)
7. **Mesaj** - Textarea (yeniden boyutlandırma kapalı)

## 🎨 Stil Özellikleri

### CSS Stilleri
```css
/* Optgroup stilleme */
optgroup[label="Meyveler"] {
    color: gray;
    font-style: italic;
    font-weight: normal;
}

/* Option stilleme */
optgroup[label="Meyveler"] option {
    color: black;
    font-style: normal;
}
```

### Inline Stiller
- **Textarea**: `resize: none` - Boyutlandırma kapalı
- **Label**: `display: block` - Blok seviye görüntüleme

## 🔧 Form Özellikleri

### Input Tipleri ve Validasyon
- **Email**: Otomatik format kontrolü
- **Password**: Güvenli şifre girişi
- **Radio**: Grup halinde tek seçim
- **Required**: Zorunlu alanlar (gerekirse eklenebilir)

### Erişilebilirlik
- Tüm input'lar için `label` kullanımı
- `for` ve `id` attribute'ları ile bağlantı
- Semantic HTML yapısı

## 📁 Dosya Yapısı

```
Form elements/
├── index.html          # Ana HTML form dosyası
└── README.md           # Bu dokümantasyon dosyası
```

## 🚀 Nasıl Çalıştırılır

1. `index.html` dosyasını herhangi bir web tarayıcısında açın
2. Form alanlarını doldurun
3. "Gönder" butonuna tıklayın (şu an action tanımlı değil)

## 📚 Öğrenilen Konular

### HTML Form Temelleri
- Form elemanlarının temel kullanımı
- Input tiplerinin çeşitliliği
- Label-input ilişkilendirme
- Fieldset ve legend kullanımı

### İleri Seviye Özellikler
- Optgroup ile seçenek gruplandırma
- Radio button grup mantığı
- Textarea özelleştirme
- CSS ile form stilleme

### En İyi Pratikler
- Semantic HTML kullanımı
- Erişilebilirlik standartları
- Form validasyonu hazırlığı
- Kullanıcı deneyimi odaklı tasarım

## 🔧 Geliştirme Önerileri

### İyileştirmeler
- JavaScript ile form validasyonu
- CSS ile daha gelişmiş stillemeler
- Responsive tasarım uygulaması
- Form gönderme işlevselliği

### Ek Özellikler
- Progress bar ekleme
- Real-time validasyon
- Multi-step form yapısı
- Local storage entegrasyonu

## 🎯 Hedef Kazanımlar

- [x] Temel form elemanlarını kullanabilme
- [x] Input tiplerini ayırt edebilme
- [x] Label-input ilişkilendirme
- [x] CSS ile form stilleme
- [x] Semantic HTML yapısını anlama

---

**Not**: Bu proje Patika+ Front-end eğitimi kapsamında HTML form elemanları konusunu pekiştirmek amacıyla hazırlanmıştır.
