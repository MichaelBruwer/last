import React from 'react';
import { Link } from 'react-router-dom';

const Searchbar = () => {
  return (
    <nav className='purple lighten-2'>
      <div className='nav-wrapper'>
        <ul id='nav-mobile' className='left hide-on-med-and-down'>
          <li>
            <form className='left-align'>
              <div className='input-field'>
                <input id='search' type='search' required />
                <label className='label-icon' for='search'>
                  <i className='material-icons'>search</i>
                </label>
                <i className='material-icons'>close</i>
              </div>
            </form>
          </li>
        </ul>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='sass.html'>Home</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Searchbar;
