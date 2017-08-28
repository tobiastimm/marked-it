const getBookmarks = () =>
  new Promise(resolve => {
    chrome.bookmarks.getTree(bookmarks => resolve(bookmarks[0]));
  });

export { getBookmarks };
