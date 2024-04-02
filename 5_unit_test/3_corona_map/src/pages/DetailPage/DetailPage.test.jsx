import { render, screen } from '@testing-library/react';
import DetailPage from '.';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; //ES6 modules
import { thunk } from 'redux-thunk';

// test ortamındaki store'un kurlumunu yap thunk middleware'i kullandığımız söyle
const mockStore = configureStore([thunk]);

it('yüklenme durumunda doğru yüklenme bilşenei ekrana basılır', () => {
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

it('hata durumunda doğru hata bilşenei ekrana basılır', () => {});

it('veri gelme durumunda doğru kartlar ekrana basılır', () => {});
