import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import Spinner from '../components/Spinner';
// import { register } from '../features/auth/authService';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

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

  const handleForm = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      console.log('here!');
      const userData = {
        name,
        email,
        password,
      };
      console.log(userData);
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className='form'>
        <form onSubmit={handleForm}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              name='name'
              id='name'
              value={name}
              placeholder='enter your name'
              onChange={handleChange}
            />
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
            <input
              type='password2'
              className='form-control'
              name='password2'
              id='password2'
              value={password2}
              placeholder='confirm your password'
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
