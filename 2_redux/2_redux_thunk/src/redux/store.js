import { createStore, combineReducers, applyMiddleware } from 'redux';
import productReducer from './reducers/productReducer';
import basketReducer from './reducers/basketReducer';
import { thunk } from 'redux-thunk';

// reducer'ları birleştir
const rootReducer = combineReducers({
  products: productReducer,
  basket: basketReducer,
});

// store'u oluşturup export ettik
// applyMiddlware fonksiyonu bir arayızılımı redux'a dahil etmeye yarar
//  thunk arayazılımını redux'a dahil ettik
export default createStore(rootReducer, applyMiddleware(thunk));
