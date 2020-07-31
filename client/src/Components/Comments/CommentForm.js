import React, { useState, useContext, useEffect } from 'react';
import CommentContext from '../../context/Comment/commentContext';

const CommentForm = () => {
  const commentContext = useContext(CommentContext);

  const { addComment, updateComment, clearCurrent, current } = commentContext;

  useEffect(() => {
    if (current !== null) {
      setComment(current);
    } else {
      setComment({
        name: '',
        message: '',
      });
    }
  }, [commentContext, current]);

  const [comment, setComment] = useState({
    name: '',
    message: '',
  });

  const { name, message } = comment;

  const onChange = (e) =>
    setComment({ ...comment, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addComment(comment);
    } else {
      updateComment(comment);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit} style={{ color: 'white' }} className='comsec'>
      <h2>{current ? 'Edit Comment' : 'Add Comment'}</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='comment'
        name='message'
        value={message}
        onChange={onChange}
      />
      <div>
        <input
          type='submit'
          value={current ? 'Update Comment' : 'Add Comment'}
          className='waves-effect waves-light btn'
        />
      </div>
      {current && (
        <div>
          <button className='waves-effect waves-light btn' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default CommentForm;
