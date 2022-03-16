import React, { useState } from 'react';
import './App.css';
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
  return (
    <div className='App'>
      <h1 className='App__title'>To-do list</h1>
      <Tasks items={tasks} />
      <NewTask onAddTaskData={addTaskHandler} />
    </div>
  );
};

export default App;
