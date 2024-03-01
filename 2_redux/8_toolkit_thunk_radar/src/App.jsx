import { useEffect, useState } from 'react';
import Header from './components/Header';
import MapView from './pages/MapView';
import ListView from './pages/ListView';
import { useDispatch } from 'react-redux';
import { getFlights } from './redux/actions/flightActions';

const App = () => {
  // harita görünümü aktif mi?
  const [isMapView, setIsMapView] = useState(true);
  const dispatch = useDispatch();

  // uçuş veirlerini al
  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <div>
      <Header />

      <div className="view-buttons">
        <button
          onClick={() => setIsMapView(true)}
          className={isMapView ? 'active' : ''}
        >
          Harita Görünümü
        </button>
        <button
          onClick={() => setIsMapView(false)}
          className={isMapView ? '' : 'active'}
        >
          Liste Görünümü
        </button>
      </div>

      {/* hangi görünümün ekrana basılcağını belirle */}
      {isMapView ? <MapView /> : <ListView />}
    </div>
  );
};

export default App;
