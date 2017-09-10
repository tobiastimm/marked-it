import {
  getAllBookmarks,
  getBookmarkFolders,
  getBookmarksForTree
} from '../bookmarkApi';

const bookmarkTree = [
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

describe('getAllBookmarks', () => {
  beforeAll(() => {
    global.chrome = {
      bookmarks: {
        getTree(callback) {
          process.nextTick(callback(bookmarkTree));
        }
      }
    };
  });

  it('should get all bookmarks from chrome', async () => {
    expect.assertions(2);
    const tree = await getAllBookmarks();
    expect(tree).toBeDefined();
    expect(tree).toBe(bookmarkTree[0]);
  });
});

describe('getBookmarksFolder', () => {
  beforeAll(() => {
    global.chrome = {
      bookmarks: {
        getTree(callback) {
          process.nextTick(callback(bookmarkTree));
        }
      }
    };
  });

  it('should get only the bookmark folders from chrome', async () => {
    expect.assertions(2);
    const tree = await getBookmarkFolders();
    expect(tree).toBeDefined();
    expect(tree.children[0].children.length).toBe(0);
  });
});

describe('getBookmarksForTree', () => {
  beforeAll(() => {
    global.chrome = {
      bookmarks: {
        getSubTree(id, callback) {
          process.nextTick(callback(bookmarkTree[0].children));
        }
      }
    };
  });

  it('should only get the bookmarks for the selected folder', async () => {
    expect.assertions(2);
    const folder = await getBookmarksForTree('1');
    expect(folder).toBeDefined();
    expect(folder.children.length).toBe(1);
  });
});
