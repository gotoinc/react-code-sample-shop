import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, LoadingBlock } from '../components';

import {
  setCategory,
  setSortBy,
  fetchPizzas,
  addPizzaToCart,
} from '../redux/actions';
import {
  cartSelector,
  filtersSelector,
  pizzasSelector,
} from '../redux/selectors';

function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(pizzasSelector);
  const { pizzaOrderCounter } = useSelector(cartSelector);
  const { category, sortBy } = useSelector(filtersSelector);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, dispatch, sortBy]);

  const categoryNames = ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Stuffed'];
  const sortItems = [
    { name: 'Popularity', type: 'popylar', order: 'desc' },
    { name: 'Price', type: 'price', order: 'desc' },
    { name: 'Alphabetically', type: 'name', order: 'asc' },
  ];

  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );

  const onSelectSortType = React.useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch],
  );

  const handleAddPizzaToCart = (pizza) => {
    dispatch(addPizzaToCart(pizza));
  };
  return (
    <div className="container">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="content__top">
        <Categories
          activeCategory={category}
          items={categoryNames}
          onClickCategory={onSelectCategory}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => {
              return (
                <PizzaBlock
                  onClickAddPizza={handleAddPizzaToCart}
                  isLoading={true}
                  key={obj.id}
                  addedCount={pizzaOrderCounter[obj.id]}
                  {...obj}
                />
              );
            })
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
