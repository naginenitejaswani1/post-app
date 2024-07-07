/*import { combineReducers } from 'redux';
import postsReducer from '../postsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;

*/

// src/reducers/index.js
import { combineReducers } from 'redux';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;
