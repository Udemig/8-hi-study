import './App.css';
import Counter from './components/Counter';
import Accordion from './components/Accordion';
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    // Eğerki dinamik oalrak değişecek class'ların dışarısanda sabit
    // class'larda varsa o zaman `` kullanımı yaparız
    <div className={`state-page  ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>STATE(DURUM)</h1>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? 'Açık Mod' : 'Koyu Mod'}
      </button>

      <Counter />

      <Accordion
        title="Hangi teknolojiler Kullanıldı?"
        text="Bu projeyi geliştiriken Javascript React ve SCSS kullanıldı. Bu projeyi geliştiriken Javascript React ve SCSS kullanıldı. "
      />

      <Accordion
        title="Kaç Gün sürdü?"
        text="Bu projenin yapımı 6 ay sürdü"
      />

      <Accordion
        title="Kaç kişlik bir ekip geliştirdi?"
        text="15 geşiltirici."
      />
    </div>
  );
}

export default App;
