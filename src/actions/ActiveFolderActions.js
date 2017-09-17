import {
  SET_ACTIVE_FOLDER,
  FETCH_ACTIVE_FOLDER
} from './ActiveFolderActionTypes';

const setActiveFolder = (id, title, entries) => ({
  type: SET_ACTIVE_FOLDER,
  payload: {
    id,
    title,
    entries
  }
});

const fetchActiveFolder = id => ({
  type: FETCH_ACTIVE_FOLDER,
  payload: {
    id
  }
});

export { setActiveFolder, fetchActiveFolder };
