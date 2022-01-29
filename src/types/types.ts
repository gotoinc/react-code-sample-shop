export interface IPizza {
  category: number;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  rating: number;
  sizes: number[];
  types: number[];
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

