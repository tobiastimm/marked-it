import { SET_ACTIVE_FOLDER } from '../actions/ActiveFolderActionTypes';

const activeFolderReducer = (state = { title: '', entries: [] }, action) => {
  switch (action.type) {
    case SET_ACTIVE_FOLDER:
      const { title, entries } = action.payload;
      return { ...state, title, entries };
    default:
      return state;
  }
};

export default activeFolderReducer;
