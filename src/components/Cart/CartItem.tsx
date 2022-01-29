import React, { FC } from 'react';
import { Button } from '..';
import { IPizzaObject } from '../../types/types';
import minusIcon from '../../assets/img/minus.svg'
import plusIcon from '../../assets/img/plus.svg'
import removeIcon from '../../assets/img/trash.svg'

interface ICartItem {
  id: number;
  name: string;
  type: string;
  size: number;
  totalPrice: number;
  totalCount: number;
  pizzaKey: string;
  onRemove: (curPizza: IPizzaObject) => void;
  onMinusItem: (curPizza: IPizzaObject) => void;
  onPlusItem: (curPizza: IPizzaObject) => void;
}

const CartItem: FC<ICartItem> = ({
  pizzaKey,
  id,
  name,
  type,
  size,
  totalPrice,
  totalCount,
  onRemove,
  onMinusItem,
  onPlusItem,
}) => {
  const handleRemoveClick = () => {
    onRemove({ key: pizzaKey, id, removedPizzaAmount: totalCount });
  };

  const handleMinusClick = () => {
    if (totalCount <= 1) return;
    onMinusItem({ key: pizzaKey, id });
  };

  const handlePlusClick = () => {
    onPlusItem({ key: pizzaKey, id });
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img
          className="pizza-block__image"
          src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          alt="Pizza"
        />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>
          {type} dough, {size} cm
        </p>
      </div>

      <div className="cart__item-count">
        <Button
          dataTestId="button-minus"
          onClick={handleMinusClick}
          outline
          className="button--circle cart__item-count-minus"
        >
          <img src={minusIcon} alt="plus" />
        </Button>
        <b>{totalCount}</b>
        <Button
          dataTestId="button-plus"
          onClick={handlePlusClick}
          outline
          className="button--circle cart__item-count-plus"
        >
          <img src={plusIcon} alt="plus" />
        </Button>
      </div>
      <div className="cart__item-price">
        <b>{totalPrice} $</b>
      </div>
      <div className="cart__item-remove">
        <Button
          dataTestId="button-remove"
          onClick={handleRemoveClick}
          outline
          className="button--circle"
        >
          <img src={removeIcon} alt="remove" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
