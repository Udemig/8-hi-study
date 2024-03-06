import { useEffect, useState } from 'react';
import Header from './components/Header';
import MapView from './pages/MapView';
import ListView from './pages/ListView';
import { useDispatch } from 'react-redux';
import { getFlights } from './redux/actions/flightActions';
import Modal from './components/Modal';

const App = () => {
  // harita görünümü aktif mi?
  const [isMapView, setIsMapView] = useState(true);

  // detayı gösterilecek elemanın id'si
  const [detailId, setDetailId] = useState(null);

  const dispatch = useDispatch();

  // uçuş veirlerini al
  useEffect(() => {
    dispatch(getFlights());

    setInterval(() => {
      dispatch(getFlights());
    }, 10000);
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
      {isMapView ? (
        <MapView setDetailId={setDetailId} />
      ) : (
        <ListView setDetailId={setDetailId} />
      )}

      {/* detailId değeri varsa ekrana modal bas */}
      {detailId && (
        <Modal detailId={detailId} close={() => setDetailId(null)} />
      )}
    </div>
  );
};

export default App;
