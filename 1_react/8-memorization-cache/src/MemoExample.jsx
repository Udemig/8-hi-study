import { useState, useMemo, useEffect } from 'react';

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  /*
   * React, bileşendeki  state'de bir güncelleme olduğunda
   * güncelmeninin ekrana yansıması için bileşeni tekrar render eder
   * (ekrana bas), bileşeni tektradan çalıştırır.
   
   ! sorun: aşağıdaki hesaplama bileşen her render olduğunda 
   ! gereksiz yere tekrarlanıyor.

   ? çözüm: useMemo kullanıp yaptığımız hesaplamanın sonucunu
   ? cache'e atmak ve her render sırasında fonksiyonu çalıştırıp 
   ? yeni sonuç üretmek yerine cache'deki veriye erişirsek
   ? bu şekilde  gereksiz hesaplmaların önüne geçebiliriz.
   */

  // sayaç her değitiğinde maliyetli bir hesaplama yapalım
  useMemo(() => {
    console.log('bu fonksiyopn çalıştır');

    // 1) maliyetli işlem > 1.000.000 elemanlı dizi oluştur
    const dizi = new Array(10000000).fill('Merhaba Dünya');

    // 2) maliyetli işlem > diziyi dö be her biri için fonksiyon çalıştır
    return dizi.map((item) => item + '!');
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Sayacın Değeri: {count}
      </button>

      <br />
      <br />
      <br />

      <input onChange={(e) => setText(e.target.value)} type="text" />
      {text}
    </div>
  );
};

export default MemoExample;
