import { RootState } from '../reducers';
import { IFiltersState } from '../reducers/interfaces';

export const filtersSelector = (state: RootState): IFiltersState => state.filters;
