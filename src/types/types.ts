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