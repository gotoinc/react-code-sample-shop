import { RootState } from '../reducers';
import { IPizzasState } from '../reducers/interfaces';

export const pizzasSelector = (state: RootState): IPizzasState => state.pizzas;
