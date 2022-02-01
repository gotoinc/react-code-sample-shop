import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import cartEmptyImage from '../../assets/img/empty-cart.png';

const CartEmpty: FC = () => {
   return (
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
   );
};

export default CartEmpty;