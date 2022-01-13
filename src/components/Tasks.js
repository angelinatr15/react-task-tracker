const Task = (props) => {
  return (
    <div>
      {props.tasks.map((task) => (
        <h3 key={task.id}>
          {task.text} task={task}
        </h3>
      ))}
    </div>
  );
};

export default Task;
