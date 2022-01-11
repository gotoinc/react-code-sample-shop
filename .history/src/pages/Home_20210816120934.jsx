import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';

function Home({ items }) {
  console.log(items);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup items={['Популярности', 'Цена', 'Алфавит']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {/* {items.map((obj) => (
          <PizzaBlock />
        ))} */}
        {items.map((obj) => (
          <PizzaBlock />
        ))}
      </div>
    </div>
  );
}

export default Home;
