import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from '../components';
import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  React.useEffect(() => {
    //   if (!items.length) {
    dispatch(fetchPizzas());
    //   }
  }, [dispatch]);
  const categoryNames = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];
  const sortItems = [
    { name: 'Популярности', type: 'popular' },
    { name: 'Цена', type: 'price' },
    { name: 'Алфавит', type: 'alphabet' },
  ];
  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryNames} onClickItem={onSelectCategory} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded &&
          items.map((obj) => (
            <PizzaBlock isLoading={true} key={obj.id} {...obj} />
          ))}
      </div>
    </div>
  );
}

export default Home;
