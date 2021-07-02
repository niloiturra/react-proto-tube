import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import SearchBar from '../../components/SearchBar';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
// eslint-disable-next-line jest/no-mocks-import
import { createTestStore } from '../../__mocks__/mock-store';

Enzyme.configure({ adapter: new Adapter() });

let store;
describe('testing SearchBar component render', () => {
  beforeEach(() => {
    store = createTestStore();
  });

  it('should render SearchBar component correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
