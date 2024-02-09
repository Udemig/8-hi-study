// başlangıç değeri
export const initialState = {
  todos: [],
  isDarkMode: true,
};

// reducer fonksiyonu
export const reducer = (state, action) => {
  switch (action.type) {
    case 'EKLE':
      // state'in önceki değerinden bir veri kaybetmeden
      // actionun payload'ı ile gelen todoyu diğer
      // _todoların arasına ekle
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };

    case 'KALDIR':
      // önceki state'deki bütün veierleri tut
      // action'ın payloadı ile aldığımız id'li
      // elemanlı diziden kaldır
      const filtred = state.todos.filter(
        (item) => item.id !== action.payload
      );

      // state'in son halini belirle
      return {
        ...state,
        todos: filtred,
      };

    case 'TEMİZLE':
      return {
        ...state,
        todos: [],
      };

    case 'MOD_DEĞİŞ':
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
};
