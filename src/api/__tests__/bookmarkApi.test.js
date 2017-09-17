import {
  getAllBookmarks,
  getBookmarkFolders,
  getBookmarksForTree,
  removeBookmark,
  removeBookmarkFolder
} from '../bookmarkApi';

describe('Api: bookmark', () => {
  let bookmarkTree;

  beforeEach(() => {
    bookmarkTree = [
      {
        id: '0',
        title: undefined,
        children: [
          {
            id: '1',
            title: 'Lesezeichenleiste',
            children: [
              { id: '2', title: 'My Bookmark', url: 'https://google.com' },
              { id: '3', title: 'Sub-Bookmarks', children: [] }
            ]
          }
        ]
      }
    ];
  });

  describe('getAllBookmarks', () => {
    beforeAll(() => {
      global.chrome = {
        bookmarks: {
          getTree: jest.fn(callback => callback(bookmarkTree))
        }
      };
    });

    it('should call chrome.bookmarks.getTree method', async () => {
      expect(await getBookmarkFolders()).toBeDefined();
      expect(global.chrome.bookmarks.getTree.mock.calls.length).toBe(1);
    });

    it('should get all bookmarks', async () => {
      const tree = await getAllBookmarks();
      expect(tree).toBeDefined();
      expect(tree).toBe(bookmarkTree[0]);
    });
  });

  describe('getBookmarksFolder', () => {
    beforeAll(() => {
      global.chrome = {
        bookmarks: {
          getTree: jest.fn(callback => callback(bookmarkTree))
        }
      };
    });

    it('should call chrome.bookmarks.getTree method', async () => {
      expect(await getBookmarkFolders());
      expect(global.chrome.bookmarks.getTree.mock.calls.length).toBe(1);
    });

    it('should get only the bookmark folders from chrome', async () => {
      const tree = await getBookmarkFolders();
      expect(tree).toBeDefined();
      expect(tree.children[0].children.length).toBe(1);
    });
  });

  describe('getBookmarksForTree', () => {
    beforeAll(() => {
      global.chrome = {
        bookmarks: {
          getSubTree: jest.fn((id, callback) =>
            callback(bookmarkTree[0].children)
          )
        }
      };
    });

    it('should call chrome.bookmarks.getSubTree method', async () => {
      expect(await getBookmarksForTree('1')).toBeDefined();
      expect(global.chrome.bookmarks.getSubTree.mock.calls.length).toBe(1);
    });

    it('should only get the bookmarks for the selected folder', async () => {
      const folder = await getBookmarksForTree('1');
      expect(folder).toBeDefined();
      expect(folder.children.length).toBe(1);
    });
  });

  describe('removeBookmark', () => {
    beforeAll(() => {
      global.chrome = {
        bookmarks: {
          remove: jest.fn((id, callback) => callback())
        }
      };
    });

    it('should call chrome.bookmarks.remove method', async () => {
      await removeBookmark('1');
      expect(global.chrome.bookmarks.remove.mock.calls.length).toBe(1);
    });

    // TODO Integration test with chrome bookmarks
  });

  describe('removeBookmarkFolder', () => {
    beforeAll(() => {
      global.chrome = {
        bookmarks: {
          removeTree: jest.fn((id, callback) => callback())
        }
      };
    });

    it('should call chrome.bookmarks.removeTree method', async () => {
      await removeBookmarkFolder('1');
      expect(global.chrome.bookmarks.removeTree.mock.calls.length).toBe(1);
    });

    // TODO Integration test with chrome bookmarks
  });
});
