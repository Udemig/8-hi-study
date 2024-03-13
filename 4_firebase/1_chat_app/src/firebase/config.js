// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBdg_7_lcIy2yyezymIkUfkgtI3LYTxYBo',
  authDomain: 'hi-chat-1df04.firebaseapp.com',
  projectId: 'hi-chat-1df04',
  storageBucket: 'hi-chat-1df04.appspot.com',
  messagingSenderId: '683557448174',
  appId: '1:683557448174:web:ff6ba6b760235c3f2446ff',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase'deki auth yapısnın referansını alma
export const auth = getAuth(app);

// google sağlayıcsının kurlumu
export const provider = new GoogleAuthProvider();
