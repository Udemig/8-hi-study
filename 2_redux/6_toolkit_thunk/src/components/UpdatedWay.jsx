import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions';
import { useEffect } from 'react';

const UpdatedWay = () => {
  const userState = useSelector((store) => store.updatedReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
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

export default UpdatedWay;
