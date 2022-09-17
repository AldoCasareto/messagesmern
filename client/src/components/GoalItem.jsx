import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice';

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteGoal(goal._id));
  };
  return (
    <div className='goal'>
      <div>{new Date(goal.createdAt).toLocaleString('de-DE')}</div>
      <h2>{goal.text}</h2>
      {/* <button onClick={() => handleDelete(goal._id)}>Delete</button> */}
      <button className='close' onClick={handleDelete}>
        X
      </button>
    </div>
  );
};

export default GoalItem;
