//* App.test.js: App bileşenin testlerinin yazıldığı dosya
//* Bir dosyanın test dosyası olduğunu anlamak için .test.js vey .test.jsx uzantısına bakmalıyız

//* Unit Test
//* Yazdığımız dinamik olan bütün react bileşenlerini test edicez.
//* Bu sayede bir kod değişikliği yapıldğı zaman.
//* yaptığımız değişiklikleri gituhba göndermeden önce her
//* şeyin doğru çalıştığından emin olmalıyız.
//* Büyük projelerde her işlevi kontrol etmek çok fazla zaman alıcağından
//* ve gözden bir şey kaçama ihtimali yüskel olduğundan
//* Unit test ile bütün bileşenler görevini yerine getiyor mu diye tek tek testlerini yazarız

import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Button from './components/Button';

// bir fonksiiyonu veya bilşeni unit testini yazmak içim test methodu kullanılır
// test fonksyionu bizden 2 parametre ister:
// 1) string > testin açıklaması
// 2) fonksiyon > testin yapıldığı yer
test('ekrana içerisnde react öğren yazan link basılır', () => {
  // a) test edilecek olan bileşen test ortamında ekrana basılır
  render(<App />);

  // b) test edilecek elementi çağırma
  // tarayıcak ekrana basıyor olsaydık document.querySelector vb. methodlar kullanırdık ama unit test tarayıcada değil bilgisayarımızda çalışır bundan dolayı aynı görevi gören farklı methodları kullanıcaz (selectors)
  const linkEle = screen.getByText('React Öğren');

  // c) çağrılan elemandan beklentimizi test edicez
  expect(linkEle).toBeInTheDocument();
});

// Buton Testi
test('Buton tıklanma olayında renk ve yazı değiştirir', () => {
  //1) test edilecek olan bileşene ekrana basılır
  render(<Button />);

  //2) test edilecek buton çağırılır
  const button = screen.getByRole('button');

  //3) butonun rengi kırmızıdır
  expect(button).toHaveStyle({ background: 'red' });

  //4) butonun içinde "Maviye Çevir" yazıyordur
  expect(button).toHaveTextContent('Maviye Çevir');

  //5) butonun üzerine tıklanır
  fireEvent.click(button);

  //6) butonun rengi aqua'dır
  expect(button).toHaveStyle({ background: 'aqua' });

  //7) butonun içinde "Kırmızıya Çevir" yazıyordur
  expect(button).toHaveTextContent('Kırmızıya Çevir');
});
