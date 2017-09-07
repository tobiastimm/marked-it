import { all, fork } from 'redux-saga/effects';
import { watchActiveFolder } from './activeFolderSagas';

function* root() {
  yield [fork(watchActiveFolder)];
}

export default root;
