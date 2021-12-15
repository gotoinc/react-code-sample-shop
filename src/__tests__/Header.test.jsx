import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Header from '../components/Header';
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
