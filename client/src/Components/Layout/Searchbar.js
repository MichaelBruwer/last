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
    //preventing default
    e.preventDefault();
    if (text === '') {
      //cant be blank
      alertContext.setAlert(' Enter something');
    } else {
      //searching
      apicontext.searchUsers(text);
      setText('');
    }
  };
  const onChange = (e) => setText(e.target.value);

  //Logout
  const onLogout = () => {
    logout();
  };

  //Links that display when loged in
  const LogedLinks = (
    <Fragment>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>Welcome {user && user.name}</li>
      <li>
        {/* //logsout */}
        <a onClick={onLogout} href='/'>
          Sign Out
        </a>
      </li>
    </Fragment>
  );

  //Links that always display
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
      <div>
        {/* //nav and mobile search trigger  */}
        <a href='#!' data-target='mobile-demo' className='sidenav-trigger'>
          <i>menu</i>
        </a>
        <ul className='left hide-on-med-and-down'>
          {/* What to search */}
          <li>
            <form onSubmit={onSubmit} className='left-align'>
              <input
                type='text'
                name='text'
                placeholder='Search Users...'
                value={text}
                onChange={onChange}
              />
              {/* //submiting search */}
              <input
                type='submit'
                value='Search'
                className='btn waves-effect waves-light hide'
              />
            </form>
          </li>
        </ul>
        <ul className='right hide-on-med-and-down'>
          {isAuthenticated ? LogedLinks : UnlogedLinks}
        </ul>
      </div>
      {/* mobile navbar and search */}
      <ul className='sidenav  cyan lighten-4' id='mobile-demo'>
        <li>
          <form onSubmit={onSubmit} className='left-align'>
            <input
              type='text'
              name='text'
              placeholder='Search Users...'
              value={text}
              onChange={onChange}
            />
            {/* //submiting search */}
            <input
              type='submit'
              value='Search'
              className='btn waves-effect waves-light'
            />
          </form>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Searchbar;
