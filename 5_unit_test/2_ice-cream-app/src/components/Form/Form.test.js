import { fireEvent, render, screen } from '@testing-library/react';
import Form from '.';

test('Koşulların onaylanmasına göre buton aktifliği', () => {
  //1) test edilece olan bilşeşen render edili
  render(<Form />);

  //2) gerekli elemaları çağır
  const button = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');

  //3) checkboxın tiklenmemeiş olduğunu kontrol et
  expect(checkbox).not.toBeChecked();

  //4) butonun inaktif olduğunu kontrol et
  expect(button).toBeDisabled();

  //5) checkboxa tıkla
  fireEvent.click(checkbox);

  //6) butonun aktif olduğunu kontrol et
  expect(button).toBeEnabled();

  //7) checboxa tıkla
  fireEvent.click(checkbox);

  //8) butonun inaktif olduğunu kontrol et
  expect(button).toBeDisabled();
});

test('Onay butonunun hover durumuna göre bildirim gözükür', () => {
  //1) form'u renderla
  render(<Form />);

  //2) gerekli elemanları al
  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');
  const alert = screen.getByText(/size gerçekten/i); //insensetive

  //3) checkbox'i tikle (buton aktif hale gelir)
  fireEvent.click(checkbox);

  //4) bildirim ekranda olmadığını kontrol et
  expect(alert).not.toBeVisible();

  //5) mouse'u butona getir
  fireEvent.mouseEnter(button);

  //6) bildirim ekrana geldi mi kontrol et
  expect(alert).toBeVisible();

  //7) mouse'u butondan çek
  fireEvent.mouseLeave(button);

  //8) bildirim ekrandan gitti mi kontrol et
  expect(alert).not.toBeVisible();
});
