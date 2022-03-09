import TaskItem from './TaskItem';
import './Tasks.css';

const Tasks = (props) => {
  return (
    <div className='tasks'>
      {props.items.map((task) => (
        <TaskItem title={task.title} key={task.id} />
      ))}
    </div>
  );
};

export default Tasks;
