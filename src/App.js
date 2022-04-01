import React, { useState } from 'react';
import classes from './App.module.css';
import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      title: 'Do the chores',
      id: 1,
    },
    { title: 'Laundry', id: 2 },
    { title: 'Pay the bills', id: 3 },
  ]);
  const addTaskHandler = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };
  const deleteTaskHandler = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };
  let content = <p>No tasks found.</p>;
  if (tasks.length > 0) {
    content = <Tasks items={tasks} onDeleteItem={deleteTaskHandler} />;
  }
  return (
    <div className={classes.app}>
      <h1 className={classes.app__title}>To-do list</h1>
      {content}
      <NewTask onAddTaskData={addTaskHandler} />
    </div>
  );
};

export default App;
