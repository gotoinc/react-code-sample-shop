import axios from 'axios';

import { ISortBy } from '../types/types';

export const getPizza = (category: number | null, sortBy: ISortBy) => {
   return axios.get(
      `/pizzas?${category === null ? '' : `category=${category}`}&_sort=${sortBy.type
      }&_order=${sortBy.order}`,
   )
}