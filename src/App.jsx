// import React, {useState} from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Header from './Components/Header';
// import Home from './Components/Home';
// import TaskDetails from './Components/TaskDetails';
// import TaskByStatusPage from './Components/TaskByStatusPage';
// import CreateTaskPage from './Components/CreateTaskPage';
// import UpdateTaskPage from './Components/UpdateTaskPage';
// import tasksData from './Components/data/tasksData'


// const App = () => {
//   const [tasks, setTasks] = useState(tasksData);

//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Switch>
//           <Route exact path="/">
//             <Home tasks={tasks} setTasks={setTasks} />
//           </Route>
//           <Route path="/create">
//             <CreateTaskPage tasks={tasks} setTasks={setTasks} />
//           </Route>
//           <Route path="/tasks-by-status">
//             <TaskByStatusPage tasks={tasks} setTasks={setTasks} />
//           </Route>
//           <Route path="/update/:id">
//             <UpdateTaskPage tasks={tasks} setTasks={setTasks} />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;

// App.jsx
import React ,{useState,useEffect}from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import CreateTaskPage from './Components/CreateTaskPage';
import TaskDetails from './Components/TaskDetails';
import TaskByStatusPage from './Components/TaskByStatusPage';
import TaskStatus from './Components/TasksByStatus';
import UpdateTaskPage from './Components/UpdateTaskPage';
import tasksData from './Components/data/tasksData';

const App = () => {
  const [tasks, setTasks] = useState(tasksData);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={() => <Home tasks={tasks} setTasks={setTasks} />} />
          <Route path="/create" component={CreateTaskPage} />
          <Route path="/tasks-by-status" component={() => <TaskByStatusPage tasks={tasks} setTasks={setTasks} />} />
          <Route path="/update/:id" component={() => <UpdateTaskPage tasks={tasks} setTasks={setTasks} />} />
          <Route path="/task/:id" component={() => <TaskDetails tasks={tasks} setTasks={setTasks} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;