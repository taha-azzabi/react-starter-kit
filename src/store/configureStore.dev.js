import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = (initialState) => {
  const middlewares = [thunk];

  const composeEnhancers = typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
  );
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
};

export default configureStore;
