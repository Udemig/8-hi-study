import { useEffect, useState } from 'react';
import ListView from './ListView';
import ListModel from './ListModel';

const ListController = () => {
  // state'ler
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // class'tan bir örnek oluşturduk
  const model = new ListModel();

  // useEffec ile kullanıcı etkileşemi izlediğimizden controller dosyasında tanımlarız
  useEffect(() => {
    model.getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <ListView
      selectedUser={selectedUser}
      setSelectedUser={setSelectedUser}
      posts={posts}
    />
  );
};

export default ListController;
