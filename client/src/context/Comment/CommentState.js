import React, { useReducer } from 'react';
import axios from 'axios';
import CommentContext from './commentContext';
import commentReducer from './commentReducer';
import {
  GET_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_COMMENT,
  CLEAR_COMMENTS,
  COMMENT_ERROR,
} from '../types';

const CommentState = (props) => {
  const initialState = {
    comments: null,
    current: null,
    error: null,
  };

  const [state, dispatch] = useReducer(commentReducer, initialState);

  // Get Comments
  const getComments = async () => {
    try {
      const res = await axios.get('/api/comments');

      dispatch({
        type: GET_COMMENTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: COMMENT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Add Comment
  const addComment = async (comment) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/comments', comment, config);

      dispatch({
        type: ADD_COMMENT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: COMMENT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Delete Comment
  const deleteComment = async (id) => {
    try {
      await axios.delete(`/api/comments/${id}`);

      dispatch({
        type: DELETE_COMMENT,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: COMMENT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Update Comment
  const updateComment = async (comment) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(
        `/api/comments/${comment._id}`,
        comment,
        config
      );

      dispatch({
        type: UPDATE_COMMENT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: COMMENT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Clear Comments
  const clearComments = () => {
    dispatch({ type: CLEAR_COMMENTS });
  };

  // Set Current Comment
  const setCurrent = (comment) => {
    dispatch({ type: SET_CURRENT, payload: comment });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  return (
    <CommentContext.Provider
      value={{
        comments: state.comments,
        current: state.current,
        error: state.error,
        addComment,
        deleteComment,
        setCurrent,
        clearCurrent,
        updateComment,
        getComments,
        clearComments,
      }}
    >
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentState;
