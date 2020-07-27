import React, { useContext } from 'react';
import UserItem from './UserItem';

import ApiContext from '../../context/Api/apiContext';

const Users = () => {
  const apiContext = useContext(ApiContext);

  const { users } = apiContext;

  return (
    // getting users from api in a grid style
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '1rem',
      }}
    >
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
