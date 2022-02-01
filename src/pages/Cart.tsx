import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import {Confirm } from '../components/index';
import { clearCart, removeCartItem,} from '../redux/actions';
import { cartSelector } from '../redux/selectors';
import { IConfirm, IPizzaObject } from '../types/types';
import CartEmpty from '../components/Cart/CartEmpty';
import CartFooter from '../components/Cart/CartFooter';
import CartContent from '../components/Cart/CartContent';
import CartHeader from '../components/Cart/CartHeader';

const Cart: FC = () => {
  const dispatch = useDispatch();
  const { totalCount } = useSelector(cartSelector);
  const [confirm, setConfirm] = useState<IConfirm>({
    question: null,
    afterAction: null,
  });

  const onClearCart = () => {
    setConfirm({
      question: 'Do you really want to delete all?',
      afterAction: clearCart,
    });
  };

  const onRemoveItem = (cart: IPizzaObject) => {
    setConfirm({
      question: 'Do you really want to delete ?',
      afterAction: () => removeCartItem(cart),
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

  return (
    <div className="content">
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <div className="container container--cart">
        {totalCount ? (
          <div className="cart">
            <CartHeader
              onClearCart={onClearCart}
            />
            <CartContent
              onRemoveItem={onRemoveItem}
            />
            <CartFooter />
          </div>
        ) : (
          <CartEmpty />
        )}
      </div>
      {confirm.question && (
        <Confirm question={confirm.question} onConfirmClick={onConfirmClick} />
      )}
    </div>
  );
};

export default Cart;
