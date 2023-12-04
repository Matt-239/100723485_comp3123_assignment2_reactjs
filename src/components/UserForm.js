import React, { useState } from 'react';
import axios from 'axios';
import '../styles/UserForm.css';

const UserForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to create a new user
    axios.post('/api/user/signup', formData)
      .then(response => {
        console.log('User created successfully:', response.data);
        // Handle success, e.g., redirect or show a success message
      })
      .catch(error => {
        console.error('Error creating user:', error);
        // Handle error, e.g., show an error message
      });
  };

  return (
    <div className="card">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default UserForm;
