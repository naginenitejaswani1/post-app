import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CreatePost from './components/CreatePost';
import PostsDisplay from './components/PostsDisplay';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CreatePost />
        <PostsDisplay />
      </div>
    </Provider>
  );
};

export default App;
