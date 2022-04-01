import React, { useState, useRef } from 'react';

import classes from './TaskForm.module.css';
import cancelIcon from '../../assets/images/icons/cancel-icon.svg';
import submitIcon from '../../assets/images/icons/done-icon.svg';

const TaskForm = (props) => {
  const [enteredTask, setEnteredTask] = useState('');
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef();
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
      inputRef.current.focus();
      return;
    }
    props.onSaveTaskData(taskData);
    props.onCancel();
    setEnteredTask('');
  };
  return (
    <form
      className={`${classes.task__form} ${
        !isValid ? classes['task__form--invalid'] : ''
      }`}
      onSubmit={submitHandler}>
      <input
        className={classes.task__input}
        type='text'
        placeholder='Write here'
        value={enteredTask}
        minLength='1'
        maxLength='25'
        onChange={taskChangeHandler}
        ref={inputRef}
        autoFocus
      />
      <button
        className={classes.task__btn}
        type='button'
        onClick={props.onCancel}>
        <img src={cancelIcon} alt='Cancel' />
      </button>
      <button className={classes.task__btn} type='submit'>
        <img src={submitIcon} alt='Submit' />
      </button>
    </form>
  );
};

export default TaskForm;
