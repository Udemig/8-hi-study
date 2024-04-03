import { render, screen } from '@testing-library/react';
import DetailPage from '.';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; //ES6 modules
import { thunk } from 'redux-thunk';
import { storeData } from '../../constants';

// test ortamındaki store'un kurlumunu yap thunk middleware'i kullandığımız söyle
const mockStore = configureStore([thunk]);

it('yüklenme durumunda doğru bilşenler ekrana basılır', () => {
  // store'un yüklenme durumundaki halini simüle et
  const store = mockStore({
    isLoading: true,
    error: false,
    data: null,
  });

  // bileşeni gerekli kapsayıcıları tanımlayarak renderlas
  render(
    <Provider store={store}>
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>
    </Provider>
  );

  // loader ekrana geliyor mu kontrol et
  screen.getAllByTestId('card-loader');
  screen.getByTestId('header-loader');
});

it('hata durumunda doğru hata bilşeni ekrana basılır', () => {
  // store'un hata durumundaki  verisini ismüle et
  const store = mockStore({
    isLoading: false,
    error: "Cannot read properties of undefined (reading 'region')",
    data: null,
  });

  // test edielcek bileşeni renderla
  render(
    <Provider store={store}>
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>
    </Provider>
  );

  // hatanın mesajını gösteren bileşen ekrana basıldı mı ?
  screen.getByText(/Cannot read properties/i);
});

it('veri gelme durumunda doğru kartlar ekrana basılır', () => {
  const store = mockStore(storeData);

  render(
    <Provider store={store}>
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>
    </Provider>
  );

  //*1) ülke detayları ekrana geliyor mu?

  // ülke bayraği ekrana geliyor mu ?
  const image = screen.getByRole('img');

  // resmin kaynağı doğru mu?
  expect(image).toHaveProperty('src', 'https://flagcdn.com/br.svg');

  // ülke başlığı ekrana geliyor mu ?
  const title = screen.getByTestId('title');

  // başlığın içeriği doğru mu?
  expect(title).toHaveTextContent('Brazil');

  //*2) kartlar kerana geliyor mu?

  // covid nesnesini bileşnde olduğu gibi diziye çevirdik
  const covidData = Object.entries(storeData.data.covid);

  // dizideki her bir eleman için key ve value değerleri ekrana basılıyor mu kontrol et
  covidData.forEach((item) => {
    // başlıklar doğru geldi mi?
    screen.getAllByText(item[0].split('_').join(' '), { exact: false });

    // değerler doğru geldi mi?
    screen.getAllByText(item[1]);
  });
});
