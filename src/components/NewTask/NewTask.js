import React, { useState } from 'react';
import './NewTask.css';
import TaskForm from './TaskForm';

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
    <div className='task'>
      {!isEditing && (
        <button className='task__btn-add' onClick={onEditingHandler}>
          &#43;
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
