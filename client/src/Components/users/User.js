import React, { Fragment, useEffect, useContext } from 'react';

import { Link } from 'react-router-dom';
import ApiContext from '../../context/Api/apiContext';

import Commentsec from '../Comments/Commentsec';

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
      <div
        className='card  pfbg blue lighten-4  center'
        style={{ color: 'white' }}
      >
        <div className='all-center '>
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
      <Commentsec />
      {/* rateing */}
      <div id='star'>
        <star />
      </div>
      <Link to='/' className='waves-effect waves-light btn-small'>
        Back to Search
      </Link>
    </Fragment>
  );
};

export default User;
