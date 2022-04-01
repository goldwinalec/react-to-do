import React, { useState, useEffect } from 'react';
import classes from './NewTask.module.css';
import TaskForm from './TaskForm';
import addIcon from '../../assets/images/icons/add-icon.svg';

const NewTask = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveTaskDataHandler = (enteredTaskData) => {
    const id = Math.floor(Date.now() / 1000);
    const taskData = {
      ...enteredTaskData,
      id: id,
    };
    props.onAddTaskData(taskData);
  };
  const onEditingHandler = () => {
    setIsEditing(true);
  };
  const onCanselEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className={classes.task}>
      {!isEditing && (
        <button className={classes['task__btn-add']} onClick={onEditingHandler}>
          <img src={addIcon} alt='Add task' />
        </button>
      )}
      {isEditing && (
        <TaskForm
          onSaveTaskData={saveTaskDataHandler}
          onCancel={onCanselEditingHandler}
        />
      )}
    </div>
  );
};

export default NewTask;
