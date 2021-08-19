const initialState = {
  category: 0,
  sortBy: 'popular',
};
const filters = (state, action) => {
    action = {
        type: 'SET_SORT_BY'
        payload: 'price',
    }
  if (action.type === 'SET_SORT_BY') {
    return { ...state, action.payload};
  }
};
