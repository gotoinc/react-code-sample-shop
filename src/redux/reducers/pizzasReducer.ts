import { ISetLoaded, ISetPizzas } from '../actions/pizzasActions';
import { PizzasActionTypes } from '../constants/pizzasActionTypes';
import { IPizzasState } from './interfaces';

const initialState = {
  items: [],
  isLoaded: false,
};

type PizzasAction = ISetLoaded | ISetPizzas;

export const pizzas = (
  state = initialState,
  action: PizzasAction,
): IPizzasState => {
  switch (action.type) {
    case PizzasActionTypes.SET_PIZZAS:
      return { ...state, items: action.payload, isLoaded: true };
    case PizzasActionTypes.SET_LOADED:
      return { ...state, isLoaded: action.payload };
    default:
      return state;
  }
};
