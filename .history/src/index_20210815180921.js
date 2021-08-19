import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import moduleName from './'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={App} />
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
