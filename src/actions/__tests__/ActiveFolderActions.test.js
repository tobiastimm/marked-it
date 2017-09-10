import { setActiveFolder, fetchActiveFolder } from '../ActiveFolderActions';
import {
  SET_ACTIVE_FOLDER,
  FETCH_ACTIVE_FOLDER
} from '../ActiveFolderActionTypes';

describe('setActiveFolder', () => {
  it('should create an action with type "SET_ACTIVE_FOLDER"', () => {
    expect(setActiveFolder('', '', []).type).toBe(SET_ACTIVE_FOLDER);
  });

  it('should create an action with an id and entries', () => {
    const id = '1';
    const title = 'Title';
    const children = [{ id: '2', title: 'child', children: [] }];

    const action = setActiveFolder(id, title, children);
    expect(action.type).toEqual(SET_ACTIVE_FOLDER);
    expect(action.payload.id).toEqual(id);
    expect(action.payload.title).toEqual(title);
    expect(action.payload.entries).toEqual(children);
  });
});

describe('fetchActiveFolder', () => {
  it('should create an action with type "FETCH_ACTIVE_FOLDER"', () => {
    expect(fetchActiveFolder('').type).toBe(FETCH_ACTIVE_FOLDER);
  });

  it('should create an action with an id', () => {
    const id = '1';
    const action = fetchActiveFolder(id);
    expect(action.type).toEqual(FETCH_ACTIVE_FOLDER);
    expect(action.payload.id).toEqual(id);
  });
});
