import React, { useState, useEffect } from 'react';
import classes from './App.module.css';
import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';
import useFetch from './hooks/use-fetch';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const { error, sendRequest: fetchTasks, isLoading } = useFetch();

  useEffect(() => {
    const transformTasks = (taskObj) => {
      const loadedTasks = [];

      for (const taskKey in taskObj) {
        loadedTasks.push({
          id: taskKey,
          title: taskObj[taskKey].title,
          done: taskObj[taskKey].done,
        });
      }
      setTasks(loadedTasks);
    };
    fetchTasks(
      {
        url: 'https://todo-cae95-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
      },
      transformTasks
    );
  }, [fetchTasks]);

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };
  const deleteTaskHandler = (taskId) => {
    const updateTasks = setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
    const url = `https://todo-cae95-default-rtdb.europe-west1.firebasedatabase.app/tasks/${taskId}.json`;
    fetchTasks(
      {
        url: url,
        method: 'DELETE',
      },
      updateTasks
    );
  };
  const toggleTaskHandler = async (task) => {
    const updateTasks = () => {
      setTasks((prevTasks) => {
        return prevTasks.map((prevTask) => {
          if (prevTask.id === task.id) {
            prevTask.done = !prevTask.done;
          }
          return prevTask;
        });
      });
    };
    fetchTasks(
      {
        url: `https://todo-cae95-default-rtdb.europe-west1.firebasedatabase.app/tasks/${task.id}.json`,
        method: 'PATCH',
        body: {
          done: !task.done,
        },
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
      updateTasks
    );
  };
  let content = <p>No tasks found.</p>;
  if (tasks.length > 0) {
    content = (
      <Tasks
        items={tasks}
        onDeleteItem={deleteTaskHandler}
        onToggle={toggleTaskHandler}
        error={error}
        onFetch={fetchTasks}
      />
    );
  } else if (tasks.length === 0 && isLoading) {
    content = <p>Loading...</p>;
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
