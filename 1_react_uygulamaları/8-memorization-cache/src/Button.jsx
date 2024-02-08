import React from 'react';

/*
 * Şuan button içeriği değişmiyecek olsa dahi
 * üst bileşen render edilidğin button bileşenide
 * gereksi yere tekrardan render oluyor(ekrana basılıyor).
 * Gerçek bir projedeki kapsamlı bir bileşen olsaydı gereksiz
 * yer render edilmesi performans sorunlarına yol açar.
 */

const Button = ({ count, updateCount }) => {
  console.log('Button render edildi');
  return <div>{count} Button</div>;
};

/*
 * React.memo, react uygulamlarında performans
 * optimizasyonu sağlamak için kullanılır.
 * Bu fonksiyon bir önceki render sonucunu hafızda tutar
 ! eğer bileşenin aldığı proplar değişmediyse
 * tekrardan render işlemi yapıp bileşeni ekran basmak yerine
 * önceki renderdan elde etttiği sonucu kullanıp gereksiz
 * hesaplamaları önler.
 */
export default React.memo(Button);

/*
 ! önemli
 * memo çalışma mantığı:
 * bileşeni render ettip ürettiği html'i hafızada tutar
 * daha sonra tekrardan render işlemi gerekli olduğunda bu 
 * bileşene daha önce render ederken almış proplarla şuan gönderilen
 * propları karşılaştırır eğerki önceki gönderilen propla
 * en son gönderilen prop aynıysa bileşeni tekrardan render etmez
 * daha önce oluşturdğu html'i kullanır ama proplar farklıysa
 * bileşeni tekrardan render edip cache'deki veriyi günceller
 * 
 * 
 * string, number,boolean gibi propLarda sorun çıkmasada
 * function prop'ları karşılaştırmada sorun yaşar
 * console.log('ahmet' === 'ahmet'); // true
 * console.log(function yap() {} === function yap() {}); // false
*/
