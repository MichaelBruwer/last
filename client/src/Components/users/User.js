import React, { Fragment, useEffect, useContext } from 'react';

import { Link } from 'react-router-dom';
import ApiContext from '../../context/Api/apiContext';

// //comments
import Comments from '../Comments/Comment';
import CommentForm from '../Comments/CommentForm';

const User = ({ match }) => {
  const apiContext = useContext(ApiContext);

  const { getUser, user, getUserProfile } = apiContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserProfile(match.params.login);
    // eslint-disable-next-line
  }, []);

  const { name, company, avatar_url, bio, blog } = user;

  return (
    <Fragment>
      <Link to='/SR' className='waves-effect waves-light btn-small'>
        Back to Search
      </Link>
      <div
        className='card  pfbg blue lighten-4  center'
        style={{ color: 'white' }}
      >
        <div>
          <img
            src={avatar_url}
            className='circle'
            alt='Profilepic'
            style={{ width: '150px' }}
          />
          <h3>{name}</h3>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h5>Bio</h5>
              <p>{bio}</p>
            </Fragment>
          )}

          <ul>
            <li>
              {company && (
                <Fragment>
                  <b> Company:</b>
                  <br />
                  {company}
                </Fragment>
              )}
            </li>
          </ul>
          <ul>
            <li>
              {blog && (
                <Fragment>
                  <b>Website:</b>
                  <br />
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      {/* //comment s */}
      <div>
        <Comments />
      </div>
      <div>
        <CommentForm />
      </div>
      

      {/* //com stop */}

      {/* rateing */}
      {/* <div id='star'>
        <star />
      </div> */}
      <Link to='/SR' className='waves-effect waves-light btn-small'>
        Back to Search
      </Link>
    </Fragment>
  );
};

export default User;
