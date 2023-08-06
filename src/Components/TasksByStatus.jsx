import React from 'react';
import { Link } from 'react-router-dom';
import TaskList from './TaskList';
import '../styling/Header.css';

const TaskStatus = ({ tasks, setTasks }) => {
  const groupTasksByStatus = () => {
    const tasksByStatus = {
      todo: [],
      inProgress: [],
      done: [],
    };

    tasks.forEach((task) => {
      tasksByStatus[task.status].push(task);
    });

    return tasksByStatus;
  };

  const tasksByStatus = groupTasksByStatus();

  const getStatusColor = (status) => {
    const statusColors = {
      todo: 'orange',
      inProgress: 'blue',
      done: 'green',
    };

    return statusColors[status] || 'gray';
  };

  return (
    <div>
      <h2>Task Status Page</h2>
      {Object.keys(tasksByStatus).map((status) => (
        <div
          key={status}
          style={{ border: `2px solid ${getStatusColor(status)}`, padding: '10px', marginBottom: '20px' }}
        >
          <h2 style={{ color: getStatusColor(status) }}>{status.toUpperCase()}</h2>
          <TaskList tasks={tasksByStatus[status]} setTasks={setTasks} />
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;
