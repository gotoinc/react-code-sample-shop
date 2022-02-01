
export interface IPrice {
  type: number;
  size: number;
  price: number;
}

export interface IPizza {
  category: number;
  id: number;
  imageUrl: string;
  name: string;
  rating: number;
  sizes: number[];
  types: number[];
  prices: IPrice[];
}

export interface IPizzaModel {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  type: string;
  size: number;
}

export interface IPizzaObject {
  key: string;
  id: number;
  removedPizzaAmount?: number;
};
export interface ISortBy {
  type: string
  order: string
}

export interface IItem {
  name: string;
  type: string;
  order: string;
};

export interface IConfirm {
  question: string | null;
  afterAction: null | Function;
}
export type ICartObject = { items: Array<IPizzaModel>, totalPrice: number };
export type ICartItems = { [key: string]: ICartObject };



