import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import Header from '../components/Header';
import rootReducer from '../redux/reducers';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

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

describe('Header', () => {
  it('renders Header component', () => {
    const history = createMemoryHistory();
    renderWithRedux(
      <Router history={history}>
        <Header />
      </Router>,
    );

    expect(screen.getByText('React Pizza')).toBeInTheDocument();
  });
});
