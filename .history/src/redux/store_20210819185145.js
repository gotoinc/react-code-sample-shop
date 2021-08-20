import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
// const store = createStore(rootReducer);
window.store = store;

export default store;
