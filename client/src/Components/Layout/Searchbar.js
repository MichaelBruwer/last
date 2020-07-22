import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Searchbar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const LogedLinks = (
    <Fragment>
      <li>Welcome{user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          Sign Out <span className='hide-on-med-and-down'></span>
        </a>
      </li>
    </Fragment>
  );

  const UnlogedLinks = (
    <Fragment>
      <li>
        <Link to='sass.html'>Home</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <nav className='purple lighten-2'>
      <div className='nav-wrapper'>
        <ul id='nav-mobile' className='left hide-on-med-and-down'>
          <li>
            <form className='left-align'>
              <div className='input-field'>
                <input id='search' type='search' required />
                <label className='label-icon' htmlFor='search'>
                  <i className='material-icons'>search</i>
                </label>
                <i className='material-icons'>close</i>
              </div>
            </form>
          </li>
        </ul>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          {isAuthenticated ? LogedLinks : UnlogedLinks}
        </ul>
      </div>
    </nav>
  );
};

export default Searchbar;
