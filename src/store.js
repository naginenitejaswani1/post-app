/* import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
*/


// src/store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Correct import
import rootReducer from './reducers'; // Ensure this path is correct

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;


