import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import Scoops from '.';
import userEvent from '@testing-library/user-event';

/*
 ! Seçiciler > 3 ana parçadan oluşur

 ? Method [All] BySeçici
 * method > get | find | query
 * get > başlangıçta dom'da olan elementleri almak için kullanlır | elementi bulamazsa test failler
 * query > get ile benzer çalışır | element bulunamazsa null döndürür ve test devam eder 
 * find > elementin ne zaman ekrana basılacağı belli değilse kullanılır (api isteklerinde)
 
 * not: find methodu promise döndürür
 * bu yüzden async awail ile kullanılmalı
 
 * eğer methoda all eklersek seçicinin koşuluna uyan bütün elementleri alır
 * all kullanırsak her zaman dizi şeklinde cevap alırız
*/

test("API'dan gelen verriler için ekrana kartlar basılır", async () => {
  render(<Scoops />);

  // ekrana basılan resimleri al
  const images = await screen.findAllByAltText('çeşit-resim');

  // gelen resimlerin satısı 1 den büyük veya eşit mi
  expect(images.length).toBeGreaterThanOrEqual(1);
});

test('Çeşitlerin ekleme ve sıfırlama işlemleri çalışır', async () => {
  // usereventin kurulumu
  const user = userEvent.setup();

  // bileşeni ekrana bas
  render(<Scoops />);

  // bütün ekleme ve sıfırlama butonlarını çağır
  const addButtons = await screen.findAllByRole('button', { name: /ekle/i });

  const delButtons = await screen.findAllByRole('button', { name: /sıfırla/i });

  // toplam fiyat elementini çağır
  const total = screen.getByTestId('total');

  // toplam fiyatı 0 mı kontrol et
  expect(total.textContent).toBe('0');

  // ekle butonlarından birine tıkla
  await user.click(addButtons[0]);

  // toplam fiyatın 20 mı kontrol et
  expect(total.textContent).toBe('20');

  // ekle butonlarından birine 2 kez tıkla
  await user.dblClick(addButtons[2]);

  // toplam fiyatı 60 mı kontrol et
  expect(total.textContent).toBe('60');

  // ilk ekleneni kaldır
  await user.click(delButtons[0]);

  // toplam fiyatı 40 mı kontrol et
  expect(total.textContent).toBe('40');

  // son eklenini kaldır
  await user.click(delButtons[2]);

  // toplam fiyatı 0 mı kontrol et
  expect(total.textContent).toBe('0');
});
