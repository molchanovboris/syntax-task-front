import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

// Fixed добавил const elements
const TasksList = ({ tasks, changeTaskStatus, removeTask }) => {
  try {
    const elements = tasks.map((task) => {
      return (
        <li>
          <Task
            key={task._id}
            task={task}
            changeTaskStatus={changeTaskStatus}
            removeTask={removeTask}
          />
        </li>
      );
    })
    return (
      <ul>{elements}</ul>);
  } catch (error) {
    console.log(error);
  }
};

TasksList.propTypes = {
  tasks: PropTypes.instanceOf(Array).isRequired,
  changeTaskStatus: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};

export default TasksList;
