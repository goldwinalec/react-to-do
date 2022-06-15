import TaskItem from './TaskItem';
import classes from './Tasks.module.css';

const Tasks = (props) => {
  return (
    <div className={classes.tasks}>
      {props.items.map((task) => (
        <TaskItem
          task={task}
          title={task.title}
          key={task.id}
          id={task.id}
          isDone={task.done}
          onDelete={props.onDeleteItem}
          onToggle={props.onToggle}
        />
      ))}
    </div>
  );
};

export default Tasks;
