import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { PizzaBlock } from '../components';

const types = [0, 1];
const sizes = [26, 30];

describe('PizzaBlock', () => {
  const title = 'test title';
  it('renders PizzaBlock component', () => {
    render(<PizzaBlock name={title} types={types} sizes={sizes} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should click select type', () => {
    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    render(<PizzaBlock types={types} sizes={sizes} />);
    const button = screen.getAllByTestId('item-select-type')[1];
    fireEvent.click(button);
    expect(setStateMock).not.toBeCalledTimes(1);
  });

  it('should adds pizza on click', () => {
    const mockAddPizza = jest.fn();
    render(<PizzaBlock onClickAddPizza={mockAddPizza} types={types} sizes={sizes} />);

    const button = screen.getByTestId('add-pizza-button');
    fireEvent.click(button);

    expect(mockAddPizza).toBeCalledTimes(1);
  });
});
