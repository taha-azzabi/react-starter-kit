import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const Root = ({ children, initialState = {} }) => {
  const store = configureStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
