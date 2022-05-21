import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';
import {CartContextProvider} from './store/CartContext';


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