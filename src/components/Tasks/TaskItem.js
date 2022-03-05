import './TaskItem.css';

const TaskItem = (props) => {
  return <div className='tasks__item'>{props.title}</div>;
};

export default TaskItem;
