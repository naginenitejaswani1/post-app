import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editPost } from '../../actions/postActions';
import './index.css'

const PostItem = ({ post }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedContent, setEditedContent] = useState(post.content);
  const dispatch = useDispatch();

  const handleSave = () => {
    const updatedPost = { ...post, title: editedTitle, content: editedContent };
    dispatch(editPost(updatedPost));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(post.title);
    setEditedContent(post.content);
    setIsEditing(false);
  };

  return (
    <div className='content-container'>
      {isEditing ? (
        <form>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button className='button' onClick={handleSave}>Save</button>
          <button className='button-cancel' onClick={handleCancel}>Cancel</button>
        </form>
      ) : (
        
        <div>
          <h3 className='title'>{post.title}</h3>
          <p className='description'>{post.content}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
        
      )}
    </div>
  );
};

export default PostItem;
