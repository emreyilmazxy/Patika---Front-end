# Görev Listesi

Basit bir yapılacaklar listesi uygulaması. Görev ekleme, silme, listeyi temizleme ve tarayıcı yerel depolamasına kayıt özellikleri bulunur.

## Özellikler
- Yeni görev ekleme (buton veya Enter tuşu)
- Görevleri tek tek silme
- Tüm görevleri temizleme
- Görevlerin localStorage üzerinde kalıcı olarak saklanması

## Kurulum
1. Bu klasörü yerel bilgisayarınıza indirin ya da kopyalayın.
2. `index.html` dosyasını modern bir tarayıcı ile açın.

> Not: Dosya yolları göreceli olarak ayarlandığı için bir sunucuya ihtiyaç duyulmaz.

## Kullanım
1. Metin kutusuna yeni görevinizi yazın.
2. Enter tuşuna basın veya **Ekle** butonuna tıklayın.
3. Görev kartının yanındaki **Sil** butonu ile tek tek görevleri kaldırın.
4. Tüm görevleri temizlemek için **Temizle** butonunu kullanın.

## Proje Yapısı
```
index.html
css/
  style.css
js/
  app.js
  taskService.js
img/
  Ekran görüntüsü 2025-11-12 170757.png
```

## Geliştirme
- `js/taskService.js` bileşen tabanlı bir görev servisidir.
- Sunulan fonksiyonlar görevleri DOM üzerinde yönetir ve localStorage ile senkron tutar.

## Örnek Ekran
![Görev Listesi ekran görüntüsü](./img/Ekran%20görüntüsü%202025-11-12%20170757.png)

## Katkı
1. Bu depoyu fork'layın.
2. Yeni bir dal açın (`git checkout -b ozellik/yeni-ozellik`).
3. Değişikliklerinizi yapın ve commitleyin.
4. Dalınızı gönderin (`git push origin ozellik/yeni-ozellik`).
5. Pull request oluşturun.
