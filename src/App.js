import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeDetail from './components/EmployeeDetail';
import Login from './components/Login';
import Signup from './components/Signup';
import NavBar from './components/NavBar';

import './App.css';

function App() {
  const isAuthenticated = false;

  const PrivateRoute = ({ element, ...props }) => {
    return isAuthenticated ? (
      element
    ) : (
      <Navigate to="/login" replace state={{ from: props.location }} />
    );
  };

  return (
    <Router>
      <div>
        <NavBar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/users" element={<PrivateRoute element={<UserList />} />} />
          <Route path="/users/create" element={<PrivateRoute element={<UserForm />} />} />
          <Route path="/employees" element={<PrivateRoute element={<EmployeeList />} />} />
          <Route path="/employees/create" element={<PrivateRoute element={<EmployeeForm />} />} />
          <Route path="/employees/:id" element={<PrivateRoute element={<EmployeeDetail />} />} />
          {/* Redirect any unmatched route to the login page */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;