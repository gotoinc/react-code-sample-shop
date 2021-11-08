const initialState = {
   items: {},
   totalPrice: 0,
   totalCount: 0,
   pizzaOrderCounter: {}
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
   const [firstKey, ...keys] = path.split('.');
   return keys.reduce((val, key) => {
      return val[key];
   }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
   return Object.values(obj).reduce((sum, obj) => {
      const value = _get(obj, path);
      return sum + value;
   }, 0);
};

const cart = (state = initialState, action) => {
   switch (action.type) {
      case 'ADD_PIZZA_CART': {
         const key = `${action.payload.id}_${action.payload.type}_${action.payload.size}`

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
            [action.payload.id]: state.pizzaOrderCounter[action.payload.id] ? state.pizzaOrderCounter[action.payload.id] + 1 : 1
         }
         return {
            ...state,
            items: newItems,
            totalCount,
            totalPrice,
            pizzaOrderCounter
         };
      }

      case 'REMOVE_CART_ITEM': {
         console.log(action.payload)
         const newItems = {
            ...state.items,
         };
         const currentTotalPrice = newItems[action.payload.key].totalPrice;
         const currentTotalCount = newItems[action.payload.key].items.length;
         delete newItems[action.payload.key];
         const pizzaOrderCounter = {
            ...state.pizzaOrderCounter,
            [action.payload.id]: state.pizzaOrderCounter[action.payload.id] - action.payload.removedPizzaAmount
         }
         return {
            ...state,
            items: newItems,
            totalPrice: state.totalPrice - currentTotalPrice,
            totalCount: state.totalCount - currentTotalCount,
            pizzaOrderCounter
         };
      }

      case 'PLUS_CART_ITEM': {
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
            [action.payload.id]: state.pizzaOrderCounter[action.payload.id] + 1
         }

         return {
            ...state,
            items: newItems,
            totalCount,
            totalPrice,
            pizzaOrderCounter
         };
      }

      case 'MINUS_CART_ITEM': {
         const oldItems = state.items[action.payload.key].items;
         const newObjItems =
            oldItems.length > 1 ? state.items[action.payload.key].items.slice(1) : oldItems;
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
            [action.payload.id]: state.pizzaOrderCounter[action.payload.id] - 1
         }
         return {
            ...state,
            items: newItems,
            totalCount,
            totalPrice,
            pizzaOrderCounter
         };
      }

      case 'CLEAR_CART':
         return { totalPrice: 0, totalCount: 0, items: {}, pizzaOrderCounter: {} };

      default:
         return state;
   }
};

export default cart;
