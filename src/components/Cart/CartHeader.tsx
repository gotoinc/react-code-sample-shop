import React, { FC } from 'react';
import removeIcon from '../../assets/img/trash.svg';

interface ICardHeader {
   onClearCart: () => void,
}

const CartHeader: FC<ICardHeader> = ({onClearCart}) => {

   return (
      <div className="cart__top">
         <h2 className="content__title">Cart</h2>
         <div className="cart__clear">
            <img src={removeIcon} alt="remove" />
            <span data-testid="item-clear" onClick={onClearCart}>Remove all</span>
         </div>
      </div>
   );
};

export default CartHeader;