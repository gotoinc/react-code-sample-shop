import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PizzaBlock } from '../components';

describe('PizzaBlock', () => {
  const title = 'test title';
  it('renders PizzaBlock component', () => {
    render(<PizzaBlock name={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should click select type', () => {
    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    const types = [1,2,3];
    render(<PizzaBlock types={types} />);
    const button = screen.getAllByTestId('item-select-type')[1];
    fireEvent.click(button);
    expect(setStateMock).not.toBeCalledTimes(1);
  });

  it('should adds pizza on click', () => {
    const mockAddPizza = jest.fn();
    render(<PizzaBlock onClickAddPizza={mockAddPizza} />);

    const button = screen.getByTestId('add-pizza-button');
    fireEvent.click(button);

    expect(mockAddPizza).toHaveBeenCalled();
  });
});
