import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ApiContext from '../../context/Api/apiContext';
import AlertContext from '../../context/alert/alertContext';

const Searchbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  //Search
  const apicontext = useContext(ApiContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  //OnSubmit
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert(' Enter something');
    } else {
      apicontext.searchUsers(text);
      setText('');
    }
  };
  const onChange = (e) => setText(e.target.value);

  //Logout
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
      <li>
        <Link to='/'>Home</Link>
      </li>
    </Fragment>
  );

  const UnlogedLinks = (
    <Fragment>
      <li>
        <Link to='/'>Home</Link>
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
            <form onSubmit={onSubmit} className='left-align'>
              <input
                type='text'
                name='text'
                placeholder='Search Users...'
                value={text}
                onChange={onChange}
              />
              <input
                type='submit'
                value='Search'
                className='btn btn-dark btn-block hide'
              />
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
