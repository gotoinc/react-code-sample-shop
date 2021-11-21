import React from 'react';
import { render } from '@testing-library/react';

import Home from '../pages/Home';
import { Provider, useDispatch } from 'react-redux';

import { createStore } from 'redux';
import rootReducer from '../redux/reducers/index';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { setCategory } from '../redux/actions';

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

const mockedDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockedDispatch,
}));

describe('Home', () => {
  it('renders Home page with redux', () => {
    mockedDispatch(setCategory(1));

    renderWithRedux(<Home />);

    expect(mockedDispatch).toHaveBeenCalledWith(setCategory(1));
  });
});
