import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeDetail from './components/EmployeeDetail';
import './App.css'; 

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="navbar-left">
            <h1>My React App</h1>
          </div>
          <ul className="navbar-right">
            <li>
              <NavLink to="/users">User List</NavLink>
            </li>
            <li>
              <NavLink to="/users/create">Create User</NavLink>
            </li>
            <li>
              <NavLink to="/employees">Employee List</NavLink>
            </li>
            <li>
              <NavLink to="/employees/create">Create Employee</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/users" exact element={<UserList />} />
          <Route path="/users/create" element={<UserForm />} />
          <Route path="/employees" exact element={<EmployeeList />} />
          <Route path="/employees/create" element={<EmployeeForm />} />
          <Route path="/employees/:id" element={<EmployeeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;