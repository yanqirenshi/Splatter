import { combineReducers } from 'redux';

import modals from './modals';
import files  from './files';

export default combineReducers({
    modals,
    files,
});
