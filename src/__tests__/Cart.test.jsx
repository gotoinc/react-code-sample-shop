import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Cart from '../pages/Cart';
import rootReducer from '../redux/reducers';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
  } = {},
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('Cart', () => {
  it('render Cart page', async () => {
    const history = createMemoryHistory();
    renderWithRedux(
      <Router history={history}>
        <Cart />
      </Router>,
    );

    await expect(screen.getByText('The cart is empty')).toBeInTheDocument();
  });
});
