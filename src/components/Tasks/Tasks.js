import TaskItem from './TaskItem';
import classes from './Tasks.module.css';

const Tasks = (props) => {
  return (
    <div className={classes.tasks}>
      {props.items.map((task) => (
        <TaskItem
          title={task.title}
          key={task.id}
          id={task.id}
          onDelete={props.onDeleteItem}
        />
      ))}
    </div>
  );
};

export default Tasks;
