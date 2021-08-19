const setSortBy = (name) => ({
  type: 'SET_SORT_BY',
  payload: name,
});

setSortBy('price', 'popular');
