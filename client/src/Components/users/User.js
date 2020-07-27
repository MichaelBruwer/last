import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../Layout/Spinner';

import { Link } from 'react-router-dom';
import ApiContext from '../../context/Api/apiContext';

import Commentsec from '../Comments/Commentsec';

const User = ({ match }) => {
  const apiContext = useContext(ApiContext);

  const { getUser, loading, user, getUserRepos } = apiContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const { name, company, avatar_url, location, bio, blog } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='waves-effect waves-light btn-small'>
        Back to Search
      </Link>
      <div className='card grid-2 blue lighten-4'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='circle'
            alt='Profilepic'
            style={{ width: '150px' }}
          />
          <h3>{name}</h3>
          <p>Location:{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}

          <ul>
            <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong>
                  {company}
                </Fragment>
              )}
            </li>
          </ul>
          <ul>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website:</strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <Commentsec />
    </Fragment>
  );
};

export default User;
