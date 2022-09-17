import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGoal, reset } from '../features/goals/goalSlice';

const GoalForm = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({ text }));
    setText('');
  };

  return (
    <section className='form'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Goal</label>
          <input
            type='text'
            id='text'
            name='goal'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='set your goal'
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Create
          </button>
        </div>
      </form>
    </section>
  );
};

export default GoalForm;
