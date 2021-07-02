import reducer, {
  INITIAL_STATE,
  reproduceVideo,
  Types,
} from '../../../redux/modules/reproduce-video';

const dirtyState = {
  video: {
    id: '2',
    title: 'example',
    content: 'ahdsjakdhskaj',
  },
};

describe('testing reproduce video creators', () => {
  it('should create reproduce video action correctly', () => {
    const fakeVideo = {
      id: '1',
      title: 'titleExample',
      content: 'as@!$!!$1asda;;as,d',
    };

    const expectedResult = {
      type: Types.REPRODUCE_VIDEO,
      video: fakeVideo,
    };

    expect(reproduceVideo(fakeVideo)).toStrictEqual(expectedResult);
  });
});

describe('testing reproduce video reducer', () => {
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

  it('should return new state after reproduce video action', () => {
    const fakeVideo = {
      id: '3',
      title: 'title example 3',
      content: '2342324fsdf',
    };

    const expectedResult = {
      video: fakeVideo,
    };

    const action = reproduceVideo(fakeVideo);

    expect(reducer(dirtyState, action)).toStrictEqual(expectedResult);
  });
});
