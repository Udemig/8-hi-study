import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { ActionTypes } from '../redux/actionTypes/actionTypes';
import { addTodo } from '../redux/actions/todoActions';
import axios from 'axios';

const AddForm = () => {
  // dispacth kurulum
  const dispatch = useDispatch();

  // form gönderilince
  const handleSubmit = (e) => {
    // 1) sayfanın yenilenmesini engelle
    e.preventDefault();

    // 2) store'a kaydedilecek veriyi hazırla
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };

    // 3) veriyi api'a gönder
    axios
      .post('/todos', newTodo)
      // 4) reducer'a aksiyonu ilet
      .then(() => dispatch(addTodo(newTodo)));

    // 5) formu temizle
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        className="form-control"
        placeholder="örn: typescript projesi yap"
        type="text"
      />

      <button className="btn btn-warning">Gönder</button>
    </form>
  );
};

export default AddForm;
