import { useState, useEffect } from 'react';

const Paper = (prop) => {
  const [page, setPage] = useState(prop.number);
  const [name, setName] = useState('');

  //  bileşenin ekrana basılma olayını izle
  useEffect(() => {
    console.log('Bileşen ekrana basıldı');

    // ekrnadan gitme olayını izleme
    return () => {
      console.log('Bileşen ekrandan gitti');
    };
  }, []);

  // bileşenin güncellenme olayını izleme
  useEffect(() => {
    console.log('Bileşen güncellendi');
  });

  //  belirli bir state'İn değğişimi izleme
  useEffect(() => {
    console.log('Sayfa Değişti');
  }, [page]);

  return (
    <div>
      <p>Sayfa: {page}</p>
      <button onClick={() => setPage(page + 1)}>Sayfa Değiş</button>
      <br />
      <input onChange={(e) => setName(e.target.value)} />
      <div>{name}</div>
    </div>
  );
};

export default Paper;
