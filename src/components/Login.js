import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css'; // Import the stylesheet

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Send a POST request to authenticate the user
    axios.post('/api/user/login', formData)
      .then(response => {
        console.log('User authenticated successfully:', response.data);
        // Handle success, e.g., redirect or show a success message
      })
      .catch(error => {
        console.error('Error authenticating user:', error);
        // Handle error, e.g., show an error message
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label className="label">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>

       <p>Don't have an account? <Link to="/signup">Signup</Link></p>
    </div>
  );
};

export default Login;