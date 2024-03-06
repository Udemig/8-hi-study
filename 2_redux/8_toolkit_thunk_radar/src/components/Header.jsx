import { useSelector } from 'react-redux';

const Header = () => {
  const flightState = useSelector((store) => store.flightReducer);

  return (
    <header>
      <div>
        <img src="/plane-logo.png" />
        <h3>Uçuş Radarı</h3>
      </div>

      <p>
        {flightState.isLoading
          ? 'Uçuşlar Hesaplanıyor...'
          : flightState.isError
          ? 'Üzgünüz bir hata oluştu'
          : flightState.flights.length + ' Uçuş Bulundu'}
      </p>
    </header>
  );
};

export default Header;
