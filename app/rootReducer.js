import { combineReducers } from 'redux';

import home from './screens/home/reducers';

// combine all reducers here, then export
export default combineReducers({
    home
});
