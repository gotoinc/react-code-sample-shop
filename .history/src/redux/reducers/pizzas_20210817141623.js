const initialState = {
  items: [],
  isLoaded: 
};
const pizzas = (state = initialState, action) => {
  if (action.type === 'SET_PIZZAS') {
    return { ...state, sortBy: action.payload };
  }
  return state;
};

// action = {
//     type: 'SET_PIZZAS',
//     payload: 'price',
//   };
export default pizzas;
