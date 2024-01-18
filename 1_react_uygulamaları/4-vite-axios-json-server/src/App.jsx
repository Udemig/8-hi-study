import { useEffect, useState } from 'react';
import Form from './components/Form';
import Loader from './components/Loader';
import ListItem from './components/ListItem';
import axios from 'axios';

// varsayılan olarak baseUrl ekle
// yapılan bütün isteklerin başındaki api url'İni belirle
axios.defaults.baseURL = `http://localhost:3030`;

function App() {
  const [todos, setTodos] = useState(null);

  // bileşen ekrana basılma olayını izler
  useEffect(() => {
    // api'da todo verilerini alır
    axios
      .get('/todos', {
        timeout: 3000,
        timeoutErrorMessage: 'zaman aşımı',
      })
      .then((res) => setTodos(res.data))
      .catch((err) => {
        console.log(err);
        if (err.message === 'zaman aşımı') {
          alert('istek zaman aşımına uğradı');
        }
      });
  }, []);

  return (
    <div className="container p-5">
      <h2 className="text-center">
        Server <span className="text-warning">CRUD</span>
      </h2>

      <Form setTodos={setTodos} />

      <ul className="list-group">
        {/* veriler yoksa loader bas */}
        {!todos && <Loader />}

        {/* optional chaining ?. */}
        {todos?.map((todo) => (
          <ListItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
}

export default App;
