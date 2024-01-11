import { useEffect, useState } from 'react';

const CountPage = () => {
  const [number, setNumber] = useState(10);

  useEffect(() => {
    // her saniye bir fonksiyon çalıştırmak
    const counter = setInterval(() => {
      console.log(number);
      setNumber((prev) => (prev !== 0 ? prev - 1 : 0));
    }, 1000);

    // bileşen ekrandan igdince sayacı temizle
    return () => clearInterval(counter);
  }, []);

  const handleClick = () => {
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
    // state kullanımında state'İn son değerine eirşmek istiyosak
    // setMethoduna argüman olarak bir fonksiyon veriririz
    // verdiğimiz bu fonksiyon parametre olarak state'in son değerini alır
    // State'i değiştiriken en son değerine erişmek istiyosak bu yöntemi kullanırız
    setNumber((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <h1>
      <button onClick={handleClick}>Arttır</button>
      {number}
    </h1>
  );
};

export default CountPage;
