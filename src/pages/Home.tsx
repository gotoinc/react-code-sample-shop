import React, { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, LoadingBlock, PizzaBlock, SortPopup } from '../components';
import {
  addPizzaToCart,
  fetchPizzas,
  setCategory,
  setSortBy,
} from '../redux/actions';
import {
  cartSelector,
  filtersSelector,
  pizzasSelector,
} from '../redux/selectors';
import { IPizza, IPizzaModel } from '../types/types';

const Home: FC = () => {
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

  const handleAddPizzaToCart = (pizza: IPizzaModel) => {
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
          ? items.map((pizza: IPizza) => {
              return (
                <PizzaBlock
                  onClickAddPizza={handleAddPizzaToCart}
                  isLoading={true}
                  key={pizza.id}
                  addedCount={pizzaOrderCounter[pizza.id]}
                  {...pizza}
                />
              );
            })
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
};

export default Home;
