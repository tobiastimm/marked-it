import { applyMiddleware, createStore, compose } from 'redux';

import * as asyncInitialState from 'redux-async-initial-state';
import createSagaMiddleware, { END } from 'redux-saga';

import { getLocalState } from '../api/storeApi';
import rootReducer from '../reducers';

const reducer = asyncInitialState.outerReducer(rootReducer);

const loadState = () =>
  new Promise(resolve => {
    getLocalState().then(resolve);
  });

const configureStore = initialState => {
  const sagaMiddleWare = createSagaMiddleware();
  const enhance = compose(
    applyMiddleware(asyncInitialState.middleware(loadState), sagaMiddleWare)
  );
  const store = createStore(reducer, initialState, enhance);
  store.runSaga = sagaMiddleWare.run;
  store.close = () => store.dispatch(END);
  return store;
};

export default configureStore;
