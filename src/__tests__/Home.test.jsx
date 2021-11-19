import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from '../pages/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../redux/reducers/index';

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {},
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: mockDispatch,
}));

describe('Home', () => {
  it('renders Home with redux', () => {
    renderWithRedux(<Home />);
    expect(screen.getByText(/All pizzas/)).toBeInTheDocument();
  });
});
