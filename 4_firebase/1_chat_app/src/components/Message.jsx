import { auth } from '../firebase/config';

const Message = ({ data }) => {
  // oturmu açık olan kullanıcnın id'si
  // mesajı atan kullanıcın id'sine eşitse >
  // sadece mesaj içeriğini bas
  if (auth.currentUser?.uid === data.author.id) {
    return <p className="msg-user">{data.text}</p>;
  }

  // eşit değilse
  // kullanıcı bilgisi + mesaj içeriğini bas
  return (
    <div className="msg-other">
      <div className="user-info">
        <img src={data.author.photo} />
        <span>{data.author.name}</span>
      </div>

      <p className="msg-text">{data.text}</p>
    </div>
  );
};

export default Message;
