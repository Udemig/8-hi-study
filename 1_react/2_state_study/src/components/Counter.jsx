import { useState } from 'react';

const Counter = () => {
  // useState'i bileşen içerisnde deiğişimi arayüzü etkileyicek
  // olan değerleri tutmak için kullanırız
  // useState() çağıdırğımız zman dizi içersinde iki değer döndürür
  // 1.değer: tuttuğumuz veri
  // 2.değer: tututğummuz veriyi değiştirmeye yarayan fonksiyon
  const [count, setCount] = useState(0);

  // sayacın değerini değişken olarak tuttuk
  // değişken çözüm olmadı
  // let count = 0;

  return (
    <div className="counter">
      <h1>Sayaç</h1>

      <div>
        <button onClick={() => setCount(0)}>Sıfırla</button>

        <button
          disabled={count === 0 && true}
          onClick={() => setCount(count - 1)}
        >
          Eksi
        </button>

        <span>{count}</span>

        <button
          onClick={() => {
            // state'te tutulan veriyi 1 arttır
            setCount(count + 1);
          }}
        >
          Artı
        </button>
      </div>
    </div>
  );
};

export default Counter;
