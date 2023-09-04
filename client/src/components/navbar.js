import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

// header navbar
// login/logout button, schedule, timeoff navs
// profile/employee info
// extra buttons for admin
const Navbar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          //!ADMIN
          <NavLink to="/employees">All Employees</NavLink>
        </li>
        <li className="nav-item">
          //!ADMIN
          <NavLink to="/shifts">Shifts</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/schedule">Schedule</NavLink>
        </li>
        <li className="nav-item">
          //!ADMIN
          <NavLink to="/inbox">Inbox</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/timeoff">Time Off Request</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar