import { createSelector } from 'reselect';
import { RootState } from './../store';
export const cartSelector = (state: RootState) => state.cart;
export const cartSelectorPizza = createSelector(cartSelector, (cart) => Object.keys(cart.items).map((key) => cart.items[key].items[0]));