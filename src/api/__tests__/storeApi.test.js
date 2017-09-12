import { getLocalState } from '../storeApi';
import { getBookmarkFolders, getBookmarksForTree } from '../bookmarkApi';

jest.mock('../bookmarkApi');

describe('Api: storage', () => {
  describe('getLocalState', () => {
    const bookmarkTree = [
      {
        id: '0',
        title: undefined,
        children: [
          {
            id: '1',
            title: 'Lesezeichenleiste',
            children: [
              { id: '2', title: 'My Bookmark', url: 'https://google.com' }
            ]
          }
        ]
      }
    ];

    const [rootFolder] = bookmarkTree;
    const [folder] = rootFolder.children;

    beforeAll(() => {
      getBookmarkFolders.mockImplementationOnce(() =>
        Promise.resolve(rootFolder)
      );
      getBookmarksForTree.mockImplementationOnce(() => Promise.resolve(folder));
    });

    it('should call the chrome.storage to get the local state and return the found state', async () => {
      const storage = { state: '{"id": "1"}' };
      global.chrome = {
        storage: {
          local: {
            get: jest.fn((stateName, callback) => callback(storage))
          }
        }
      };
      expect(await getLocalState()).toEqual(JSON.parse(storage.state));
      expect(global.chrome.storage.local.get.mock.calls.length).toBe(1);
    });

    it('should load the bookmarks, if the state is empty', async () => {
      global.chrome = {
        storage: {
          local: {
            get: jest.fn((stateName, callback) => callback({}))
          }
        }
      };

      expect(await getLocalState()).toEqual({
        activeFolder: {
          id: folder.id,
          title: folder.title,
          entries: [
            { id: '2', title: 'My Bookmark', url: 'https://google.com' }
          ]
        },
        entries: rootFolder.children
      });
    });
  });
});
