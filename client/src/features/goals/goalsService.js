import axios from 'axios';

const API_URL = '/api/goals/';

export const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(API_URL, config);
  console.log(`res = `, res);
  return res.data;
};

export const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.post(API_URL, goalData, config);

  return res.data;
};

export const deleteGoal = async (goalId, token) => {
  console.log(`goalId = `, goalId);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(`${API_URL}${goalId}`);
  const res = await axios.delete(`${API_URL}${goalId}`, config);
  console.log(res.data);
  return res.data;
};

export const updateGoal = async (id, goalData) => {
  return await axios.post(`API_URL/:${id}`, goalData);
};
