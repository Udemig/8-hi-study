import movieReducer from './reducers/movieReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  movieReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
