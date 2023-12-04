import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/List.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users
    axios.get('/api/user/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="list">
      <h2>User List</h2>
      {users?.length === 0 ? (
        <p>No users to display.</p>
      ) : (
        <ul>
          {users?.map(user => (
            <li className="list-item" key={user._id}>
              <strong>{user.username}</strong>
              <span>Email: {user.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;