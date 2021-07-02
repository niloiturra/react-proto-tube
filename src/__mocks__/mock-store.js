import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from '../redux/modules';
import rootSaga from '../redux/sagas';

export function createTestStore() {
  const saga = createSagaMiddleware();
  const middlewares = [saga, logger];
  const store = createStore(reducers, applyMiddleware(...middlewares));
  saga.run(rootSaga);

  return store;
}
