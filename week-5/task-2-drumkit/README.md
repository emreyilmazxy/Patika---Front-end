# Drum Kit

Tarayıcı üzerinden basit bir davul seti çalmanızı sağlayan JavaScript ödevi. Klavyenizdeki belirli harflere ya da ekrandaki tuşlara tıklayarak farklı davul seslerini tetikleyebilirsiniz.

## Özellikler
- Klavyeden `A`-`L` tuşları ile farklı davul seslerini çalma
- Tuşlara tıklandığında görsel geri bildirim (aktif durum animasyonu)
- Klavye ve fare etkileşimini aynı anda destekleme
- Minimal, ödev odaklı dosya yapısı

## Kullanılan Teknolojiler
- HTML5 ile temel yapı
- CSS3 ile stil ve düzen
- Vanilla JavaScript ile ses oynatma ve etkileşim yönetimi

## Kurulum & Çalıştırma
1. Projeyi yerel bilgisayarınıza kopyalayın veya indirin.
2. `index.html` dosyasını çift tıklayarak varsayılan tarayıcınızda açın (herhangi bir derleme süreci gerekmez).
3. Tarayıcı açıkken aşağıdaki tablodaki harflere basarak ya da ekrandaki kutulara tıklayarak davul seslerini çalın.

| Klavye Tuşu | Ses |
|-------------|-----|
| A           | clap |
| S           | hihat |
| D           | kick |
| F           | openhat |
| G           | boom |
| H           | ride |
| J           | snare |
| K           | tom |
| L           | tink |

## Proje Yapısı
```
.
├── index.html
├── css
│   └── style.css
├── js
│   └── app.js
└── assets
    ├── img
    │   └── drum.png
    └── sounds
        ├── boom.wav
        ├── clap.wav
        ├── hihat.wav
        ├── kick.wav
        ├── openhat.wav
        ├── ride.wav
        ├── snare.wav
        ├── tink.wav
        └── tom.wav
```

## Notlar
- Ses dosyaları `.wav` formatındadır ve tarayıcıda sorunsuz çalışması için yerel dosya yolundan yüklenir.
- `app.js` dosyasında `keydown` ve `click` olayları dinlenerek aynı işlevi paylaşır; ek geliştirmeler için bu olay yöneticisinden faydalanabilirsiniz.
- Stil dosyasında temel bir karanlık tema kullanılmıştır; renk paletini ihtiyaçlarınıza göre güncelleyebilirsiniz.
