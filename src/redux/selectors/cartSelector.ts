import { RootState } from '../reducers';
import { ICartState } from '../reducers/interfaces';

export const cartSelector = (state: RootState): ICartState => state.cart;
