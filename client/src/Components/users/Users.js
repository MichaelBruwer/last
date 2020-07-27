import React, { useContext } from 'react';
import UserItem from './UserItem';

import ApiContext from '../../context/Api/apiContext';

const Users = () => {
  const apiContext = useContext(ApiContext);

  const { users } = apiContext;

  return (
    // getting users from api in a grid style
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

// Styleing for maped users
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
