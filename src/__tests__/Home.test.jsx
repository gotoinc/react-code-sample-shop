import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Home from '../pages/Home';
import { setCategory } from '../redux/actions';
import rootReducer from '../redux/reducers/index';

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
