import Form from '../../components/Form';
import Post from '../../components/Post';

const Main = ({ user }) => {
  return (
    <div className="border border-zinc-600 overflow-y-auto">
      <header className="font-bold p-4 border-b border-zinc-600">
        Ansayfa
      </header>

      <Form user={user} />

      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Main;
