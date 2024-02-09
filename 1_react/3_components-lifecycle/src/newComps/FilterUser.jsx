import { useEffect, useState } from 'react';
import Table from './Table';
import Loader from './Loader';

const FilterUser = () => {
  // bilşende tutlan veriler
  const [users, setUsers] = useState(null);
  const [filtredUsers, setFiltredUsers] = useState(null);

  // bileşen ekran basılma anını izle > componentDidMount
  useEffect(() => {
    // kullanıcı verilerini al
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFiltredUsers(data);
      });
  }, []);

  // form gönderilince
  const handleSubmit = (e) => {
    // yenilemeyi engelle
    e.preventDefault();

    // inputtaki yazıya eriş
    const text = e.target[0].value.toLowerCase();

    // kullancıların arasında isminde inputa yadığım yazı olanları belire
    const filtred = users.filter((user) =>
      user.name.toLowerCase().includes(text)
    );

    // filtrlenen kullanıcları state'e aktar
    setFiltredUsers(filtred);
  };

  return (
    <div>
      <form className="my-5 d-flex gap-1 p-3" onSubmit={handleSubmit}>
        <input className="form-control" type="search" />
        <button className="btn btn-primary">Ara</button>
      </form>

      {/*
       * Kullanıclar yokken Yükleniyor bas
       * Kullanıcılar geldiyse Tabloyu ekrana bas
       */}
      {!users ? <Loader /> : <Table userData={filtredUsers} />}
    </div>
  );
};

export default FilterUser;
