import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styling/Header.css';

const Header = () => {
  const [isCreateTaskPage, setIsCreateTaskPage] = useState(false);
  const [isTaskByStatusPage, setIsTaskByStatusPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsCreateTaskPage(location.pathname === '/create');
    setIsTaskByStatusPage(location.pathname === '/tasks-by-status');
  }, [location]);

  return (
    <nav className={`navbar ${isCreateTaskPage ? 'create-task-page' : ''} ${isTaskByStatusPage ? 'tasks-by-status-page' : ''}`}>
      <h2>Welcome to My Task App</h2> {/* Add the text heading */}
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/create" className="nav-link">Create Task</Link>
        <Link to="/tasks-by-status" className="nav-link">Task Status</Link>
      </div>
    </nav>
  );
};

export default Header;
