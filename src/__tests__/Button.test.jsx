import { fireEvent, render } from '@testing-library/react';
import Button from '../components/Button/Button';

describe('Button', () => {
  it('renders button', () => {
    const { getByRole } = render(<Button />);

    expect(getByRole('button')).toBeInTheDocument();
  });

  it('clicks on button', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<Button onClick={handleClick} />);

    fireEvent.click(getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
