import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

console.log(store.getState());

const inc = () => {
  store.dispatch({
    type: 'ДОБАВИТЬ',
  });
};
store.subscribe(() => {
  console.log('ИЗМЕНИЛСЯ', store.getState());
});
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <button onClick={inc}>+1</button>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
