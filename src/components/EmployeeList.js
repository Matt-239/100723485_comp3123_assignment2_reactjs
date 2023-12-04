import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/List.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch the list of employees
    axios.get('/api/emp/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  }, []);

  return (
    <div className="list">
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees to display.</p>
      ) : (
        <ul>
          {employees.map(employee => (
            <li className="list-item" key={employee._id}>
              <strong>{employee.firstName} {employee.lastName}</strong>
              <span>Email: {employee.email}</span>
              <span>Gender: {employee.gender}</span>
              <span>Salary: ${employee.salary}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;