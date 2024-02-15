const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: true };

    case 'SET_ERROR':
      return { ...state, isLoading: false, isError: action.payload };

    case 'SET_PRODUCTS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
