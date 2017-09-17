import { REMOVE_BOOKMARK, REMOVE_BOOKMARK_FOLDER } from './BookmarkActionTypes';

const removeBookmark = id => ({
  type: REMOVE_BOOKMARK,
  payload: {
    id
  }
});

const removeBookmarkFolder = id => ({
  type: REMOVE_BOOKMARK_FOLDER,
  payload: {
    id
  }
});

export { removeBookmark, removeBookmarkFolder };
