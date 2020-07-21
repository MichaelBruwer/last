import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;

  const { register, error, clearErrors } = authContext;

  useEffect(() => {
    if (error === 'User already exists') {
      setAlert(error, 'Danger');
      clearErrors();
    }
  }, [error]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    type: '',
  });

  const { name, email, password, password2, type } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || type === '') {
      setAlert('Please Fill in the Required Fields', 'Danger');
    } else if (password !== password2) {
      setAlert('Password is Incorrect', 'Danger');
      // } else if (type !== 'Personal' || type !== 'Company') {
      //   setAlert('Please choose Personal or Company', 'Danger');
    } else {
      register({
        name,
        email,
        password,
        type,
      });
    }
  };

  return (
    <div className='form-container'>
      <h1>Account Register</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' value={name} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            minLength='8'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            minLength='8'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='type'>Type</label>
          <input type='text' name='type' value={type} onChange={onChange} />
        </div>
        <input type='submit' value='Register' className='btn btn-block' />
      </form>
    </div>
  );
};

export default Register;
