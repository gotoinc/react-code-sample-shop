const setSortBy = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

const setCategory = (catIndex) => ({
  type: 'SET_CATEGORY',
  payload: catIndex,
});

setSortBy('price', 'popular');
