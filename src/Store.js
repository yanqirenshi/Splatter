import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

let StoreModel = {
    modals: {
        json: {
            file: {
                upload: null,
            }
        }
    },
    files: [],
};

const Store = createStore(
    rootReducer,
    StoreModel,
    applyMiddleware(
        thunk,
        logger,
    ),
);

export default Store;
