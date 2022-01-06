import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app'
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyDJrPBoAox7Qa0W5E8az2vi6fHtxDFc-1A",
  authDomain: "mateando-ando-cardozo.firebaseapp.com",
  projectId: "mateando-ando-cardozo",
  storageBucket: "mateando-ando-cardozo.appspot.com",
  messagingSenderId: "840608593366",
  appId: "1:840608593366:web:9872870ee3ae79096ea077"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
