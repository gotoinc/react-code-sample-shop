export const setSortBy = (obj) => ({
  type: 'SET_SORT_BY',
  payload: obj,
});

export const setCategory = (index) => {
  console.log(index)
  return {
    type: 'SET_CATEGORY',
    payload: index,
  }
};
