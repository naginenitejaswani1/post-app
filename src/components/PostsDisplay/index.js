import React from 'react';
import { useSelector } from 'react-redux';
import PostItem from '../PostItem';
import './index.css'

const PostsDisplay = () => {
  const posts = useSelector(state => state.posts.posts);

  return (
    <div className='posts-wrapper'>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsDisplay;


