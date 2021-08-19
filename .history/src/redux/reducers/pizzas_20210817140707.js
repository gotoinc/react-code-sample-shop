const initialState = {
  items: [],
};
const pizzas = (state = initialState, action) => {
  action = {
    type: 'SET_PIZZAS',
    payload: 'price',
  };
  if (action.type === 'SET_PIZZAS') {
    return { ...state, sortBy: action.payload };
  }
};
export default pizzas;
