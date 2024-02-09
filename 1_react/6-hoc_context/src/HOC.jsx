import { useState } from 'react';
import Modal from './components/Modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(null);

  const close = () => {
    setIsOpen(null);
  };

  return (
    <div className="d-flex flex-column gap-5">
      <h1>Anasayfa</h1>

      <h1>Kategoriler</h1>

      <a href="/"> Elktronik </a>
      <a href="/"> Giyim </a>
      <a href="/"> Teknooloji </a>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Consequatur repudiandae accusamus, ipsum consectetur delectus
        quam est fugiat atque id vel corporis suscipit eveniet quasi
        minus aperiam blanditiis pariatur nihil necessitatibus facilis
        reiciendis ducimus sed dignissimos nisi ea. Eligendi voluptas
        facilis iusto, est quos et debitis porro blanditiis omnis
        delectus vel!
      </p>

      <button
        onClick={() => setIsOpen('login')}
        className="btn btn-dark"
      >
        Giriş Yap
      </button>
      <button
        onClick={() => setIsOpen('mode')}
        className="btn btn-dark"
      >
        Koyu Mod
      </button>
      <button
        onClick={() => setIsOpen('warn')}
        className="btn btn-dark"
      >
        Uyarı
      </button>

      {isOpen === 'login' ? (
        <Modal close={close}>
          <input type="text" />
          <input type="text" />
        </Modal>
      ) : isOpen === 'warn' ? (
        <Modal close={close}>
          <h3>Silmek sitedğiniz emin misniz?</h3>
        </Modal>
      ) : isOpen === 'mode' ? (
        <Modal close={close}>
          <label>KOYU MOD</label>
          <input type="checkbox" />
        </Modal>
      ) : (
        ''
      )}

      {/* Nodaml Bileşen kullanımı */}
      {/* <Modal /> */}

      {/* HOC Bileşen kullanımı */}

      {/* <Modal>
        <label>Yeni Şifre</label>
        <input type="text" />
      </Modal> */}
    </div>
  );
};

export default App;
