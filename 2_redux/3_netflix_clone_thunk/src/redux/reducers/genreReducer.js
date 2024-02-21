import { ActionTypes } from '../actionTypes';

const initialState = {
  genres: [],
  isLoading: false,
  isError: false,
};

const genreReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GENRES_LOADING:
      return { ...state, isLoading: true };

    case ActionTypes.GENRES_ERROR:
      return { ...state, isLoading: false, isError: payload };

    case ActionTypes.GENRES_SUCCESS:
      return { ...state, isLoading: false, isError: false, genres: payload };

    default:
      return state;
  }
};

export default genreReducer;
