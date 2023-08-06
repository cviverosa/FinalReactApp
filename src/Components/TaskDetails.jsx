import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const TaskDetails = ({ tasks, setTasks }) => {
  const history = useHistory(); // Use useHistory hook
  const { id } = useParams();
  const task = tasks.find((task) => task.id === Number(id));

  const handleEdit = () => {
    history.push(`/update/${id}`);
  };

  const handleDeleteTask = () => {
    const isConfirmed = window.confirm('Are you sure you want to delete this task?');

    if (isConfirmed) {
      const updatedTasks = tasks.filter((task) => task.id !== Number(id));
      setTasks(updatedTasks);
      history.push('/tasks-by-status');
    }
  };

  if (!task) {
    return <div>Task not found.</div>;
  }

  return (
    <div>
      <h2>{task.name}</h2>
      <p>Description: {task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.status}</p>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDeleteTask}>Delete</button>
      </div>
    </div>
  );
};

export default TaskDetails;
