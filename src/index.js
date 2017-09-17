import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootSaga from './sagas';

import configureStore from './config/configureStore';
import App from './App';

const store = configureStore({});
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
