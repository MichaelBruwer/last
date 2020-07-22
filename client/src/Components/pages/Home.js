import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, []);

  return (
    <div>
      <h1>this is the homepage</h1>
    </div>
  );
};

export default Home;
