import formatDate from '../helpers/formatDate';
import getStatus from '../helpers/getStatus';
import axios from 'axios';

const ListItem = ({ todo, setTodos }) => {
  // silme butona tıklanınca çalışır
  const handleDelete = () => {
    // veriyi api'dan sil
    axios
      .delete(`/todos/${todo.id}`)
      // veriyi state'den sil
      .then(() =>
        setTodos((todos) =>
          todos.filter((item) => item.id !== todo.id)
        )
      );
  };

  return (
    <li className="relative p-3 list-group-item d-flex justify-content-between align-items-center">
      {/* getSatatus: todonun durmuna göre span döndürür */}
      {getStatus(todo.status)}

      <span>{todo.title}</span>

      <div className="btn-group">
        <button className="btn btn-sm btn-primary">Düzenle</button>
        <button
          onClick={handleDelete}
          className="btn btn-sm btn-danger"
        >
          Sil
        </button>
      </div>

      <span className="date">{formatDate(todo.date)}</span>
    </li>
  );
};

export default ListItem;
