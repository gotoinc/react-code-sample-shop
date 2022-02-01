import { ICartItems, IPizzaModel, ICartObject } from './../types/types';
export const getTotalPrice = (arr: Array<IPizzaModel>): number =>
   arr.reduce((sum, obj) => obj.price + sum, 0);

export const getSum = (obj: ICartObject, path: string): number => {
   const [firstKey, ...keys] = path.split('.');
   return keys.reduce((val: any, key: string) => {
      return val[key];
   }, obj[firstKey as keyof ICartObject]);
};

export const getTotalSum = (obj: ICartItems, path: string): number => {
   return Object.values(obj).reduce((sum: number, obj: ICartObject) => {
      const value = getSum(obj, path);
      return sum + value;
   }, 0);
};