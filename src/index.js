import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDSM0kRn3qCkKw6ZjLdFIcTo1HzjU9JmL0",
  authDomain: "my-react-blog-eed7f.firebaseapp.com",
  projectId: "my-react-blog-eed7f",
  storageBucket: "my-react-blog-eed7f.appspot.com",
  messagingSenderId: "724514155602",
  appId: "1:724514155602:web:d53e51469384e5518f038b"
};

const application = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
