import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import CartItem from './../components/Cart/CartItem';

describe('CartItem', () => {
  it('renders CartItem', () => {
    const { getByText } = render(<CartItem />);

    expect(getByText(/cm/)).toBeInTheDocument();
  });

  it('should remove item on click', () => {
    const mockRemoveAction = jest.fn();
    render(<CartItem onRemove={mockRemoveAction} />);

    const button = screen.getByTestId('button-remove');
    fireEvent.click(button);

    expect(mockRemoveAction).toHaveBeenCalled();
  });

  it('should increment on click', () => {
    const mockIncrementAction = jest.fn();
    render(<CartItem onPlusItem={mockIncrementAction} />);

    const button = screen.getByTestId('button-plus');
    fireEvent.click(button);

    expect(mockIncrementAction).toHaveBeenCalled();
  });

  it('should decrement on click', () => {
    const mockDecrementAction = jest.fn();
    render(<CartItem onMinusItem={mockDecrementAction} />);

    const button = screen.getByTestId('button-minus');
    fireEvent.click(button);

    expect(mockDecrementAction).toHaveBeenCalled();
  });
});
