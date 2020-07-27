import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    //validation
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'User exists') {
      setAlert(error);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    //validation
    if (name === '' || email === '' || password === '') {
      setAlert('Please Fill in the Required Fields');
    } else if (password !== password2) {
      setAlert('Password is Incorrect');
    } else {
      //validation clears login
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div style={{ color: 'white' }}>
      <h1>Account Register</h1>
      {/* //form */}
      <form onSubmit={onSubmit}>
        {/* //name */}
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' value={name} onChange={onChange} />
        </div>
        {/* //email */}
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>
        {/* //password */}
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            minLength='8'
          />
        </div>
        {/* //password confirmation */}
        <div>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            minLength='8'
          />
        </div>
        {/* //submit register */}
        <input
          type='submit'
          value='Register'
          className='btn waves-effect waves-light'
        />
      </form>
    </div>
  );
};

export default Register;
