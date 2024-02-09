/*
 ! reducer
 * store'un nasıl değiceğine karar verir
 * reducer normal bir fonksiyondur.
 * iki parametre alır.
 * > state: store'da tutulan verinin son durmunu
 * > action: verilerin nasıl değieceğine belirten obje.
 
 * state tanımsız oldğu zmaan redux hata veriri
 * bu hatanın önüne geçmek için state' bi rbaşlangıç değeri
 * vermeliyiz bu başlangıç değeri biz state'i güncelleyen kadar aktif olur. 

 ? önemli: reducer fonksiyonundan return edilen veri store'un son hali olur. 
*/

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // yeni todoyu eksilerin arasına ekle
      const tempTodos = state.todos.concat(action.payload);

      // state'i güncelle
      return {
        todos: tempTodos,
      };

    case 'DELETE_TODO':
      return state;

    default:
      return state;
  }
};

export default todoReducer;
