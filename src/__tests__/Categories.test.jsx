import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Categories from '../components/Categories';

describe('Categories', () => {
  it('renders Categories component', () => {
    render(<Categories />);

    expect(screen.getByText(/all/i)).toBeInTheDocument();
  });

  it('should click on list of all categories', () => {
    const mockOnClickAllCategories = jest.fn();
    render(<Categories onClickCategory={mockOnClickAllCategories} />);

    fireEvent.click(screen.getByTestId('all-categories'));

    expect(mockOnClickAllCategories).toHaveBeenCalled();
  });
  it('renders list of items', () => {
    const mockItems = ['bar', 'foo', 'baz'];
    render(<Categories items={mockItems} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('clicks on item of a list', () => {
    const mockItems = ['bar', 'foo', 'baz'];
    const mockOnClick = jest.fn();
    render(<Categories onClickCategory={mockOnClick} items={mockItems} />);

    fireEvent.click(screen.getAllByTestId('item-category')[0]);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
