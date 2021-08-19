import { combineReducers } from 'redux';
import filtersReducer from '..//filters';
import pizzasReducer from '../reducers/pizzas';
// import cartReducer from './reducers/cart';
const rootReducer = combineReducers({
  pizzasReducer,
  //   cartReducer,
  filtersReducer,
});

export default rootReducer;
