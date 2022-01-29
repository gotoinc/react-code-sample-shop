import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from '..';
import { minusCartItem, plusCartItem } from '../../redux/actions';
import { cartSelector } from '../../redux/selectors';
import { IPizzaObject } from '../../types/types';

interface ICartContent {
   onRemoveItem: (cart: IPizzaObject) => void,
}

const CartContent: FC<ICartContent> = ({
   onRemoveItem,
}) => {
   const dispatch = useDispatch();
   const { items } = useSelector(cartSelector);
   const pizzas = Object.keys(items).map((key) => items[key].items[0]);
   const onPlusItem = (cart: IPizzaObject) => {
      dispatch(plusCartItem(cart));
    };

    const onMinusItem = (cart: IPizzaObject) => {
      dispatch(minusCartItem(cart));
    };

   return (
      <div className="content__items">
      {pizzas.map((pizza) => {
        const key = `${pizza.id}_${pizza.type}_${pizza.size}`;

        return (
          <CartItem
            key={key}
            {...pizza}
            pizzaKey={key}
            totalPrice={items[key].totalPrice}
            totalCount={items[key].items.length}
            onRemove={onRemoveItem}
            onPlusItem={onPlusItem}
            onMinusItem={onMinusItem}
          />
        );
      })}
    </div>
   );
};

export default CartContent;