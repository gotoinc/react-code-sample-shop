import React from 'react';
import axios from 'axios';
import './scss/index.scss';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

// function App() {
//   // const [pizzas, setPizzas] = React.useState([]);
//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       setPizzas(data.pizzas);
//     });
//   }, []);
//   return (
//
//   );
// }
class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      // setPizzas(data.pizzas);
      console.log(data.pizzas);
    });
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home items={[]} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    );
  }
}
export default App;
