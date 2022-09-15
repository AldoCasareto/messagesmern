import React, { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  console.log(`formData = `, formData);

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt />
          Login
        </h1>
        <p>login into your account</p>
      </section>
      <section className='form'>
        <form onSubmit={handleForm}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              name='email'
              id='email'
              value={email}
              placeholder='enter your email'
              onChange={handleChange}
            />
            <input
              type='password'
              className='form-control'
              name='password'
              id='password'
              value={password}
              placeholder='enter your password'
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Log-in</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
