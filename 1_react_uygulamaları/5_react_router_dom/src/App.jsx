import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    // tarayıcaki url'e göre sayfalama yapmamızı sağlar
    <BrowserRouter>
      <div className="page">
        {/* Bütün sayfalar tarafından ortak olarak kullanılacak bileşnleri routes dışına yazarız */}
        <Header />

        <Routes>
          {/*
           * Route: Projedeki her sayfa için tanımlanır
           * Route'a yol ve o yol için ekrana basılcak bileşeni veririz
           */}
          <Route path="/" element={<MainPage />} />
          <Route path="/ürünler" element={<ProductsPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
