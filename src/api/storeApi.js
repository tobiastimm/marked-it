import { getBookmarks } from './bookmarkApi';

const getLocalState = () =>
  new Promise((resolve, reject) => {
    chrome.storage.local.get('state', obj => {
      const { state } = obj;
      try {
        if (state) {
          resolve(JSON.parse(state));
        } else {
          getBookmarks().then(bookmarkTree => {
            const initialState = { bookmarks: bookmarkTree.children };
            resolve(initialState);
          });
        }
      } catch (error) {
        reject(error);
      }
    });
  });

export { getLocalState };
