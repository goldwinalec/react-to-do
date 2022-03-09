import './NewTask.css';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const saveTaskDataHandler = (enteredTaskData) => {
    const id = Math.floor(Date.now() / 1000);
    const taskData = {
      ...enteredTaskData,
      id: id,
    };
    props.onAddTaskData(taskData);
  };
  return (
    <div className='task'>
      <TaskForm onSaveTaskData={saveTaskDataHandler} />
    </div>
  );
};

export default NewTask;
