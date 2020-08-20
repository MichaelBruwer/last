import React, { Fragment } from 'react';
import Users from '../users/Users';

const Home = () => {
  return (
    <Fragment>
      {/* Displaying user cards */}
      <Users />
      <h1 style={{ color: 'white' }}>Please do a Search</h1>
    </Fragment>
  );
};

export default Home;
