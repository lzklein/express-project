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
  try {
    const newEmployee = {
      name: 'John Doe',
      position: 'Clerk',
      salary: 14.77,
      admin: 0,
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

const seedShift = async () => {
  try {
    const newShifts = [
      {
        name: 'Morning',
        start_time: '7:00:00',
        end_time: '12:00:00',
        day_of_week: 'Monday',
        employees_needed: 2,
      },
      {
        name: 'Afternoon',
        start_time: '12:00:00',
        end_time: '17:00:00',
        day_of_week: 'Monday',
        employees_needed: 2,
      },
      {
        name: 'Evening',
        start_time: '17:00:00',
        end_time: '22:00:00',
        day_of_week: 'Monday',
        employees_needed: 2,
      },
      {
        name: 'Morning',
        start_time: '7:00:00',
        end_time: '12:00:00',
        day_of_week: 'Tuesday',
        employees_needed: 2,
      },
      {
        name: 'Afternoon',
        start_time: '12:00:00',
        end_time: '17:00:00',
        day_of_week: 'Tuesday',
        employees_needed: 2,
      },
      {
        name: 'Evening',
        start_time: '17:00:00',
        end_time: '22:00:00',
        day_of_week: 'Tuesday',
        employees_needed: 2,
      },
      {
        name: 'Morning',
        start_time: '7:00:00',
        end_time: '12:00:00',
        day_of_week: 'Wednesday',
        employees_needed: 2,
      },
      {
        name: 'Afternoon',
        start_time: '12:00:00',
        end_time: '17:00:00',
        day_of_week: 'Wednesday',
        employees_needed: 2,
      },
      {
        name: 'Evening',
        start_time: '17:00:00',
        end_time: '22:00:00',
        day_of_week: 'Wednesday',
        employees_needed: 2,
      },
      {
        name: 'Morning',
        start_time: '7:00:00',
        end_time: '12:00:00',
        day_of_week: 'Thursday',
        employees_needed: 2,
      },
      {
        name: 'Afternoon',
        start_time: '12:00:00',
        end_time: '17:00:00',
        day_of_week: 'Thursday',
        employees_needed: 2,
      },
      {
        name: 'Evening',
        start_time: '17:00:00',
        end_time: '22:00:00',
        day_of_week: 'Thursday',
        employees_needed: 2,
      },
      {
        name: 'Morning',
        start_time: '7:00:00',
        end_time: '12:00:00',
        day_of_week: 'Friday',
        employees_needed: 2,
      },
      {
        name: 'Afternoon',
        start_time: '12:00:00',
        end_time: '17:00:00',
        day_of_week: 'Friday',
        employees_needed: 2,
      },
      {
        name: 'Evening',
        start_time: '17:00:00',
        end_time: '22:00:00',
        day_of_week: 'Friday',
        employees_needed: 2,
      },
      {
        name: 'Morning',
        start_time: '7:00:00',
        end_time: '12:00:00',
        day_of_week: 'Saturday',
        employees_needed: 2,
      },
      {
        name: 'Afternoon',
        start_time: '12:00:00',
        end_time: '17:00:00',
        day_of_week: 'Saturday',
        employees_needed: 2,
      },
      {
        name: 'Evening',
        start_time: '17:00:00',
        end_time: '22:00:00',
        day_of_week: 'Saturday',
        employees_needed: 2,
      },
    ];

    const createShift = async (shift) => {
      try {
        const response = await fetch('http://localhost:5555/shifts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(shift),
        });
    
        if (response.ok) {
          console.log(`Shift '${shift.name}' created successfully`);
        } else {
          console.error(`Error creating shift '${shift.name}'`);
        }
      } catch (error) {
        console.error(`Error creating shift '${shift.name}':`, error);
      }
    };

    const shiftPromises = newShifts.map((shift) => createShift(shift));
    await Promise.all(shiftPromises);
    console.log('All shifts created successfully');
  } catch (error) {
    console.error('Error seeding shifts:', error);
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
      <button onClick={seedEmployer}>Employee Seed</button>
      <button onClick={seedShift}>Shift Seed</button>
      <button onClick={resetData}>RESET</button>
      <button onClick={checkSession}>SESSION</button>
      {/* <button onClick={handleLogout}>logout</button> */}
    </div>
  )
}

export default Header