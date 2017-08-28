import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import * as asyncInitialState from 'redux-async-initial-state';

import { getLocalState } from '../api/storeApi';
import rootReducer from '../reducers';

const reducer = asyncInitialState.outerReducer(rootReducer);

const loadState = () =>
  new Promise(resolve => {
    getLocalState().then(resolve);
  });

const configureStore = initialState => {
  const store = createStore(
    reducer,
    compose(applyMiddleware(asyncInitialState.middleware(loadState)))
  );
  return store;
};

export default configureStore;
