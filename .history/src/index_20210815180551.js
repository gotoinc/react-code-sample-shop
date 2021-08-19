import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Route path=''>
      <App />

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
