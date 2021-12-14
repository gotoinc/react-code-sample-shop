import axios from 'axios';
import { PizzasActionTypes } from '../constants/pizzasActionTypes';

export interface ISetLoaded {
  type: string;
  payload: any[];
}

export interface ISetPizzas {
  type: string;
  payload: any[];
  isLoaded: boolean;
}

export const setLoaded = (payload: boolean) => ({
  type: PizzasActionTypes.SET_LOADED,
  payload,
});

export const fetchPizzas = (sortBy: any, category: any) => (dispatch: any) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `/pizzas?${category === null ? '' : `category=${category}`}&_sort=${
        sortBy.type
      }&_order=${sortBy.order}`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items: any[]) => ({
  type: PizzasActionTypes.SET_PIZZAS,
  payload: items,
});
