import React from 'react';
import TasksByStatus from './TasksByStatus';

const TaskStatusPage = ({ tasks, setTasks }) => {
  return (
    <div>
      <h2>Task Status Page</h2>
      <TasksByStatus tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default TaskStatusPage;
