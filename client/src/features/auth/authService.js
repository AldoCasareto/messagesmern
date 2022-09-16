import axios from 'axios';

const API_URL = '/api/users';

export const register = async (userData) => {
  console.log('userData', userData);

  const res = await axios.post(API_URL, userData);

  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data));
  }
  return res.data;
};

export const login = async (userData) => {
  const res = await axios.post(`${API_URL}/login`, userData);

  console.log(`userData = `, userData);

  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data));
  }

  console.log(res.data);

  return res.data;
};

export const logout = async () => {
  localStorage.removeItem('user');
};
