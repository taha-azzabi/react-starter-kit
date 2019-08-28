import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const Root = ({ children, initialState = {} }) => {
  const store = configureStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};

Root.propTypes = {
  initialState: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default Root;
