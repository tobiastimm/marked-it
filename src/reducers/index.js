import { combineReducers } from 'redux';

import entries from './entriesReducer';
import activeFolder from './activeFolderReducer';

const rootReducer = combineReducers({ entries, activeFolder });

export default rootReducer;
