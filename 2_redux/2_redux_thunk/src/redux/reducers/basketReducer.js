const initialState = {
  isLoading: false,
  isError: false,
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        basket: state.basket.concat(action.payload),
      };

    case 'SET_BASKET_LOADING':
      return { ...state, isLoading: true };

    case 'SET_BASKET_ERROR':
      return { ...state, isLoading: false, isError: action.payload };

    case 'SET_BASKET_DATA':
      return {
        ...state,
        isLoading: false,
        isError: false,
        basket: action.payload,
      };

    default:
      return state;
  }
};

export default basketReducer;
