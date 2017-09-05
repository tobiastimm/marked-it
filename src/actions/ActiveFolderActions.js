import { SET_ACTIVE_FOLDER } from './ActiveFolderActionTypes';

const setActiveFolder = (title, entries) => ({
  type: SET_ACTIVE_FOLDER,
  payload: {
    title,
    entries
  }
});

export { setActiveFolder };
