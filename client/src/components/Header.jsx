import React from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <header className='header'>
      <div className='logo'>
        <Link>Goal Setter</Link>
      </div>
      <ul>
        {user ? (
          <button
            onClick={() => {
              dispatch(logout());
              dispatch(reset());
              navigate('/');
            }}
            className='btn'
          >
            <FaSignOutAlt />
            Logout
          </button>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/registration'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
