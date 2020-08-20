import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import CommentItem from './CommentItem';
import Spinner from '../Layout/Spinner';
import CommentContext from '../../context/Comment/commentContext';

const Comments = () => {
  const commentContext = useContext(CommentContext);

  const { comments, getComments, loading } = commentContext;

  useEffect(() => {
    getComments();
    // eslint-disable-next-line
  }, []);

  if (comments !== null && comments.length === 0 && !loading) {
    return <h4 style={{ color: 'black' }}>Please add a comment</h4>;
  }

  return (
    <Fragment>
      {comments !== null ? (
        comments.map((comment) => (
          <CSSTransition key={comment._id} timeout={500}>
            <CommentItem comment={comment} />
          </CSSTransition>
        ))
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Comments;
