import { IPizzaModel, IPizzaObject } from './../../types/types';
import { CartActionTypes } from '../constants/cartActionTypes';

export interface IAddPizzaToCart {
  type: CartActionTypes.ADD_PIZZA_CART;
  payload: IPizzaModel;
}
export interface IClearCart {
  type: CartActionTypes.CLEAR_CART;
}

export interface IRemoveCartItem {
  type: CartActionTypes.REMOVE_CART_ITEM;
  payload: IPizzaObject,
}
export interface IPlusCartItem {
  type: CartActionTypes.PLUS_CART_ITEM;
  payload: IPizzaObject,
}

export interface IMinusCartItem {
  type: CartActionTypes.MINUS_CART_ITEM;
  payload: IPizzaObject,
}

export const addPizzaToCart = (payload: IPizzaModel): IAddPizzaToCart => ({
  type: CartActionTypes.ADD_PIZZA_CART,
  payload,
});

export const clearCart = (): IClearCart => ({
  type: CartActionTypes.CLEAR_CART,
});

export const removeCartItem = (payload: IPizzaObject): IRemoveCartItem => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload,
});

export const plusCartItem = (payload: IPizzaObject): IPlusCartItem => ({
  type: CartActionTypes.PLUS_CART_ITEM,
  payload,
});

export const minusCartItem = (payload: IPizzaObject): IMinusCartItem => ({
  type: CartActionTypes.MINUS_CART_ITEM,
  payload,
});

export type CartActions = IAddPizzaToCart | IMinusCartItem | IRemoveCartItem | IPlusCartItem | IClearCart;
