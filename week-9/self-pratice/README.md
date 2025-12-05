# React Self Practice 🚀

React temellerini pekiştirmek için oluşturulmuş pratik projesi.

## 📚 Öğrenilen Konular

| Konu | Açıklama |
|------|----------|
| **Components** | Fonksiyonel bileşen oluşturma |
| **Props** | Bileşenler arası veri aktarımı |
| **useState** | State yönetimi ve güncelleme |
| **Event Handling** | onClick, onChange olayları |
| **Controlled Inputs** | Form elemanları kontrolü |

## 🧩 Bileşenler

### `Hello`
Basit "Hello, World!" mesajı gösteren bileşen.

### `Welcome`
Props ile isim alıp hoş geldin mesajı gösteren bileşen.
```jsx
<Welcome name="Emre" />
```

### `Counter`
useState ile sayaç uygulaması.
- State ile sayı tutma
- Butona tıklayınca artırma

### `UserInfo`
Kaydedilen kullanıcı ismini gösteren bileşen.
- Parent'tan props ile veri alma

## 🛠️ Teknolojiler

- React 19
- Vite 7
- ESLint

## 📂 Proje Yapısı

```
src/
├── components/
│   ├── hello/
│   │   └── hello.jsx
│   ├── welcome/
│   │   └── welcome.jsx
│   ├── counter/
│   │   └── counter.jsx
│   └── userInfo/
│       └── userInfo.jsx
├── App.jsx
└── main.jsx
```

## 🚀 Kurulum

```bash
npm install
npm run dev
```

## 📝 Notlar

- Props ile veri aktarımı tek yönlüdür (parent → child)
- useState hook'u bileşene state ekler
- Controlled input: value ve onChange birlikte kullanılır

