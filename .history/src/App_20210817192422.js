import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './scss/index.scss';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

import store from './redux/store';

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
class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      // setPizzas(data.pizzas);
      window.store = store;
      window.store.dispatch(setPizzasAction(data.pizzas));
    });
  }

  render() {
    console.log(this.props.item);
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route
            path="/"
            render={() => <Home items={this.props.items} />}
            exact
          />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sohranitPizi: (items) => dispatch(setPizzasAction),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
