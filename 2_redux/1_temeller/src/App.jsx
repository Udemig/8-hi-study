import { useEffect } from 'react';
import AddForm from './components/AddForm';
import ListTodos from './components/ListTodos';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setTodos } from './redux/actions/todoActions';

axios.defaults.baseURL = 'http://localhost:3050';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // api'dan todo verilerini al
    axios
      .get('/todos')
      //  ve store'a aktar
      .then((res) => dispatch(setTodos(res.data)));
  }, []);

  return (
    <div className="vh-100">
      <div className="container p-5">
        <h2 className="text-center">
          REDUX <span className="text-warning">CRUD</span>
        </h2>

        <AddForm />
        <ListTodos />
      </div>
    </div>
  );
};

export default App;
