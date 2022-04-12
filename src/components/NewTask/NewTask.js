import React, { useState, useEffect, useCallback } from 'react';
import classes from './NewTask.module.css';
import TaskForm from './TaskForm';
import addIcon from '../../assets/images/icons/add-icon.svg';

const NewTask = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const fetchTaskHandler = useCallback(async (taskText) => {
    try {
      const response = await fetch(
        'https://react-http-a9de5-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
        {
          method: 'POST',
          body: JSON.stringify({ title: taskText }),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (!response.ok) {
        throw new Error('Request failed.');
      }
      const data = await response.json();

      const generatedId = data.name;
      const createdTask = { id: generatedId, title: taskText };
      props.onAddTaskData(createdTask);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please, reload the page.');
    }
  }, []);
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
          onSaveTaskData={fetchTaskHandler}
          onCancel={onCanselEditingHandler}
        />
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default NewTask;
