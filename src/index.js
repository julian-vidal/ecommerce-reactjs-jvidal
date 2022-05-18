import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';
import {CartContextProvider} from './store/CartContext';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBIHYb0wEHsV2MS4fLU52NasMTX-EHQFGE",
  authDomain: "ecommerce-react-js-julian.firebaseapp.com",
  projectId: "ecommerce-react-js-julian",
  storageBucket: "ecommerce-react-js-julian.appspot.com",
  messagingSenderId: "268218933197",
  appId: "1:268218933197:web:62435bc2e04659c9996e84"
};


initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


