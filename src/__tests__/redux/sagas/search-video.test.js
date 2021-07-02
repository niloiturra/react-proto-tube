import { expectSaga } from 'redux-saga-test-plan';
import {
  searchVideoError,
  searchVideoInit,
  searchVideoSuccess,
  Types,
} from '../../../redux/modules/search-video';
import {
  apiCallFetchYoutube,
  fetchVideoList,
} from '../../../redux/sagas/search-video';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

describe('testing search video async calls saga', () => {
  it('should fetch video list sucessfully', async () => {
    const fakeVideoList = { items: ['videoFake1', 'videoFake2'] };

    return expectSaga(fetchVideoList, 'react hot videos 😏')
      .provide([[matchers.call.fn(apiCallFetchYoutube), fakeVideoList]])
      .put(searchVideoInit())
      .dispatch({ type: Types.SEARCH_VIDEO_ASYNC })
      .put(searchVideoSuccess(fakeVideoList.items))
      .run({ silenceTimeout: true });
  });

  it('should fetch video list with errors', async () => {
    const error = new Error('error');

    return expectSaga(fetchVideoList, 'react hot videos 😏')
      .provide([[matchers.call.fn(apiCallFetchYoutube), throwError(error)]])
      .put(searchVideoInit())
      .dispatch({ type: Types.SEARCH_VIDEO_ASYNC })
      .put(searchVideoError())
      .run({ silenceTimeout: true });
  });
});
