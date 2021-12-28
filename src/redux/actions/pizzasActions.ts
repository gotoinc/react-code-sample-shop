import axios from 'axios';

import { getPizza } from '../../helpers/api';
import { ISortBy } from '../../types/types';
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

export const fetchPizzas = (sortBy: ISortBy, category: number | null) => (dispatch: any) => {
  dispatch(setLoaded(false));
  getPizza(category, sortBy)
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items: any[]) => ({
  type: PizzasActionTypes.SET_PIZZAS,
  payload: items,
});
