# ✅ Todo App - React

Modern ve kullanıcı dostu bir yapılacaklar listesi uygulaması. TodoMVC tasarımından ilham alınarak React ve TypeScript ile geliştirilmiştir.

<p>
  <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite" alt="Vite" />
</p>

## 📋 Özellikler

- ➕ **Todo Ekleme** - Yeni görev ekleme
- ✅ **Tamamlama** - Görevleri tamamlandı olarak işaretleme
- ✏️ **Düzenleme** - Çift tıklama ile görev düzenleme
- 🗑️ **Silme** - Görevleri silme
- 🔄 **Tümünü Tamamla** - Tek tıkla tüm görevleri tamamlama
- 🔍 **Filtreleme** - All / Active / Completed filtreleri
- 🧹 **Temizleme** - Tamamlanan görevleri toplu silme
- 📊 **Sayaç** - Kalan görev sayısını gösterme

## 🚀 Kurulum

```bash
# Projeyi klonlayın
git clone <repo-url>
cd todo-app-react

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

## 📁 Proje Yapısı

```
src/
├── App.tsx                 # Ana uygulama - state yönetimi
├── App.css                 # Ana stiller
├── index.css               # Global stiller
├── types.ts                # TypeScript tipleri
└── components/
    ├── header/             # Todo ekleme formu
    │   ├── header.tsx
    │   ├── header.css
    │   └── index.ts
    ├── todo-item/          # Tekil todo öğesi
    │   ├── todo-item.tsx
    │   ├── todo-item.css
    │   └── index.ts
    ├── todo-list/          # Todo listesi
    │   ├── todo-list.tsx
    │   ├── todo-list.css
    │   └── index.ts
    ├── footer/             # Filtreler ve sayaç
    │   ├── footer.tsx
    │   ├── footer.css
    │   └── index.ts
    └── info-footer/        # Alt bilgi
        ├── info-footer.tsx
        ├── info-footer.css
        └── index.ts
```

## 🎮 Kullanım

| Eylem | Nasıl Yapılır |
|-------|---------------|
| Todo Ekle | Input'a yazıp Enter'a bas |
| Tamamla | Sol taraftaki daireye tıkla |
| Düzenle | Todo metnine çift tıkla |
| Sil | Todo üzerine gelince × butonuna tıkla |
| Tümünü Tamamla | Aşağı ok simgesine tıkla |
| Filtrele | All / Active / Completed seçeneklerinden birini tıkla |
| Temizle | "Clear completed" butonuna tıkla |

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|-----------|----------|
| React 19 | UI framework |
| TypeScript | Tip güvenliği |
| Vite | Build tool & dev server |
| ESLint | Kod kalitesi |

## 📜 Scriptler

```bash
npm run dev      # Geliştirme sunucusu
npm run build    # Production build
npm run preview  # Build önizleme
npm run lint     # Kod analizi
```

## 🎨 Bileşenler

### Header
Todo ekleme formu. Enter tuşu ile yeni görev eklenir.

### TodoItem
Tekil todo öğesi. Toggle, edit ve delete işlevleri içerir. Düzenleme modu için çift tıklama gerekir.

### TodoList
Tüm todoları listeler ve "toggle all" özelliği sunar.

### Footer
Aktif todo sayısı, filtreler ve "clear completed" butonu içerir.

## 📝 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

---

**Patika.dev** Front-end Bootcamp - Week 12
