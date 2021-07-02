//Action Types
export const Types = {
  REPRODUCE_VIDEO: 'REPRODUCE_VIDEO',
};

//Reducer
export const INITIAL_STATE = {
  video: {},
};

export default function reducer(state = INITIAL_STATE, { type, video }) {
  if (type === Types.REPRODUCE_VIDEO) {
    return {
      ...state,
      video,
    };
  }

  return {
    ...state,
  };
}

//Action Creators
export const reproduceVideo = (video) => {
  return {
    type: Types.REPRODUCE_VIDEO,
    video,
  };
};
