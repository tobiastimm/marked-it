import { call, put, takeEvery, select } from 'redux-saga/effects';
import { getBookmarksForTree } from '../api/bookmarkApi';
import { FETCH_ACTIVE_FOLDER } from '../actions/ActiveFolderActionTypes';
import { setActiveFolder } from '../actions/ActiveFolderActions';

const getCurrentActiveFolder = state => state.activeFolder;

function* fetchActiveFolder(action) {
  try {
    const { id } = action.payload;
    const currentFolder = yield select(getCurrentActiveFolder);
    if (id !== currentFolder.id) {
      const selectedFolder = yield call(getBookmarksForTree, action.payload.id);
      yield put(
        setActiveFolder(
          selectedFolder.id,
          selectedFolder.title,
          selectedFolder.children
        )
      );
    }
  } catch (e) {
    console.error(e);
  }
}

function* watchActiveFolder() {
  yield takeEvery(FETCH_ACTIVE_FOLDER, fetchActiveFolder);
}

export { watchActiveFolder };
