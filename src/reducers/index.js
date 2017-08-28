import { combineReducers } from 'redux';

import bookmarks from './bookmarksReducer';

const rootReducer = combineReducers({ bookmarks });

export default rootReducer;
