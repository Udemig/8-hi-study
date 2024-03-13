import './App.css';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase/config';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState();

  // butona tıklanınca
  const handleLogin = () => {
    // google pencerisi aç
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2>
        {user ? (
          <div>
            <img src={user.photoURL} width={100} />
            <h2>{user.displayName}</h2>
          </div>
        ) : (
          <button onClick={handleLogin}>Google İle Giriş Yap</button>
        )}
      </h2>
    </>
  );
}

export default App;
