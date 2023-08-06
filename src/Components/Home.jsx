import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TaskByStatusPage from './TaskByStatusPage';
import TaskList from './TaskList';
import '../styling/Header.css';



const HomePage = ({ tasks, setTasks }) => {
  const [taskCountsByStatus, setTaskCountsByStatus] = useState({
    todo: 0,
    inProgress: 0,
    done: 0,
  });

  useEffect(() => {
    // Update the task counts and group tasks by status whenever the tasks are updated
    updateTaskCountsAndGroupTasks();
    // Store the updated tasks in local storage whenever the tasks are updated
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to calculate the counts of tasks in each status and group tasks by status
  const updateTaskCountsAndGroupTasks = () => {
    const counts = {
      todo: 0,
      inProgress: 0,
      done: 0,
    };

    const tasksByStatus = {
      todo: [],
      inProgress: [],
      done: [],
    };

    tasks.forEach((task) => {
      counts[task.status]++;
      tasksByStatus[task.status].push(task);
    });

    setTaskCountsByStatus(counts);
    setGroupedTasks(tasksByStatus);
  };

  const [groupedTasks, setGroupedTasks] = useState({
    todo: [],
    inProgress: [],
    done: [],
  });

  return (
    <div>
      {/* ... (previous code) */}
    </div>
  );
};

export default HomePage;