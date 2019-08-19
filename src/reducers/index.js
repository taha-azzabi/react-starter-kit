import { combineReducers } from 'redux';

import user from './user';
import comments from './comments';

const rootReducer = combineReducers({
  user,
  comments,
});

export default rootReducer;
