import { ActionTypes } from '../actionTypes';

const initialState = {
  popularMovies: [],
  isLoading: false,
  isError: false,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.MOVIES_LOADING:
      return { ...state, isLoading: true };

    case ActionTypes.MOVIES_ERROR:
      return { ...state, isLoading: false, isError: action.payload };

    case ActionTypes.MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        popularMovies: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
