const savePostsToLocalStorage = (posts) => {
  localStorage.setItem('posts', JSON.stringify(posts));
};

// Action to add a new post
export const addPost = (post) => (dispatch, getState) => {
  dispatch({
    type: 'ADD_POST',
    payload: post,
  });

  // Save the updated posts to localStorage
  const { posts } = getState();
  savePostsToLocalStorage(posts.posts);
};

// Action to edit a post
export const editPost = (post) => (dispatch, getState) => {
  dispatch({
    type: 'EDIT_POST',
    payload: post,
  });

  // Save the updated posts to localStorage
  const { posts } = getState();
  savePostsToLocalStorage(posts.posts);
};
