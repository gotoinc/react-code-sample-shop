const initialState = {
  category: 0,
  sortBy: 'popular',
};
const filters = (state, action) => {
    action = {
        payload: 'price',
    }
  if (action.type === 'SET_SORT_BY') {
    return { ...state, action.payload};
  }
};
