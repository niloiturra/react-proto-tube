import { combineReducers } from 'redux';

import searchVideo from './search-video';
import reproduceVideo from './reproduce-video';

const rootReducer = combineReducers({
  searchVideo,
  reproduceVideo,
});

export default rootReducer;
