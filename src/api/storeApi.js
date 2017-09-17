import { getBookmarksForTree, getBookmarkFolders } from './bookmarkApi';

const saveState = (state, delay = 1000) => {
  let pendingState = state;

  const timerId = window.setTimeout(() => {
    chrome.storage.sync.set(pendingState, () => {
      window.clearTimeout(timerId);
      pendingState = null;
    });
  }, delay);
};

const getLocalState = () =>
  new Promise((resolve, reject) => {
    chrome.storage.local.get('state', obj => {
      const { state } = obj;
      try {
        let settingsState = {};
        if (state) {
          settingsState = JSON.parse(state);
        } else {
          settingsState = {};
        }
        getBookmarkFolders().then(entries => {
          getBookmarksForTree(entries.children[0].id).then(activeFolder => {
            const bookmarksState = {
              activeFolder: {
                id: activeFolder.id,
                title: activeFolder.title,
                entries: activeFolder.children
              },
              entries: entries.children
            };
            resolve({ ...settingsState, ...bookmarksState });
          });
        });
      } catch (error) {
        reject(error);
      }
    });
  });

export { getLocalState, saveState };
