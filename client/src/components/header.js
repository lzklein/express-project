import React from 'react'
import Navbar from './navbar'

// navtools, login/logout/profile here

// ! debug tools and buttons here
const seedEmployer = async () => {
  try {
    const newEmployee = {
      name: 'John Doe',
      position: 'Manager',
      salary: '60000',
      // Other employee properties...
    };

    const response = await fetch('/api/employees', {
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
    const response = await fetch('/reset', {
      method: 'DELETE', // Adjust the method based on your server's implementation
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

const header = () => {
  return (
    <div>
      <button onClick={seedEmployer}>Boop</button>
      <button onClick={resetData}>RESET</button>
      <Navbar />
    </div>
  )
}

export default header