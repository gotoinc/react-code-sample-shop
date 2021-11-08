import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  Categories,
  SortPopup,
  PizzaBlock,
  LoadingBlock
} from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const pizzaOrderCounter = useSelector(({ cart }) => cart.pizzaOrderCounter)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters)
  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);
  const categoryNames = [
    'Meat',
    'Vegetarian',
    'Grill',
    'Spicy',
    'Stuffed',
  ];
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
    dispatch(addPizzaToCart(pizza))
  };
  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} items={categoryNames} onClickCategory={onSelectCategory} />
        <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {isLoaded ?
          items.map((obj) => {
            return (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                isLoading={true}
                key={obj.id}
                addedCount={pizzaOrderCounter[obj.id]}
                {...obj} />)
          })
          :
          Array(12).fill(0).map((_, index) => <LoadingBlock key={index} />)
        }
      </div>
    </div>
  );
}

export default Home;
