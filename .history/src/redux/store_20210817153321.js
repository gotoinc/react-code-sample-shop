import { createStore } from 'redux';
import rootReducer from './reducers';
const store = createStore(rootReducer);
window.store = store.getState();
export default store;
