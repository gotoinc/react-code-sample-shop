const setPizzas = (items) => ({
  type: 'SET_SORT_BY',
  payload: items,
});

const setCategory = (catIndex) => ({
  type: 'SET_CATEGORY',
  payload: catIndex,
});

setSortBy('price', 'popular');
