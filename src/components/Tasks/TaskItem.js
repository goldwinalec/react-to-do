import classes from './TaskItem.module.css';
import deleteIcon from '../../assets/images/icons/remove-icon.svg';
import doneIcon from '../../assets/images/icons/done-icon.svg';

const TaskItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  const toggleHandler = () => {
    props.onToggle(props.task);
  };
  return (
    <div
      className={`${classes.tasks__item} ${
        props.task.done ? classes['tasks__item--done'] : ''
      }`}>
      {props.title}
      <button className={classes.tasks__btn} onClick={deleteHandler}>
        <img src={deleteIcon} alt='Delete task' />
      </button>
      <button className={classes.tasks__btn} onClick={toggleHandler}>
        <img src={doneIcon} alt='Set as done' />
      </button>
    </div>
  );
};

export default TaskItem;
