import React from 'react';
import { Categories, SortPopup } from '../components';

function Home() {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup items={['Популярности', 'Цена', 'Алфавит']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
 <div className='co'>
    </div>
  );
}

export default Home;
