import { getTotalPrice, getTotalSum } from './../../helpers/calculations';
import { CartActions } from './../actions/cartActions';
import { CartActionTypes } from '../constants/cartActionTypes';
import { ICartState } from './interfaces';

const initialState: ICartState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
  pizzaOrderCounter: {},
};

export const cart = (state = initialState, action: CartActions): ICartState => {
  switch (action.type) {
    case CartActionTypes.ADD_PIZZA_CART: {
      const key = `${action.payload.id}_${action.payload.type}_${action.payload.size}`;

      const currentPizzaItems = !state.items[key]
        ? [action.payload]
        : [...state.items[key].items, action.payload];

      const newItems = {
        ...state.items,
        [key]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');
      const pizzaOrderCounter = {
        ...state.pizzaOrderCounter,
        [action.payload.id]: state.pizzaOrderCounter[action.payload.id]
          ? state.pizzaOrderCounter[action.payload.id] + 1
          : 1,
      };
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
        pizzaOrderCounter,
      };
    }

    case CartActionTypes.REMOVE_CART_ITEM: {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload.key].totalPrice;
      const currentTotalCount = newItems[action.payload.key].items.length;
      delete newItems[action.payload.key];
      const pizzaOrderCounter = {
        ...state.pizzaOrderCounter,
        [action.payload.id]:
          state.pizzaOrderCounter[action.payload.id] -
          (action.payload.removedPizzaAmount || 0),
      };
      return {
        ...state,
        items: newItems,
        totalPrice: (state.totalPrice as number) - currentTotalPrice,
        totalCount: (state.totalCount as number) - currentTotalCount,
        pizzaOrderCounter,
      };
    }

    case CartActionTypes.PLUS_CART_ITEM: {
      const newObjItems = [
        ...state.items[action.payload.key].items,
        state.items[action.payload.key].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload.key]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');
      const pizzaOrderCounter = {
        ...state.pizzaOrderCounter,
        [action.payload.id]: state.pizzaOrderCounter[action.payload.id] + 1,
      };

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
        pizzaOrderCounter,
      };
    }

    case CartActionTypes.MINUS_CART_ITEM: {
      const oldItems = state.items[action.payload.key].items;
      const newObjItems =
        oldItems.length > 1
          ? state.items[action.payload.key].items.slice(1)
          : oldItems;
      const newItems = {
        ...state.items,
        [action.payload.key]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');
      const pizzaOrderCounter = {
        ...state.pizzaOrderCounter,
        [action.payload.id]: state.pizzaOrderCounter[action.payload.id] - 1,
      };
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
        pizzaOrderCounter,
      };
    }

    case CartActionTypes.CLEAR_CART:
      return { totalPrice: 0, totalCount: 0, items: {}, pizzaOrderCounter: {} };

    default:
      return state;
  }
};
