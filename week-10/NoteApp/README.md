<div align="center">
  <h1>📝 NoteApp</h1>
  <p><strong>React ile geliştirilmiş modern ve şık bir not alma uygulaması</strong></p>
  
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</div>

---

## 📖 Hakkında

NoteApp, kullanıcıların hızlı ve kolay bir şekilde not almasını sağlayan modern bir web uygulamasıdır. Renkli notlar oluşturabilir, arayabilir ve silebilirsiniz.

## ✨ Özellikler

| Özellik | Açıklama |
|---------|----------|
| 📝 **Not Ekleme** | Yeni notlar oluşturun |
| 🎨 **Renk Seçimi** | Notlarınıza farklı renkler atayın |
| 🔍 **Arama** | Notlarınız arasında anlık arama yapın |
| 🗑️ **Silme** | İstemediğiniz notları silin |


## 🚀 Kurulum

### Gereksinimler

- Node.js (v18 veya üzeri)
- npm veya yarn

### Adımlar

```bash
# Repoyu klonlayın
git clone https://github.com/username/noteapp.git

# Proje dizinine gidin
cd noteapp

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Uygulama varsayılan olarak `http://localhost:5173` adresinde çalışacaktır.

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── headerSearch/
│   │   ├── headerSearch.tsx    # Başlık ve arama bileşeni
│   │   ├── headerSearch.css
│   │   └── index.ts
│   ├── NoteForm/
│   │   ├── noteForm.tsx        # Not ekleme formu
│   │   ├── noteForm.css
│   │   ├── index.ts
│   │   └── colorPicker/
│   │       ├── colorButton.tsx # Renk seçici bileşeni
│   │       ├── colorButton.css
│   │       └── index.ts
│   └── noteList/
│       ├── noteList.tsx        # Not listesi
│       ├── nodeList.css
│       ├── index.ts
│       └── noteItem/
│           ├── noteItem.tsx    # Tek not kartı
│           ├── noteItem.css
│           └── index.ts
├── App.tsx                     # Ana uygulama bileşeni
├── App.css
└── main.tsx                    # Uygulama giriş noktası
```

## 🧩 Bileşenler

### `<Header />`
Uygulama başlığı ve arama input'u içerir. Kullanıcı yazdıkça notları filtreler.

### `<NoteForm />`
Yeni not ekleme formu. Metin girişi ve renk seçici içerir.

### `<ColorButton />`
Renk paletini görüntüler ve kullanıcının renk seçmesini sağlar.

### `<NoteList />`
Tüm notları grid düzeninde listeler.

### `<NoteItem />`
Tek bir not kartını görüntüler. Silme butonu içerir.

## 🎨 Renk Seçenekleri

Notlarınız için kullanılabilir renkler:
- 🔴 Kırmızı
- 🟢 Yeşil
- 🔵 Mavi
- 🟡 Sarı
- 🟣 Mor

## 📜 Scriptler

| Script | Açıklama |
|--------|----------|
| `npm run dev` | Geliştirme sunucusunu başlatır |
| `npm run build` | Prodüksiyon için build alır |
| `npm run preview` | Build'i önizler |
| `npm run lint` | ESLint ile kod kontrolü |

## 🛠️ Teknolojiler

- **React 18** - UI kütüphanesi
- **TypeScript** - Tip güvenliği
- **Vite** - Build tool ve dev server
- **CSS3** - Styling

## 🔄 Veri Akışı

```
App.tsx (State Yönetimi)
├── notes[] ─────────────────► NoteList ──► NoteItem
├── searchQuery ─────────────► Header
│
├── handleAddNote() ◄──────── NoteForm
├── handleDeleteNote() ◄───── NoteItem
└── handleSearch() ◄───────── Header
```

## 🤝 Katkıda Bulunma

1. Bu repoyu fork edin
2. Feature branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

<div align="center">
  <p>⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!</p>
  <p>Made with ❤️ using React & TypeScript</p>
</div>
