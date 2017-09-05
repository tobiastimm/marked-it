import { getBookmarksForTree, getBookmarkFolders } from './bookmarkApi';

const getLocalState = () =>
  new Promise((resolve, reject) => {
    chrome.storage.local.get('state', obj => {
      const { state } = obj;
      try {
        if (state) {
          resolve(JSON.parse(state));
        } else {
          getBookmarkFolders().then(entries => {
            getBookmarksForTree(entries.children[0].id).then(activeFolder => {
              const initialState = {
                activeFolder: {
                  id: activeFolder.id,
                  title: activeFolder.title,
                  entries: activeFolder.children
                },
                entries: entries.children
              };
              resolve(initialState);
            });
          });
        }
      } catch (error) {
        reject(error);
      }
    });
  });

const saveState = (delay = 1000) => {
  let pendingState;
  let timerId;

  return {
    set(state) {
      if (pendingState === null) {
        timerId = window.setTimeout(() => {
          chrome.storage.sync.set(pendingState, () => {
            window.clearTimeout(timerId);
            pendingState = null;
          });
        }, delay);
      }
      pendingState = state;
    }
  };
};

export { getLocalState, saveState };
