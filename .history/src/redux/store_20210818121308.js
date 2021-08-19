import { createStore, combineReducers } from 'redux';
// import rootReducer from './reducers';

console.log(rootReducer);
// const store = createStore(
//   // rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
// window.store = store.getState();
const store = createStore(rootReducer);
export default store;
