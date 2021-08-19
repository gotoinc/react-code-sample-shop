import React from 'react';
import './scss/index.scss';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
function App() {
  const [state, setstate] = React.useState([]);
  React.useEffect(() => {
    fetch('');
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
