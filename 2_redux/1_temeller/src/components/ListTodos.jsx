import { useSelector } from 'react-redux';
import TodoCard from './TodoCard';

const ListTodos = () => {
  // store'da tutulan veirye bu bileşende ihityacım oldu
  // store'da verinin tutudluğu ilgli reducer'a abone ol
  const state = useSelector((store) => store.todoReducer);

  return (
    <div>
      {state.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTodos;
