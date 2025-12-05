import Hello from './components/hello/hello.jsx'
import './App.css'
import Welcome from './components/welcome/welcome.jsx'
import Counter from './components/counter/counter.jsx'
import { useState } from 'react'
import UserInfo from './components/userInfo/userInfo.jsx'

function App() {
  const [name, setName] = useState('')
  const [savedName, setSavedName] = useState('')

  const handleSave = () => {
    setSavedName(name);
  };


  return (
    <>
      <Hello />
      <Welcome name="Emre" />
      <Welcome name="ahmet" />
      <Welcome name="keke" />
      <Counter />
      <div>
        <input type="text" placeholder='isim yaz' value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleSave}>Kaydet</button>
        <p>Kaydedilen isim: {savedName}</p>

        <UserInfo name={savedName} />
      </div>
    </>
  )
}

export default App
