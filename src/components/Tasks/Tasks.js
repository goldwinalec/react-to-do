import TaskItem from './TaskItem';
import './Tasks.css';

const Tasks = () => {
  const tasks = [
    {
      title: 'Do the chores',
    },
    { title: 'Laundry' },
    { title: 'Pay the bills' },
  ];
  return (
    <div className='tasks'>
      <TaskItem title={tasks[0].title} />
      <TaskItem title={tasks[1].title} />
      <TaskItem title={tasks[2].title} />
    </div>
  );
};

export default Tasks;
