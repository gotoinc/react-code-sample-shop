import React, { FC } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '..';
import { cartSelector } from '../../redux/selectors';
import goBackIcon from '../../assets/img/grey-arrow-left.svg'

const CartFooter: FC = () => {
   const { items, totalPrice, totalCount } = useSelector(cartSelector, shallowEqual);
   const onOrderBy = () => {
      console.debug('Ваш заказ ', items);
   };

   return (
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
   );
};

export default CartFooter;