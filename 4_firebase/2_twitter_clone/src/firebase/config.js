// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBfj_lUwO3ussoAvAz4-e6hCwKyGjdbCro',
  authDomain: 'hi-twitter-ebf4b.firebaseapp.com',
  projectId: 'hi-twitter-ebf4b',
  storageBucket: 'hi-twitter-ebf4b.appspot.com',
  messagingSenderId: '301534660234',
  appId: '1:301534660234:web:d67de04966a04876a34f73',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase auth'un referansını alma
export const auth = getAuth(app);

// google sağlayıcısını kurma
export const provider = new GoogleAuthProvider();

// veritabanının referasnını alma
export const db = getFirestore(app);

// dosya yüklme alanın referansını alma
export const storage = getStorage(app);
