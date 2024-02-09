import Loader from '../components/Loader';
import Card from '../components/Card';

//1) Bir context yapsına abone olmamızı sağlar
import { useContext } from 'react';

//2) Abone olmak istediğimiz context'i çağır
import { ProductContext } from '../context/productContext';

const HomePage = () => {
  // Context yapısında tutlan bir veriye projedeki
  // bileşen içerisnde erişmek istiyorsak bileşnden
  // ilgili context yapısna abone oluruz
  const { products, category } = useContext(ProductContext);

  return (
    <div className="container">
      <h2 className="my-4">{category && category}</h2>

      <div className="d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4 my-5">
        {/* Veriler gelmediyse yükleniyor göster */}
        {!products && <Loader />}

        {/* Veriler geldiuse her biri için kart bas */}
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
