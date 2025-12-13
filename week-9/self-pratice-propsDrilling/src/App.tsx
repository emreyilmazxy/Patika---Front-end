import { useRef } from "react";

function App() {
  // 1️⃣ DOM referansı oluştur
  const inputRef = useRef<HTMLInputElement | null>(null);

  // 2️⃣ Butona basınca çalışacak fonksiyon
  const handleFocus = () => {
    // input varsa fokusla
    inputRef.current?.focus();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>useRef - Input Focus</h2>

      {/* 3️⃣ input'u ref'e bağla */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Buraya yaz..."
      />

      <br /><br />
      ,
      <button onClick={handleFocus}>
        Input'a Fokus Ver
      </button>
    </div>
  );
}

export default App;
