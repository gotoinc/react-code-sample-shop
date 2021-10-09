import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import { clearCart, minusCartItem, plusCartItem, removeCartItem } from '../redux/actions/cart';
import CartItem from '../components/CartItem';
import Button from '../components/Button';

import cartEmptyImage from '../assets/img/empty-cart.png'

function Cart() {

  const dispatch = useDispatch()

  const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart)
  const addedPizzas = Object.keys(items).map(key => {
    return items[key].items[0]
  })

  const onClearCart = () => {
    if (window.confirm("Вы действительно хотите очистить корзину?")) {
      dispatch(clearCart())
    }
  };

  const onRemoveItem = (id) => {
    if (window.confirm("Вы действительно хотите удалить?")) {
      dispatch(removeCartItem(id))
    }
  };

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id))
  };

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id))
  };

  const onOrderBy = () => {
    console.log("Ваш заказ ", items)
  }

  return (
    <div className="content">
      <div className="container container--cart">
        {
          totalCount ?
            (
              <div className="cart">
                <div className="cart__top">
                  <h2 className="content__title">
                    Корзина</h2>
                  <div className="cart__clear">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7787 2.46466L12.1624 0.848417L7.31372 5.69711L2.46502 0.848417L0.84878 2.46466L5.69747 7.31336L0.848711 12.1621L2.46495 13.7784L7.31372 8.92961L12.1625 13.7784L13.7787 12.1621L8.92996 7.31336L13.7787 2.46466Z" fill="#8B949D"/>
                  </svg>
                    <span onClick={onClearCart}>Очистить корзину</span>
                  </div>
                </div>
                <div className="content__items">
                  {
                    addedPizzas.map(obj => {
                      const key = `${obj.id}_${obj.type}_${obj.size}`

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
                      )
                    }
                    )
                  }
                </div>
                <div className="cart__bottom">
                  <div className="cart__bottom-details">
                    <span> Всего: <b>{totalCount} шт.</b> </span>
                    <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
                  </div>
                  <div className="cart__bottom-buttons">
                    <Link to="/" className="button button--outline button--add go-back-btn">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10.9288L1 6.23187L5.88479 1.64307" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>


                      <span>Назад</span>
                    </Link>
                    <Button onClick={onOrderBy} className="pay-btn">
                      <span>Оплатить</span>
                    </Button>
                  </div>
                </div>
              </div>
            ) :
            (
              <div className="cart cart--empty">
                <h2>Корзина пустая <i>😢</i></h2>
                <p>Вероятней всего, вы не заказывали ещё пиццу.<br />
                  Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                <img src={cartEmptyImage} alt="Empty cart" />
                <Link to="/" className="button button--black">
                  <span>Назад</span>
                </Link>
              </div>
            )}
      </div>
    </div>
  )
}

export default Cart;
