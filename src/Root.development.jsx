import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root';
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

export default hot(Root);
