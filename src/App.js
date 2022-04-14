import React, { useState, useEffect } from 'react';
import classes from './App.module.css';
import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';
// import useFetch from './hooks/use-fetch';

const App = () => {
  // const [tasks, setTasks] = useState([]);
  // const { error, sendRequest: fetchTasks } = useFetch();

  // useEffect(() => {
  //   const transformTasks = (taskObj) => {
  //     const loadedTasks = [];

  //     for (const taskKey in taskObj) {
  //       loadedTasks.push({ id: taskKey, title: taskObj[taskKey].title });
  //     }

  //     setTasks(loadedTasks);
  //   };

  //   fetchTasks(
  //     ({
  //       url: 'https://react-http-a9de5-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
  //     },
  //     transformTasks)
  //   );
  // }, [fetchTasks]);

  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    setError(null);
    try {
      const response = await fetch(
        'https://react-http-a9de5-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, title: data[taskKey].title });
      }

      setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

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
    content = (
      <Tasks
        items={tasks}
        onDeleteItem={deleteTaskHandler}
        error={error}
        onFetch={fetchTasks}
      />
    );
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
