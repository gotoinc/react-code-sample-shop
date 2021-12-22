import { CartActionTypes } from '../constants/cartActionTypes';

export interface ICurrentId {
  type: string;
  payload?: number;
}

export interface IPizzaObj {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  size: number;
  type: string;
};

export interface IAddPizzaToCart {
  type: string;
  payload?: IPizzaObj;
}

export const addPizzaToCart = (pizzaObj: IPizzaObj) => ({
  type: CartActionTypes.ADD_PIZZA_CART,
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});

export const removeCartItem = (id: number) => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: id,
});

export const plusCartItem = (id: number) => ({
  type: CartActionTypes.PLUS_CART_ITEM,
  payload: id,
});

export const minusCartItem = (id: number) => ({
  type: CartActionTypes.MINUS_CART_ITEM,
  payload: id,
});
