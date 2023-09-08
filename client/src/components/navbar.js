import React, {useContext, useState} from 'react'
import { AuthContext } from '../App';
import { NavLink, useNavigate } from 'react-router-dom';

// header navbar
// login/logout button, schedule, timeoff navs
// profile/employee info
// extra buttons for admin
const Navbar = () => {
  const { loggedIn, logout } = useContext(AuthContext);
  const employee = JSON.parse(localStorage.getItem("sessionUser"))

  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        { employee?.admin ?
         <>
        <li className="nav-item">
          <NavLink to="/employees">All Employees</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/shifts">Shifts</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/inbox">Inbox</NavLink>
        </li>
        </>
        : null}
        <li className="nav-item">
          <NavLink to="/schedule">Schedule</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/timeoff">Time Off Request</NavLink>
        </li>
        {loggedIn?
        <>
        <li className="nav-item">
        <NavLink to="/profile">{employee.name}</NavLink>
        </li>
        <li className="nav-item">
        <a onClick={logout}>Logout</a>
        </li>
        </>
        :<li className="nav-item">
        <NavLink to="/login">Login</NavLink>
        </li>
        }

      </ul>
    </nav>
  )
}

export default Navbar