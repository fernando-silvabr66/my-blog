import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSM0kRn3qCkKw6ZjLdFIcTo1HzjU9JmL0",
  authDomain: "my-react-blog-eed7f.firebaseapp.com",
  projectId: "my-react-blog-eed7f",
  storageBucket: "my-react-blog-eed7f.appspot.com",
  messagingSenderId: "724514155602",
  appId: "1:724514155602:web:262ac54a27c68a0a8f038b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
