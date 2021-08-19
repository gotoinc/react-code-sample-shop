import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers';
const rootReducer = combineReducers({ });
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
window.store = store.getState();
export default store;
