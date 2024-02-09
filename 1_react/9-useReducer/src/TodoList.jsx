import { useReducer } from 'react';
import { reducer, initialState } from './reducers/todoReducer';

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    // inputtaki yazıya erişme
    const text = e.target[0].value;

    // kaydedilecek objeyi hazırla
    const newTodo = {
      id: new Date().getTime(),
      title: text,
    };

    // veriyi reducer'daki state'e kayder
    // Artık action'lar birer obje olucak
    // type değeri görevi tanımlar
    // payload değeri veriyi tanımlar
    dispatch({
      type: 'EKLE',
      payload: newTodo,
    });

    // formdaki bütün inputları sıfırlar
    e.target.reset();
  };

  return (
    <div
      className={
        state.isDarkMode ? 'bg-dark text-white' : 'bg-white text-dark'
      }
      style={{ width: '100vw', height: '100vh', padding: '20px' }}
    >
      <div className="d-flex justify-content-center py-5">
        <button onClick={() => dispatch({ type: 'MOD_DEĞİŞ' })}>
          Mod Değiştir
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="d-flex gap-3 align-items-center"
      >
        <input className="form-control" />
        <button>Gönder</button>
        <button
          onClick={() =>
            dispatch({
              type: 'TEMİZLE',
            })
          }
          type="button"
        >
          Temizle
        </button>
      </form>

      <ul className="list-group my-5">
        {state.todos.map((todo) => (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>{todo.title}</span>
            <button
              onClick={() =>
                dispatch({
                  type: 'KALDIR',
                  payload: todo.id,
                })
              }
              className="bg-danger"
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
