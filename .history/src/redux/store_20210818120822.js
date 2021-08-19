import { createStore, combineReducers } from 'redux';
// import rootReducer from './reducers';
import filtersReducer from './reducers/filters';
import pizzasReducer from './reducers/pizzas';
const rootReducer = combineReducers({ filtersReducer, pizzasReducer });
// const store = createStore(
//   // rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
// window.store = store.getState();
const store = createStore(rootReducer);
export default store;
