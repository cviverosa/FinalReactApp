import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import TaskForm from './TaskForm';
import tasksData from './data/tasksData';

const UpdateTaskPage = ({ tasks, setTasks }) => {
  const history = useHistory();
  const { id } = useParams();
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  useEffect(() => {
    const task = tasksData.find((task) => task.id === Number(id));
    setTaskToUpdate(task);
  }, [id]);

  const handleUpdate = (updatedTask) => {
    const taskIndex = tasks.findIndex((task) => task.id === Number(id));

    if (taskIndex !== -1) {
      const updatedTasks = tasks.map((task) =>
        task.id === Number(id) ? { ...task, ...updatedTask } : task
      );
      setTasks(updatedTasks);
      console.log('Updated tasks:', updatedTasks);
      history.push('/');
    } else {
      console.log('Task not found with ID:', id);
    }
  };

  return (
    <div>
      <h2>Update Task</h2>
      {taskToUpdate ? (
        <TaskForm tasks={tasks} setTasks={setTasks} initialData={taskToUpdate} onSubmit={handleUpdate} />
      ) : (
        <div>Task not found.</div>
      )}
    </div>
  );
};

export default UpdateTaskPage;
