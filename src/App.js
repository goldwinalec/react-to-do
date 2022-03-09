import React, { useState } from 'react';
import './App.css';
import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';

const DUMMY_TASKS = [
  {
    title: 'Do the chores',
    id: 1,
  },
  { title: 'Laundry', id: 2 },
  { title: 'Pay the bills', id: 3 },
];
const App = () => {
  const [tasks, setTasks] = useState(DUMMY_TASKS);
  const addTaskHandler = (task) => {
    setTasks((prevTasks) => [task, ...prevTasks]);
  };
  return (
    <div className='App'>
      <h1 className='App__title'>To-do list</h1>
      <NewTask onAddTaskData={addTaskHandler} />
      <Tasks items={tasks} />
    </div>
  );
};

export default App;
