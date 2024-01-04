/*
 ! React Bileşenleri (Component)
 * Kullanıcı arayüzü oluşturmak için kullanılan
 * temel yapı taşlarıdır. (Yapboz Parçaları)
 
 * Bileşen Oluşturma:
 * Bir tane fonksiyon oluşturuyoruz
 * Fonksiyonun ismine bileşenin ismini veriyoruz.
 * Bileşen ismi her zaman Büyük harfle başlamalı.
 * Birden fazla kelimeden oluşuyorsa her kelimenin ilk harfi büyük başlar
 
 * Bileşenler return satırında kullanıcnın göreceği arayüzü
 * döndürmek zorundadır. (JSX - Javascript XML)
 * Jsx kodu tek bir kapsayıya sahip olmalıdır
 */

function Header() {
  // Bu veri api'den gelmiş gibi düşünelim
  // Bu veriye göre ekrana basılcak butona karar verelin
  const isLogged = true;

  // api'dan gelen kullanıcı
  const userName = 'Furkan';

  return (
    <header>
      <h1>REACT</h1>

      {/* Ve operatörü ile Koşullu renderlama */}
      {userName && <b>{userName}</b>}

      {/* Terneray ile Koşullu renderlama */}
      {isLogged === true ? (
        <button style={{ background: 'red' }}>Çıkış Yap</button>
      ) : (
        <button style={{ background: 'green' }}>Giriş Yap</button>
      )}
    </header>
  );
}

// Bu bileşeni app.js'de kullanmak için export  etmeliyiz
export default Header;
