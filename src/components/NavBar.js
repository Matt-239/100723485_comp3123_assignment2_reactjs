import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/users" activeClassName="active">User List</NavLink>
        </li>
        <li>
          <NavLink to="/users/create" activeClassName="active">Create User</NavLink>
        </li>
        <li>
          <NavLink to="/employees" activeClassName="active">Employee List</NavLink>
        </li>
        <li>
          <NavLink to="/employees/create" activeClassName="active">Create Employee</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;