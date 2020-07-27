import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className='card circle pink lighten-4'>
      <img
        src={avatar_url}
        alt=''
        className='circle'
        style={{ width: '60px' }}
      />
      {/* Dsplaying name */}
      <h5>{login}</h5>
      {/* Link to user profile */}
      <div>
        <Link to={`/user/${login}`} className='waves-effect waves-light btn '>
          Full Profile
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: propTypes.object.isRequired,
};

export default UserItem;
