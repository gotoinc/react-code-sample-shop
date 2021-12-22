import { FilterActionTypes } from '../constants/filtersActionTypes';

export interface ISetCategoryAction {
  type: FilterActionTypes.SET_CATEGORY;
  payload: number;
}

export interface ISetSortByAction {
  type: FilterActionTypes.SET_SORT_BY;
  payload: {
    type: string;
    order: string;
  };
}

export const setSortBy = ({ type, order }: any) => ({
  type: FilterActionTypes.SET_SORT_BY,
  payload: { type, order },
});

export const setCategory = (index: number) => {
  return {
    type: FilterActionTypes.SET_CATEGORY,
    payload: index,
  };
};
