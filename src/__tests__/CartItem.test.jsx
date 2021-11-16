import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CartItem from './../components/CartItem';

describe('CartItem', () => {
  it('renders CartItem', () => {
    const { getByText } = render(<CartItem />);

    expect(getByText(/cm/)).toBeInTheDocument();
  });

  it('should remove item on click', async () => {
    const myMock = jest.fn()
    const { getAllByRole } = render(<CartItem onRemove={myMock}/>);
    const button = getAllByRole('button')[2];
    await fireEvent.click(button);
    expect(myMock).toHaveBeenCalled();
  });
});
