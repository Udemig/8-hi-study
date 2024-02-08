import { useReducer } from 'react';
import reducer from './reducers/counterReducer';

const initialState = {
  count: 0,
};

const Counter = () => {
  /*
  ! useReducer:
  * state yönetimi useState ile birlikte
  * yönetmesi zor olduğu durumlarda kullanılır.
  ? bize döndürdüğü değerler
  * count >>  state'in güncel hali
  * dispatch >> state'i güncellemek için verdiğimiz emirleri reducer'a aktaran method
  ? bizden istediği argümanlar
  * reducer >>  state'in nasıl değiceğine karar veren fonksiyon (karar mekanizması)
  * initialState >> tutucağımız veilerin ilk değeri
  */
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="d-flex gap-4 align-items-center">
      <button onClick={() => dispatch('SIFIRLA')} className="bg-info">
        Sıfırla
      </button>

      <button onClick={() => dispatch('AZALT')} className="bg-danger">
        Azalt
      </button>

      <span className="lead">{state.count}</span>

      <button
        onClick={() => dispatch('ARTTIR')}
        className="bg-success"
      >
        Arttır
      </button>
    </div>
  );
};

export default Counter;
