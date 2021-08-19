import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers';
import filtersReducer from './filters';
import pizzasReducer from './pizzas';
const rootReducer = combineReducers({filtersReducer});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
window.store = store.getState();
export default store;
