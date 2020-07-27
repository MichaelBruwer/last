import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    //validation
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Wrong Details') {
      setAlert(error);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    //preventing default state
    e.preventDefault();
    //validation
    if (email === '' || password === '') {
      setAlert('Fields cannot be Null or Empty');
    } else {
      //login with password and email if valid
      login({
        email,
        password,
      });
    }
  };

  return (
    <div style={{ color: 'white' }}>
      <h1>Account Login</h1>
      {/* //form */}
      <form onSubmit={onSubmit}>
        {/* //input email */}
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>
        {/* input password */}
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>
        {/* //submit */}
        <input
          type='submit'
          value='Login'
          className='btn waves-effect waves-light'
        />
      </form>
    </div>
  );
};

export default Login;
