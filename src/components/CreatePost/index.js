import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../actions/postActions';
import './index.css'
import bgImage from '../../assets/bg-image.avif'

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content
    };
    dispatch(addPost(newPost));
    setTitle('');
    setContent('');
    
  };

  return (
    <div className='left-container'>
        <img src={bgImage} alt='' />
        <div className='right-container'>
            <div>
            <h1 className='heading'>Create Posts Pro</h1>
            </div>
            
        
            
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <button type="submit">Create Post</button>
          </form>
          </div>
    </div>
  );
};

export default CreatePost;
