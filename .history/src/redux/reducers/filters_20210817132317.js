const initialState = {
  category: 0,
  sortBy: 'popular',
};
const filters = (state, action) => {
    acttion
  if (action.type === 'SET_SORT_BY') {
    return { ...state, action.payload};
  }
};
