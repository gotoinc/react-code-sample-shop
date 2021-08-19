const initialState = {
  items: [],
};
const filters = (state = initialState, action) => {
  action = {
    type: 'SET_SORT_BY',
    payload: 'price',
  };
  if (action.type === 'SET_SORT_BY') {
    return { ...state, sortBy: action.payload };
  }
};
export default filters;
