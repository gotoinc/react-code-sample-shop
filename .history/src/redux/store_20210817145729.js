import { createStore, combineReducers } from 'redux';

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'ДОБАВИТЬ':
      return { value: state.value + 1 };
    case 'ОТНЯТЬ':
      return { value: state.value - 1 };
    default:
      return state;
  }
}


const store = createStore(rootReducer);

export default store;
