import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import VideoPlayer from '../../components/VideoPlayer';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
// eslint-disable-next-line jest/no-mocks-import
import { createTestStore } from '../../__mocks__/mock-store';

Enzyme.configure({ adapter: new Adapter() });

let store;
describe('testing VideoPlayer component render', () => {
  beforeEach(() => {
    store = createTestStore();
  });

  it('should render VideoPlayer component correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <VideoPlayer />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
