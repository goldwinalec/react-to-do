import React, { useState } from 'react';
import classes from './NewTask.module.css';
import TaskForm from './TaskForm';
import addIcon from '../../assets/images/icons/add-icon.svg';
import useFetch from './../../hooks/use-fetch';

const NewTask = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const { error, sendRequest: sendTaskRequest } = useFetch();

  const fetchTaskHandler = async (taskText) => {
    const createTask = (taskText, taskData) => {
      const generatedId = taskData.name;
      const createdTask = { id: generatedId, title: taskText };

      props.onAddTaskData(createdTask);
    };
    sendTaskRequest(
      {
        url: 'https://todo-cae95-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
        method: 'POST',
        body: { title: taskText },
        headers: { 'Content-Type': 'application/json' },
      },
      createTask.bind(null, taskText)
    );
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
          onSaveTaskData={fetchTaskHandler}
          onCancel={onCanselEditingHandler}
        />
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default NewTask;
