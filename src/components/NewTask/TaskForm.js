import React, { useState } from 'react';

import './TaskForm.css';

const TaskForm = (props) => {
  const [enteredTask, setEnteredTask] = useState('');
  const [isValid, setIsValid] = useState(true);
  const taskChangeHandler = (evt) => {
    if (evt.target.value.trim().length > 0) setIsValid(true);
    setEnteredTask(evt.target.value);
  };
  const submitHandler = (evt) => {
    evt.preventDefault();

    const taskData = {
      title: enteredTask,
    };
    if (enteredTask.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onSaveTaskData(taskData);
    props.onCancel();
    setEnteredTask('');
  };
  return (
    <form
      className={`task__form ${!isValid ? 'task__form--invalid' : ''}`}
      onSubmit={submitHandler}>
      <input
        className='task__input'
        type='text'
        placeholder='Write here'
        value={enteredTask}
        minLength='1'
        maxLength='25'
        onChange={taskChangeHandler}
      />
      <button className='task__btn' type='button' onClick={props.onCancel}>
        &#10006;
      </button>
      <button className='task__btn' type='submit'>
        OK
      </button>
    </form>
  );
};

export default TaskForm;
