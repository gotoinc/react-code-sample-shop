import { render, screen } from '@testing-library/react';
import React from 'react';
import { SortPopup } from '../components';

describe('SortPopup', () => {
  it('renders SortPopup component', () => {
    const items = [1, 2, 3];
    render(<SortPopup items={items} />);

    expect(screen.getByText('Sort by:')).toBeInTheDocument();
  });
});
