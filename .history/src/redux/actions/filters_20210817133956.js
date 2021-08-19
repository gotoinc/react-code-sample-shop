const setSortBy = () => ({
  type: 'SET_SORT_BY',
  payload: name,
});

setSortBy('price', 'popular');
