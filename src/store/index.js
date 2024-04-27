import { createStore, applyMiddleware, combineReducers } from 'redux';

import nutriReducer from './nutriReducer';

const rootReducer = combineReducers({
  nutri: nutriReducer,
  // ... outros reducers, se você os tiver
});

export const store = createStore(rootReducer, applyMiddleware());
