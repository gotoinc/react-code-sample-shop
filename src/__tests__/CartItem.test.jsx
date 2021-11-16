import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CartItem from './../components/CartItem';

describe('CartItem', () => {
  it('renders CartItem', () => {
    const { getByText } = render(<CartItem />);

    expect(getByText(/cm/)).toBeInTheDocument();
  });

  it('should remove item on click', async () => {
    const obj = jest.fn(() => {
      jest.fn().mockReturnValue({ id: 1, key: 1, removedPizzaAmount: 0 });
    });
    const res = obj();
    console.log(res);
    const { getAllByRole } = render(<CartItem />);
    const button = getAllByRole('button')[2];
    await fireEvent.click(button);
    expect(res).toBe(undefined);
  });
});
