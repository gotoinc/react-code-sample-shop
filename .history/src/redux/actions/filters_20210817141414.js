const setSortBy = (name) => ({
  type: 'SET_PIZZAS',
  payload: name,
});

const setCategory = (catIndex) => ({
  type: 'SET_CATEGORY',
  payload: catIndex,
});

setSortBy('price', 'popular');
