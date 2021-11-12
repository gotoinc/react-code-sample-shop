import React from 'react';
import { render, screen } from '@testing-library/react';
import Confirm from '../components/Confirm';

const title = 'Hello World!';

describe('Confirm', () => {
  describe('renders Confirm component', () => {
    it('has the buttons', () => {
      render(<Confirm />);
      expect(screen.getByText('Cancel')).toBeInTheDocument();
      expect(screen.getByText('Yes')).toBeInTheDocument();
    });

    it('has a title', () => {
      render(<Confirm question={title} />);
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  describe('click on Confirm buttons', () => {
    it('click on button', () => {
      
    });
  });
});
