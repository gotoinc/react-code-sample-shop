export interface IFiltersState {
  category: number | null;
  sortBy: {
    type: string;
    order: string;
  };
}

export interface IPizzasState {
  items: Array<string>;
  isLoaded: Array<string> | boolean;
}

export interface ICartState {
  items: any;
  totalPrice: unknown | number;
  totalCount: unknown | number;
  pizzaOrderCounter: any;
}
