import React, { useReducer } from 'react';
import axios from 'axios';
import ApiContext from './apiContext';
import ApiReducer from './apiReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const ApiState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(ApiReducer, initialState);

  //search users
  const searchUsers = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`,{headers: {'Access-Control-Allow-Origin': '*'}}
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  //get user
  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`,{headers: {'Access-Control-Allow-Origin': '*'}}
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //get profile
  const getUserProfile = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`,{headers: {'Access-Control-Allow-Origin': '*'}}
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  //clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  //set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ApiContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserProfile,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiState;
