import { render, screen } from '@testing-library/react';
import Card from '.';
import userEvent from '@testing-library/user-event';

const item = {
  name: 'Chocolate',
  imagePath: '/images/chocolate.png',
};

// Prop olarak veirl alan bir bileşeni test ediyorsak
// Aldığı propların bezerini göndermemiz gereki
test('Miktar , başlık ve fotoğraf gelen veriye göre ekrana basılır', () => {
  render(
    <Card
      item={item}
      amount={5}
      addToBasket={() => {}}
      clearFromBasket={() => {}}
    />
  );

  // miktar spanını çağır
  const amount = screen.getByTestId('amount');

  // miktar 5 mi kontrol et
  expect(amount.textContent).toBe('5');

  // choclate yazısı ekrana basıldı mı?
  screen.getByText('Chocolate');

  // resim elementini al
  const image = screen.getByAltText('çeşit-resim');

  // src değeri "/images/chocolate.png" mi?
  expect(image).toHaveAttribute('src', item.imagePath);
});

test('Butonlara tıklanınca fonksiiyonlar doğru pametreler ile çalışır', async () => {
  const user = userEvent.setup();

  // prop olarak scoops bileşeninden gönderilen orjinal fonksiyonları göndermyiceğimizden fonksiyonlar doğru şekilde doğru zamanda doğru parmetreler ile çalışıyor mu kontrolünü yapabilmek için asıl fonksiyonu taklit eden mock fonksiyonu tanımlamak gerekir
  const addMockFn = jest.fn();
  const clearMockFn = jest.fn();

  render(
    <Card
      item={item}
      amount={3}
      addToBasket={addMockFn}
      clearFromBasket={clearMockFn}
    />
  );

  // butonları al
  const addBtn = screen.getByRole('button', { name: /ekle/i });
  const clearBtn = screen.getByRole('button', { name: /Sıfırla/i });

  // ekle butonuna tıkla
  await user.click(addBtn);

  // addToBasket fonksiyonu doğru parametreleri alarak çalıştı mı?
  expect(addMockFn).toHaveBeenCalledWith(item);

  // sıfırla butonuna tıkla
  await user.click(clearBtn);

  // clearFromBasket fonksiyonu doğru parametleri alarak çalıştı mı?
  expect(clearMockFn).toHaveBeenCalledWith('Chocolate');
});
