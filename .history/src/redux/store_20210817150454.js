import { createStore } from 'redux';
import rootReducer from './reducers';
const store = createStore(rootReducer);
window.store 
export default store;
