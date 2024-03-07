import { useEffect, useState } from 'react';
import PopupView from './PopupView';
import PopupModel from './PopupModel';

const PopupController = ({ user, close }) => {
  // gönderileri view'a gönderebilmek için state'de tutucaz
  const [userPosts, setUserPosts] = useState([]);

  // model'den bir örnek oluştur
  const model = new PopupModel();

  // pencere açıldığında kullanıcının gönderilerini alır
  useEffect(() => {
    model.getUserPosts(user).then((data) => setUserPosts(data));
  }, []);

  return <PopupView userPosts={userPosts} user={user} close={close} />;
};

export default PopupController;
