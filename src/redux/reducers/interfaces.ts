import { IPizzaModel, ICartItems } from './../../types/types';
export interface IFiltersState {
  category: number | null;
  sortBy: {
    type: string;
    order: string;
  };
}

export interface IPizzasState {
  items: Array<string>;
  isLoaded: boolean;
 }

export interface ICartState {
  items: ICartItems;
  totalPrice: number;
  totalCount: number;
  pizzaOrderCounter: {[key:number]: number};
}
