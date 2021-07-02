//Action Types
export const Types = {
  SEARCH_VIDEO_INIT: 'SEARCH_VIDEO_INIT',
  SEARCH_VIDEO_SUCCESS: 'SEARCH_VIDEO_SUCCESS',
  SEARCH_VIDEO_ERROR: 'SEARCH_VIDEO_ERROR',
  SEARCH_VIDEO_ASYNC: 'SEARCH_VIDEO_ASYNC',
};

//Reducer
export const INITIAL_STATE = {
  videos: [],
  loading: false,
  error: false,
};

export default function reducer(
  state = INITIAL_STATE,
  { type, loading, error, videos }
) {
  switch (type) {
    case Types.SEARCH_VIDEO_INIT:
      return {
        ...state,
        videos,
        loading,
        error,
      };

    case Types.SEARCH_VIDEO_SUCCESS:
      return {
        ...state,
        videos,
        loading,
        error,
      };

    case Types.SEARCH_VIDEO_ERROR:
      return {
        ...state,
        videos,
        loading,
        error,
      };

    default:
      return state;
  }
}

//Action Creators
export const searchVideoInit = () => {
  return {
    type: Types.SEARCH_VIDEO_INIT,
    videos: [],
    loading: true,
    error: false,
  };
};

export const searchVideoSuccess = (videosList) => {
  return {
    type: Types.SEARCH_VIDEO_SUCCESS,
    videos: videosList,
    loading: false,
    error: false,
  };
};

export const searchVideoError = () => {
  return {
    type: Types.SEARCH_VIDEO_ERROR,
    videos: [],
    loading: false,
    error: true,
  };
};

export const searchVideoAsync = (searchTerm) => {
  return {
    type: Types.SEARCH_VIDEO_ASYNC,
    searchTerm: searchTerm,
  };
};
