import React from 'react'
import Navbar from './navbar'

// navtools, login/logout/profile here

// ! debug tools and buttons here
const seedEmployer = async () => {
  try {
    const newEmployee = {
      name: 'Dev',
      position: 'Dev',
      salary: 10,
      admin: 1,
      // Other employee properties...
    };

    const response = await fetch('http://localhost:5555/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployee),
    });

    if (response.ok) {
      console.log('Employee seeded successfully');
    } else {
      console.error('Error seeding employee');
    }
  } catch (error) {
    console.error('Error seeding employee:', error);
  }
}

const resetData = async () => {
  try {
    const response = await fetch('http://localhost:5555/reset', {
      method: 'DELETE', 
    });

    if (response.ok) {
      console.log('Data reset successfully');
    } else {
      console.error('Error resetting data');
    }
  } catch (error) {
    console.error('Error resetting data:', error);
  }
}

const checkSession = () => {
  console.log('sessionUser', localStorage.getItem('sessionUser'))
}

const handleLogout = async() => {
  try {
    const response = await fetch('http://localhost:5555/logout', {
      method: 'POST',
    });

    if (response.ok) {
      // Clear the session token from localStorage
      localStorage.removeItem('sessionUser');
      console.log('Logout successful');
    } else {
      console.error('Error logging out');
    }
  } catch (error) {
    console.error('Error logging out:', error);
  }
}

const Header = () => {
  return (
    <div>
      <Navbar />
      <button onClick={seedEmployer}>Boop</button>
      <button onClick={resetData}>RESET</button>
      <button onClick={checkSession}>SESSION</button>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Header