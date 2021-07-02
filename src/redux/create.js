import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import reducers from './modules';
import rootSaga from './sagas';

const saga = createSagaMiddleware();
const middlewares = [saga, logger];

const store = createStore(reducers, applyMiddleware(...middlewares));

saga.run(rootSaga);

export default store;
