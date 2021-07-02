import 'regenerator-runtime/runtime';
import { put, takeEvery, call } from 'redux-saga/effects';
import {
  searchVideoError,
  searchVideoInit,
  searchVideoSuccess,
  Types,
} from '../modules/search-video';
import youtubeSearch from 'youtube-api-v3-search';
import YTApi from '../../api';

export const apiCallFetchYoutube = (searchTerm) =>
  Promise.resolve(youtubeSearch(YTApi, searchTerm));

export function* fetchVideoList({ searchTerm }) {
  try {
    yield put(searchVideoInit());
    const videoListResp = yield call(apiCallFetchYoutube, searchTerm);
    yield put(searchVideoSuccess(videoListResp.items));
  } catch (err) {
    yield put(searchVideoError());
  }
}

export default function* searchVideoSaga() {
  yield takeEvery(Types.SEARCH_VIDEO_ASYNC, fetchVideoList);
}
