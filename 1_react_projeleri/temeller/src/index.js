import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// App bileşne yazığımız kodların html'in hangi kısmına ekrana basıcağını belirler
const root = ReactDOM.createRoot(document.getElementById('root'));

// App bilşenini root alnına aktarır
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
