# Optional Forms

Modern görünümlü bir iletişim formu ile JSONPlaceholder API'sine sahte istek gönderimi gösteren basit bir JavaScript uygulaması.

## Özellikler
- Form doğrulama: İsim ve e-posta alanlarının boş bırakılmasını engeller.
- Fetch API kullanımı: Girilen verileri JSONPlaceholder servisinde test amaçlı saklar.
- Estetik arayüz: CSS ile ortalanmış ve gölgelendirilmiş form tasarımı.

## Kurulum
1. Depoyu indirin veya kopyalayın.
2. Kaynak dosyaları bir HTTP sunucusu (örn. VS Code Live Server) üzerinden yayınlayın.

## Kullanım
1. Tarayıcıda `index.html` dosyasını açın.
2. Formu doldurup **Submit** butonuna basın.
3. Başarılı gönderimlerde tarayıcı konsolundan JSON yanıtını inceleyin.

## Geliştirme Notları
- Form gönderimi `js/app.js` içindeki `submitData` fonksiyonu ile kontrol edilir.
- Hata durumlarında kullanıcı bilgilendirilir, konsoldan ayrıntılar görülebilir.
- Arayüz üzerinde düzenleme yapmak için `index.html` içindeki gömülü stilleri güncelleyin.
