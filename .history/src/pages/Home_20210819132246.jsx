import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { setCategory } from '../redux/actions/filters';

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  // console.log(setCategory(3));
  const categoryNames = ['Мясные', 'Вегетарианская', 'Острые', 'Закрытые'];
  const sortItems = ;
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          onClickItem={onSelectCategory}
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
