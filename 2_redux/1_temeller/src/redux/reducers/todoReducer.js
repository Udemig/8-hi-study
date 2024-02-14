import { ActionTypes } from '../actionTypes/actionTypes';

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
    // type'ı add_todo olan aksiyon tetiklenirse
    case ActionTypes.ADD:
      // yeni todoyu eksilerin arasına ekle
      const tempTodos = state.todos.concat(action.payload);

      // state'i güncelle
      return {
        todos: tempTodos,
      };

    // type'ı delete olan aksiyon tetiklenirse
    case ActionTypes.DELETE:
      // diziden silincek olanı kaldır
      const filtred = state.todos.filter(
        (todo) => todo.id !== action.payload
      );

      // reducer'da tutulan verinin son değerini belirle
      return { todos: filtred };

    // type'ı delete olan aksiyon tetiklenirse
    case ActionTypes.UPDATE:
      //1) dizideki eski todo ile action'un payload'ı ile gelen
      // todo'yu yer değiştir
      const updated = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );

      //  reducer'da tutulan todos'u güncelle
      return { todos: updated };

    // type'ı set olan aksiyon tetiklenirse
    case ActionTypes.SET:
      return { todos: action.payload };

    // varolan state'i koru / değiştirme
    default:
      return state;
  }
};

export default todoReducer;
