import classes from './TaskItem.module.css';
import deleteIcon from '../../assets/images/icons/remove-icon.svg';
import doneIcon from '../../assets/images/icons/done-icon.svg';

const TaskItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <div className={classes.tasks__item}>
      {props.title}
      <button className={classes.tasks__btn} onClick={deleteHandler}>
        <img src={deleteIcon} alt='Delete task' />
      </button>
      <button className={classes.tasks__btn}>
        <img src={doneIcon} alt='Task done' />
      </button>
    </div>
  );
};

export default TaskItem;
