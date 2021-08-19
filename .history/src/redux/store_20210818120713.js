import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers';
import filtersReducer from './filters';
import pizzasReducer from './pizzas';
const rootReducer = combineReducers({ filtersReducer, pizzasReducer });
const store = createStore(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
window.store = store.getState();
export default store;
