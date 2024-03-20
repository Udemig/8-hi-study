import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate, Navigate } from 'react-router-dom';
import { auth } from '../firebase/config';

const ProtectedRoute = () => {
  // kullanıcn yetkisi var mı? statei
  const [isAuth, setIsAuth] = useState();

  useEffect(() => {
    // onAuthStateChanged > kulalnıc oturmunun değişimini izler (açılma kapanma)
    const unsub = onAuthStateChanged(auth, (user) => {
      // eğer oturum açtıysa yetkiyi true'ya kapttıysa false'a çekiyoruz
      setIsAuth(user ? true : false);
    });

    return () => unsub();
  }, []);

  // eğer yetkisi yoksa logine yönlendir
  if (isAuth === false) {
    // useNavigate kullanınca bileşen tam yüklenemden yönlendirme yapmamızdan kaynkalı react uyarı veriyordu bizde useNavigate yerine Navigate bileşeni kullandık. Bunu kullanınca browser router bileşenin yüklenem işlemini tamamlmış gibi allgıyo ve "to" propu oalrak tanımmdladığımız sayfaya yönlendiriyor
    return <Navigate to={'/'} />;
  }

  // kapsıyı bir route'da alt route'u çağırma
  return <Outlet />;
};

export default ProtectedRoute;
