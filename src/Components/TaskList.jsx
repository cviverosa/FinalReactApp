import React from 'react';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks, setTasks }) => {
    const handleDeleteTask = (taskId) => {
      const isConfirmed = window.confirm('Are you sure you want to delete this task?');
  
      if (isConfirmed) {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
      }
    };
  
    return (
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.name} - {task.status}
              <Link to={`/task/${task.id}`}>Edit</Link>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TaskList;