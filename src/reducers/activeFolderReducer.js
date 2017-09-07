import { SET_ACTIVE_FOLDER } from '../actions/ActiveFolderActionTypes';

const activeFolderReducer = (
  state = { id: '', title: '', entries: [] },
  action
) => {
  switch (action.type) {
    case SET_ACTIVE_FOLDER:
      const { id, title, entries } = action.payload;
      return { ...state, id, title, entries };
    default:
      return state;
  }
};

export default activeFolderReducer;
