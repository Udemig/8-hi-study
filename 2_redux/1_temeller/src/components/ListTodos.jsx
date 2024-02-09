import { useSelector } from 'react-redux';

const ListTodos = () => {
  // store'da tutulan veirye bu bileşende ihityacım oldu
  // store'da verinin tutudluğu ilgli reducer'a abone ol
  const state = useSelector((store) => store.todoReducer);

  return (
    <div>
      {state.todos.map((todo) => (
        <div>{todo.text}</div>
      ))}
    </div>
  );
};

export default ListTodos;
