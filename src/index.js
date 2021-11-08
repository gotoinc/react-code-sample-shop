import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Router>
    <Switch>
      <Provider store={store}>
        <App />
      </Provider>
    </Switch>
  </Router>,
  document.getElementById('root'),
);
