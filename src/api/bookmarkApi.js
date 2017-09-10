import remove from 'lodash/remove';

const removeBookmarks = entry => {
  if (entry.children) {
    remove(entry.children, child => !!child.url);
    entry.children.forEach(child => removeBookmarks(child));
  }
};

const getAllBookmarks = () =>
  new Promise(resolve => {
    chrome.bookmarks.getTree(entries => {
      resolve(entries[0]);
    });
  });

const getBookmarkFolders = () =>
  new Promise(resolve => {
    chrome.bookmarks.getTree(entries => {
      const rootFolders = entries[0];
      removeBookmarks(rootFolders);
      resolve(rootFolders);
    });
  });

const getBookmarksForTree = id =>
  new Promise(resolve => {
    chrome.bookmarks.getSubTree(id, entries => {
      const folder = entries[0];
      remove(folder.children, entry => !!entry.children);
      resolve(folder);
    });
  });
export { getAllBookmarks, getBookmarkFolders, getBookmarksForTree };
