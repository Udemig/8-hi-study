import Loader from '../components/Loader';

//1) Bir context yapsına abone olmamızı sağlar
import { useContext } from 'react';

//2) Abone olmak istediğimiz context'i çağır
import { ProductContext } from '../context/productContext';

const HomePage = () => {
  // Context yapısında tutlan bir veriye projedeki
  // bileşen içerisnde erişmek istiyorsak bileşnden
  // ilgili context yapısna abone oluruz
  const { products } = useContext(ProductContext);

  return (
    <div>
      {/* Veriler gelmediyse yükleniyor göster */}
      {!products && <Loader />}

      {/* Veriler geldiuse her biri için kart bas */}
      {products?.map((product) => (
        <h1>KART</h1>
      ))}
    </div>
  );
};

export default HomePage;
