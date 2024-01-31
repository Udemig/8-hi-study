import {
  NavLink,
  Outlet,
  useNavigate,
  Navigate,
} from 'react-router-dom';

const CategoryPage = () => {
  //   const navigate = useNavigate();

  // örnek
  // kullanıcı giriş yapmışsa sayfayı göster
  // sadece user adminse outlet'i ekrana bas
  const user = {
    name: 'ahmet',
    type: 'user',
  };

  if (user.type !== 'admin') {
    // kullanıcı tipi admin değilse bu sayfayı gösterme
    // kullanıcyı anasayfaya yönlendir
    //? 1) hook kullanımı
    // react uyarı veriyordu
    // navigate('/');
    //? 2) bileşen kullanımı
    // return <Navigate to={'/'} replace />;
  }

  return (
    <div className="d-flex align-items-center gap-4 p-5">
      <aside className="d-flex flex-column bg-white p-5 rounded-4">
        <NavLink to={'/kategori/hikaye'}>Hikaye</NavLink>
        <NavLink to={'/kategori/roman'}>Roman</NavLink>
      </aside>

      {/*
       * ASIL SAYFA İÇERİĞİ
       * Alt route'un kapsayıcı route içerisnde
       * hangi noktada ekrana basılıcağını belirler
       */}
      <Outlet />
    </div>
  );
};

export default CategoryPage;
