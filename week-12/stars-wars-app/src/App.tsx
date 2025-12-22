import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { StarshipDetail } from './components/starship-detail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starship/:id" element={<StarshipDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
