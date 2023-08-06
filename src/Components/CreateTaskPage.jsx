// import React from 'react';
// import TaskForm from './TaskForm';

// const CreateTaskPage = () => {
//   const handleCreate = (newTask) => {
//     // Handle the creation of the new task (e.g., save it to the tasksData array)
//     console.log('Creating a new task:', newTask);
//   };

//   return (
//     <div>
//       <h2>Create New Task</h2>
//       <TaskForm onSubmit={handleCreate} />
//     </div>
//   );
// };

// export default CreateTaskPage;


import React from 'react';
import { useHistory } from 'react-router-dom';
import TaskForm from './TaskForm';
import tasksData from './data/tasksData';

const CreateTaskPage = () => {
  const history = useHistory();

  const handleCreate = (newTask) => {
    // Generate a new ID for the task
    const newTaskId = tasksData.length > 0 ? tasksData[tasksData.length - 1].id + 1 : 1;

    // Create a new task object with the provided data and the generated ID
    const createdTask = { id: newTaskId, ...newTask };

    // Save the new task to the tasksData array
    tasksData.push(createdTask);

    // Log the updated tasksData to the console (for demonstration purposes)
    console.log('Updated tasksData:', tasksData);

    // Navigate back to the home page after saving the new task
    history.push('/');
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <TaskForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreateTaskPage;

