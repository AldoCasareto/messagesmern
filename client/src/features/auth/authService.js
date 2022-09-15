import axios from 'axios';

const API_URL = '/api/users';

export const register = async (userData) => {
  console.log('userData', userData);

  const res = await axios.post(API_URL, userData);
  console.log(`res = `, res);

  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data));
  }
  console.log(res.data);
  return res.data;
};

export const login = async () => {
  console.log('clicked');
};

export const logout = async () => {
  console.log('clicked');
};
