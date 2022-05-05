import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


