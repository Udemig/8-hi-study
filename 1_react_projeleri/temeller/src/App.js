import './style.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  // Bir bileşeni kullanmak isiyorsak <Bileşenİsmi /> yazarız
  return (
    <div className="App">
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
