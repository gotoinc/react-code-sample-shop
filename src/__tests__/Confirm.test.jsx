import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Confirm from '../components/Confirm';

const title = 'Hello World!';

describe('Confirm', () => {
  it('renders Confirm component', () => {
    render(<Confirm question={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should click the cancel button', () => {
    const mockConfirmAction = jest.fn();
    render(<Confirm onConfirmClick={mockConfirmAction} />);

    const button = screen.getByTestId('cancel-button');
    fireEvent.click(button);

    expect(mockConfirmAction).toHaveBeenCalled();
  });

  it('should click the confirm button', () => {
    const mockConfirmAction = jest.fn();
    render(<Confirm onConfirmClick={mockConfirmAction} />);

    const button = screen.getByTestId('confirm-button');
    fireEvent.click(button);

    expect(mockConfirmAction).toHaveBeenCalled();
  });
});
