import React, { useState } from 'react';

import './TaskForm.css';

const TaskForm = (props) => {
  const [enteredTask, setEnteredTask] = useState('');
  const taskChangeHandler = (evt) => {
    setEnteredTask(evt.target.value);
  };
  const submitHandler = (evt) => {
    evt.preventDefault();

    const taskData = {
      title: enteredTask,
    };
    props.onSaveTaskData(taskData);
    setEnteredTask('');
  };
  return (
    <form className='task__form' onSubmit={submitHandler}>
      <input
        className='task__input'
        type='text'
        placeholder='Write here'
        value={enteredTask}
        minLength='1'
        maxLength='25'
        onChange={taskChangeHandler}
      />
      <button className='task__btn' type='submit'>
        OK
      </button>
    </form>
  );
};

export default TaskForm;
