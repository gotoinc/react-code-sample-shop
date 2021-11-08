import React from 'react'
import Buttom from '../components/Button'

function CartItem({ pizzaKey, id, name, type, size, totalPrice, totalCount, onRemove, onMinus, onPlus }) {

   const handleRemoveClick = () => {
      onRemove({ key: pizzaKey, id, removedPizzaAmount: totalCount })
   };

   const handleMinusClick = () => {
      if (totalCount <= 1) return
      onMinus({ key: pizzaKey, id })
   };

   const handlePlusClick = () => {
      onPlus({ key: pizzaKey, id })
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
            <p>{type} dough, {size} cm</p>
         </div>

         <div className="cart__item-count">
            <Buttom onClick={handleMinusClick} outline className="button--circle cart__item-count-minus">
               <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E" />
                  <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E" />
               </svg>

            </Buttom>
            <b>{totalCount}</b>
            <Buttom onClick={handlePlusClick} outline className="button--circle cart__item-count-plus">
               <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E" />
                  <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E" />
               </svg>

            </Buttom>
         </div>
         <div className="cart__item-price">
            <b>{totalPrice} $</b>
         </div>
         <div className="cart__item-remove">
            <Buttom onClick={handleRemoveClick} outline className="button--circle">
               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.7787 2.46466L12.1624 0.848417L7.31372 5.69711L2.46502 0.848417L0.84878 2.46466L5.69747 7.31336L0.848711 12.1621L2.46495 13.7784L7.31372 8.92961L12.1625 13.7784L13.7787 12.1621L8.92996 7.31336L13.7787 2.46466Z" fill="#8B949D" />
               </svg>

            </Buttom>
         </div>
      </div>
   )
}

export default CartItem
