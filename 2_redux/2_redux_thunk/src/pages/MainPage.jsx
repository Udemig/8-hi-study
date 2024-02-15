import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './../components/Loader';
import {
  setError,
  setLoading,
  setProducts,
} from '../redux/actions/productActions';

const MainPage = () => {
  // store'a abone ol
  const store = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // 1) isteğin başladığını store'a bildir
    dispatch(setLoading());

    axios
      .get('http://localhost:3040/products')
      // 2) İsteğin başarılı olduğunu store'a bildir
      .then((res) => dispatch(setProducts(res.data)))
      // 3) İsteğin başarısız olduğunu store'a bildir
      .catch((err) => dispatch(setError(err.message)));
  }, []);

  return (
    <div className="container p-5">
      {/* veriler yükleniyorsa */}
      {store.isLoading && <Loader />}

      {/* hata oluştuysa ekrana bas */}
      {store.isError && (
        <h1 className="text-center my-5">{store.isError}</h1>
      )}

      {/* veriler geldiyse ekrana bas */}
      {store?.products.map((item) => (
        <h3>{item.title}</h3>
      ))}
    </div>
  );
};

export default MainPage;
