import reducer, {
  INITIAL_STATE,
  searchVideoAsync,
  searchVideoError,
  searchVideoInit,
  searchVideoSuccess,
  Types,
} from '../../../redux/modules/search-video';

const dirtyState = {
  videos: ['anyVideo1', 'anyVideo2'],
  loading: false,
  error: true,
};

describe('testing search video action creators', () => {
  it('should create search video init action correctly', () => {
    const expectedResult = {
      type: Types.SEARCH_VIDEO_INIT,
      videos: [],
      loading: true,
      error: false,
    };

    expect(searchVideoInit()).toStrictEqual(expectedResult);
  });

  it('should create search video success action correctly', () => {
    const videoList = ['video1', 'video2', 'video3'];

    const expectedResult = {
      type: Types.SEARCH_VIDEO_SUCCESS,
      videos: videoList,
      loading: false,
      error: false,
    };

    expect(searchVideoSuccess(videoList)).toStrictEqual(expectedResult);
  });

  it('should create search video error action correctly', () => {
    const expectedResult = {
      type: Types.SEARCH_VIDEO_ERROR,
      videos: [],
      loading: false,
      error: true,
    };

    expect(searchVideoError()).toStrictEqual(expectedResult);
  });

  it('should create search video async action correctly', () => {
    const searchTerm = 'react hot videos 😲';
    const expectedResult = {
      type: Types.SEARCH_VIDEO_ASYNC,
      searchTerm,
    };

    expect(searchVideoAsync(searchTerm)).toStrictEqual(expectedResult);
  });
});

describe('testing search video reducer', () => {
  it('should return same state after receive type action invalid', () => {
    const expectedResult = dirtyState;

    const action = { type: 'UNEXPECTED_ACTION_TYPE' };

    expect(reducer(dirtyState, action)).toStrictEqual(expectedResult);
  });

  it('should return initial state after receive type action invalid and any state', () => {
    const expectedResult = INITIAL_STATE;

    const action = { type: 'UNEXPECTED_ACTION_TYPE' };

    expect(reducer(undefined, action)).toStrictEqual(expectedResult);
  });

  it('should return new state after search video init', () => {
    const expectedResult = {
      videos: [],
      loading: true,
      error: false,
    };

    const action = searchVideoInit();

    expect(reducer(dirtyState, action)).toStrictEqual(expectedResult);
  });

  it('should return new state after search video success', () => {
    const videoList = ['any', 'one', 'two'];

    const expectedResult = {
      videos: videoList,
      loading: false,
      error: false,
    };

    const action = searchVideoSuccess(videoList);

    expect(reducer(dirtyState, action)).toStrictEqual(expectedResult);
  });

  it('should return new state after search video error', () => {
    const expectedResult = {
      videos: [],
      loading: false,
      error: true,
    };

    const action = searchVideoError();

    expect(reducer(dirtyState, action)).toStrictEqual(expectedResult);
  });
});
