import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/qw" component={H} />
      {/* <App /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
