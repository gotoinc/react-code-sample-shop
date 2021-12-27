import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { CartItem, Button, Confirm } from '../components/index';

import cartEmptyImage from '../assets/img/empty-cart.png';
import removeIcon from '../assets/img/trash.svg'
import goBackIcon from '../assets/img/grey-arrow-left.svg'
import {
  clearCart,
  minusCartItem,
  plusCartItem,
  removeCartItem,
} from '../redux/actions';
import { cartSelector } from '../redux/selectors';

interface IConfirm {
  question: string | null;
  afterAction: null | Function;
}

const Cart: FC = () => {
  const dispatch = useDispatch();

  const [confirm, setConfirm] = useState<IConfirm>({
    question: null,
    afterAction: null,
  });

  const { items, totalPrice, totalCount } = useSelector(cartSelector);
  const addedPizzas = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearCart = () => {
    setConfirm({
      question: 'Do you really want to delete all?',
      afterAction: clearCart,
    });
  };

  const onRemoveItem = (id: number) => {
    setConfirm({
      question: 'Do you really want to delete ?',
      afterAction: () => removeCartItem(id),
    });
  };

  const onConfirmClick = (result: boolean) => {
    setConfirm((prevState) => ({
      ...prevState,
      question: null,
    }));
    if (result) {
      dispatch(confirm.afterAction!());
    }
  };

  const onPlusItem = (id: number) => {
    dispatch(plusCartItem(id));
  };

  const onMinusItem = (id: number) => {
    dispatch(minusCartItem(id));
  };

  const onOrderBy = () => {
    console.log('Ваш заказ ', items);
  };

  return (
    <div className="content">
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <div className="container container--cart">
        {totalCount ? (
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">Cart</h2>
              <div className="cart__clear">
                <img src={removeIcon} alt="remove" />
                <span data-testid="item-clear" onClick={onClearCart}>Remove all</span>
              </div>
            </div>
            <div className="content__items">
              {addedPizzas.map((obj) => {
                const key = `${obj.id}_${obj.type}_${obj.size}`;

                return (
                  <CartItem
                    key={key}
                    {...obj}
                    pizzaKey={key}
                    totalPrice={items[key].totalPrice}
                    totalCount={items[key].items.length}
                    onRemove={onRemoveItem}
                    onPlus={onPlusItem}
                    onMinus={onMinusItem}
                  />
                );
              })}
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span>
                  Total: <b>{totalCount} pcs </b>
                </span>
                <span>
                  Amount: <b>{totalPrice} $</b>
                </span>
              </div>
              <div className="cart__bottom-buttons">
                <Link
                  to="/"
                  className="button button--outline button--add go-back-btn"
                >
                  <img src={goBackIcon} alt="go back" />
                  <span>Back</span>
                </Link>
                <Button onClick={onOrderBy} className="pay-btn">
                  <span>Pay</span>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart cart--empty">
            <h2>
              The cart is empty <i>😢</i>
            </h2>
            <p>
              You haven't ordered pizza yet. Go to the main page to order pizza.
            </p>
            <img src={cartEmptyImage} alt="Empty cart" />
            <Link to="/" className="button button--black">
              <span>Back</span>
            </Link>
          </div>
        )}
      </div>
      {confirm.question && (
        <Confirm question={confirm.question} onConfirmClick={onConfirmClick} />
      )}
    </div>
  );
};

export default Cart;
