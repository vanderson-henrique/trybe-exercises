import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react';

import { createStore } from 'redux';
import { reducer } from '../redux';

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

export default renderWithRedux;