import { combineReducers } from 'redux';
import { filters } from './filtersReducer';
import { pizzas } from './pizzasReducer';
import { cart } from './cartReducer';
const rootReducer = combineReducers({
  pizzas,
  cart,
  filters,
});

export default rootReducer;
