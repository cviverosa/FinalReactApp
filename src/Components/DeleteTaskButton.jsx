import React from 'react';
import { useHistory } from 'react-router-dom';
import tasksData from './data/tasksData';

const DeleteTaskButton = ({ taskId }) => {
  const history = useHistory();

  const handleDelete = () => {
    const isConfirmed = window.confirm('Are you sure you want to delete this task?');

    if (isConfirmed) {
      // Find the index of the task with the specified ID in the tasksData array
      const taskIndex = tasksData.findIndex((task) => task.id === taskId);

      if (taskIndex !== -1) {
        // Remove the task from the tasksData array using the splice method
        tasksData.splice(taskIndex, 1);

        // Log the updated tasksData to the console (for demonstration purposes)
        console.log('Updated tasksData after deletion:', tasksData);

        // Navigate back to the home page after deleting the task
        history.push('/');
      } else {
        console.log('Task not found with ID:', taskId);
      }
    }
  };

  return (
    <button onClick={handleDelete}>Delete Task</button>
  );
};

export default DeleteTaskButton;
