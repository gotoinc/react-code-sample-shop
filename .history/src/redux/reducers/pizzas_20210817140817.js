const initialState = {
  items: [],
};
const pizzas = (state = initialState, action) => {
  
  if (action.type === 'SET_PIZZAS') {
    return { ...state, sortBy: action.payload };
  }
};

action = {
    type: 'SET_PIZZAS',
    payload: 'price',
  };
export default pizzas;
