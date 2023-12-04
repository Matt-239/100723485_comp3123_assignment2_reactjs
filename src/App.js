import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeDetail from './components/EmployeeDetail';
import Login from './components/Login';
import Signup from './components/Signup';
import { Navigate } from 'react-router-dom';

import './App.css'; 

function App() {
  const isAuthenticated = false;

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
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