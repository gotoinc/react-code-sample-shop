import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from '../components';

function Home() {
  // const dispatch = useDispatch();
  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
      // sortBy: filters.sortBy,
    };
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup
          items={[
            { name: 'Популярности', type: 'popular' },
            { name: 'Цена', type: 'price' },
            { name: 'Алфавит', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
