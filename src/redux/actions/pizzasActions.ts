import { getPizza } from '../../helpers/api';
import { ISortBy } from '../../types/types';
import { PizzasActionTypes } from '../constants/pizzasActionTypes';

export interface ISetLoaded {
  type: PizzasActionTypes.SET_LOADED;
  payload: boolean;
}

export interface ISetPizzas {
  type: PizzasActionTypes.SET_PIZZAS;
  payload: Array<string>;
 }

export const setLoaded = (payload: boolean): ISetLoaded => ({
  type: PizzasActionTypes.SET_LOADED,
  payload,
});

export const fetchPizzas = (sortBy: ISortBy, category: number | null) => (dispatch: any) => {
  dispatch(setLoaded(false));
  getPizza(category, sortBy)
    .then(({ data }) => {
        dispatch(setPizzas(data));
    });
};

export const setPizzas = (items: Array<string>):ISetPizzas => ({
  type: PizzasActionTypes.SET_PIZZAS,
  payload: items,
});

export type PizzasAction = ISetLoaded | ISetPizzas;
