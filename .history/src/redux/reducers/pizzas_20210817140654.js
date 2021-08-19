const initialState = {
  items: [],
};
const filters = (state = initialState, action) => {
  action = {
    type: 'SET_PIZZAS',
    payload: 'price',
  };
  if (action.type === 'SET_PIZZAS') {
    return { ...state, sortBy: action.payload };
  }
};
export default pixx;
