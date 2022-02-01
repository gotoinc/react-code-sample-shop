import { FiltersAction } from './../actions/filtersActions';
import { FilterActionTypes } from './../constants/filtersActionTypes';
import { IFiltersState } from './interfaces';

const initialState: IFiltersState = {
  category: null,
  sortBy: {
    type: 'rating',
    order: 'desc',
  },
};
export const filters = (
  state = initialState,
  action: FiltersAction,
): IFiltersState => {
  switch (action.type) {
    case FilterActionTypes.SET_SORT_BY:
      return { ...state, sortBy: action.payload };
    case FilterActionTypes.SET_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};
