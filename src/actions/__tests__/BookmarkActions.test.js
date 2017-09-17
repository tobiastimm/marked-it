import { removeBookmark, removeBookmarkFolder } from '../BookmarkActions';
import {
  REMOVE_BOOKMARK,
  REMOVE_BOOKMARK_FOLDER
} from '../BookmarkActionTypes';

describe('removeBookmark', () => {
  it('should create an action with type "REMOVE_BOOKMARK"', () => {
    expect(removeBookmark('').type).toBe(REMOVE_BOOKMARK);
  });

  it('should create an action with an id', () => {
    const id = '1';

    const action = removeBookmark(id);
    expect(action.type).toEqual(REMOVE_BOOKMARK);
    expect(action.payload.id).toEqual(id);
  });
});

describe('removeBookmarkFolder', () => {
  it('should create an action with type "REMOVE_BOOKMARK_FOLDER"', () => {
    expect(removeBookmarkFolder('').type).toBe(REMOVE_BOOKMARK_FOLDER);
  });

  it('should create an action with an id', () => {
    const id = '1';

    const action = removeBookmarkFolder(id);
    expect(action.type).toEqual(REMOVE_BOOKMARK_FOLDER);
    expect(action.payload.id).toEqual(id);
  });
});
