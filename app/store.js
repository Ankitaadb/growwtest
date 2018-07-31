import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './rootReducer';

const store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware)
);

export default store;
