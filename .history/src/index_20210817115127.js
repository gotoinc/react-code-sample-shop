import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';

console.log(store.getState());

const inc = () => {
  store.dispatch({
    type: 'ДОБАВИТЬ',
  });
};
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <button>+1</button>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
