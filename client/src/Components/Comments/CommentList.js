import React from 'react';
import Comment from './Comment';

export default function CommentList(props) {
  return (
    <div>
      <h5 className='center' style={{ color: 'white' }}>
        Comments {props.comments.length > 0 ? 's' : ''}
        <span>{props.comments.length}</span>
      </h5>

      {props.comments.length === 0 && !props.loading ? (
        <div className='center' style={{ color: 'white' }}>
          Be the first to comment
        </div>
      ) : null}

      {props.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}
