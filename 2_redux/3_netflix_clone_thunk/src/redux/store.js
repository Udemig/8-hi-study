import movieReducer from './reducers/movieReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import genreReducer from './reducers/genreReducer';

const rootReducer = combineReducers({
  movieReducer,
  genreReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
