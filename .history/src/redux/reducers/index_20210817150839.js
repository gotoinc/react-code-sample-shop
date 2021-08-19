import { combineReducers } from 'redux';
import filtersReducer from './filters';
import pizzasReducer from './pizzas';
import cartReducer from './cart';
const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  cart:cartReducer,
  filtersReducer,
});

export default rootReducer;
