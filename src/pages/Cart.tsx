import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { CartItem, Button, Confirm } from '../components/index';

import cartEmptyImage from '../assets/img/empty-cart.png';
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
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.7787 2.46466L12.1624 0.848417L7.31372 5.69711L2.46502 0.848417L0.84878 2.46466L5.69747 7.31336L0.848711 12.1621L2.46495 13.7784L7.31372 8.92961L12.1625 13.7784L13.7787 12.1621L8.92996 7.31336L13.7787 2.46466Z"
                    fill="#8B949D"
                  />
                </svg>
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
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 10.9288L1 6.23187L5.88479 1.64307"
                      stroke="#151515"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
