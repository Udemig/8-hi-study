import axios from 'axios';
import { useEffect } from 'react';
import { setLoading, setError, setUsers } from '../redux/slices/classicSlice';
import { useDispatch, useSelector } from 'react-redux';

const ClassicWay = () => {
  const userState = useSelector((store) => store.classicReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // yüklenme başladığını haber veriyoruz
    dispatch(setLoading());

    // api isteği at
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      // veirleri slice'a ilet
      .then((res) => dispatch(setUsers(res.data)))
      // hatayı slice'a ilet
      .catch((err) => dispatch(setError(err)));
  }, []);

  return (
    <div>
      {userState.isLoading ? (
        <h1>Yükleniyor...</h1>
      ) : userState.isError ? (
        <h1>HATA OLUŞTU</h1>
      ) : (
        userState.users.map((user) => <h1>{user.name}</h1>)
      )}
    </div>
  );
};

export default ClassicWay;
