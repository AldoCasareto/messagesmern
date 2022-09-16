import React, { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { reset, login } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
      toast.success(message);
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    console.log(formData);
  };

  if (isLoading) {
    return <Spinner />;
  }

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
