import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CommentContext from '../../context/Comment/commentContext';

const CommentItem = ({ comment }) => {
  const commentContext = useContext(CommentContext);
  const { deleteComment, setCurrent, clearCurrent } = commentContext;

  const { _id, name, message } = comment;

  const onDelete = () => {
    deleteComment(_id);
    clearCurrent();
  };

  return (
    <div className='card '>
      <h3 className='left-align'>{name}</h3>
      <ul>{message && <li>{message}</li>}</ul>

      <p>
        <button
          className='waves-effect waves-light btn'
          onClick={() => setCurrent(comment)}
        >
          Edit
        </button>
        <button className='waves-effect waves-light btn' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default CommentItem;
