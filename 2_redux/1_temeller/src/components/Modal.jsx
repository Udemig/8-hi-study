import { useDispatch } from 'react-redux';
import { ActionTypes } from '../redux/actionTypes/actionTypes';
import { updateTodo } from '../redux/actions/todoActions';
import axios from 'axios';

const Modal = ({ close, todo }) => {
  const dispatch = useDispatch();

  // form gönderilince tetiklenir
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1) inputtaki değeri al
    const text = e.target[1].value;

    // 2) todo nesnesinin title değerine yeni değeri ata
    const updated = { ...todo, text: text };

    // 3) api'ı güncelle
    axios
      .patch(`/todos/${updated.id}`, { text })
      // 4) store'u güncelle
      .then(() => dispatch(updateTodo(updated)));

    // 5) modal'î kapat
    close();
  };

  return (
    <div className="modal d-block bg-black bg-opacity-50 text-dark">
      <div className="modal-dialog modal-dialog-centered">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Todo'yu Güncelle</h1>
            <button
              onClick={close}
              type="button"
              className="btn-close"
            ></button>
          </div>

          <div className="modal-body">
            <label>Yeni Başlık</label>
            <input
              defaultValue={todo.text}
              className="form-control shadow mt-2"
              type="text"
            />
          </div>

          <div className="modal-footer">
            <button
              onClick={close}
              type="button"
              className="btn btn-secondary"
            >
              İptal
            </button>
            <button type="submit" className="btn btn-primary">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
