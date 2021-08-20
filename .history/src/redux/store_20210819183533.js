import { createStore,combineReducersmpose  } from 'redux';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
// const store = createStore(rootReducer);
window.store = store;

export default store;
