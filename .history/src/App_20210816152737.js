import React from 'react';
import axios from 'axios';
import './scss/index.scss';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
function App() {
  const [pizzas, setPizzas] = React.useState([]);
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then((resp) => {
      console.log(resp);
    });
    fetch('http://localhost:3000/db.json')
    
      .then((resp) => resp.json() )
      
      .then((json) => setPizzas(json.pizzas));
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route
          path="/"
          render={() => <Home items={pizzas} />}
          // component={Home}
          exact
        />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
