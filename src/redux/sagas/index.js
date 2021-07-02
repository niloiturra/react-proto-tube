import { all, fork } from 'redux-saga/effects';

import searchVideoSaga from './search-video';

export default function* rootSaga() {
  yield all([fork(searchVideoSaga)]);
}
