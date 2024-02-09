import { useEffect, useState } from 'react';

const UserPage = () => {
  const [id, setId] = useState(1);
  const [user, setUser] = useState();

  // id her değiştiğinde o id'li kullanıcyı al
  useEffect(() => {
    // api'i kullanııcı içinm istek at
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      // gelen veriyi işle
      .then((res) => res.json())
      // işlenen veriyi state'e aktar
      .then((data) => setUser(data));
  }, [id]);

  console.log(user);
  //  user.name yazdığımız zaman api'den cevap gelene kadar
  // veri undefined kaldığı için undefined.name yapıyoruz
  // bu noktada react hata veriyor. bu hatanın önüne
  // koşulla birlikte geçebiliriz
  return (
    <div>
      <br />
      <br />
      <div>{user?.name}</div>
      <div>{user?.email}</div>
      <div>{user?.phone}</div>
      <br />
      <br />

      <button onClick={() => setId((prev) => prev - 1)}>
        Önceki
      </button>
      <span>{id}</span>
      <button onClick={() => setId(id + 1)}>Sonraki</button>
    </div>
  );
};

export default UserPage;
