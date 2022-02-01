import React, { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaBlock, LoadingBlock } from '../components';
import { categoryNames, sortItems } from '../data';
import { addPizzaToCart, fetchPizzas, setCategory, setSortBy } from '../redux/actions';
import {
  cartSelector,
  filtersSelector,
  pizzasSelector,
} from '../redux/selectors';
import { IPizza, IPizzaModel } from '../types/types';

const Home: FC = () => {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(pizzasSelector, shallowEqual);
  const { pizzaOrderCounter } = useSelector(cartSelector, shallowEqual);
  const { category, sortBy } = useSelector(filtersSelector, shallowEqual);
  const categoryName = (typeof category === "number"
    && categoryNames.length >= category)
    ? categoryNames[category]
    : "All pizzas";

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, dispatch, sortBy]);

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

  const renderPizzas = () => (
    isLoaded
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
      : Array(category === null ? 12 : 3 * Math.ceil(items.length/3))
        .fill(0)
        .map((_, index) => <LoadingBlock key={index} />)
  )

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
      <h2 className="content__title">{categoryName}</h2>
      <div className="content__items">
        {renderPizzas()}
      </div>
    </div>
  );
};

export default Home;
