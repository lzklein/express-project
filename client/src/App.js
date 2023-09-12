import './App.css';
import React, {createContext, useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

// Components
import Home from './components/home';
import Header from './components/header';
import TimeoffRequest from './components/timeoffrequest';
import Schedule from './components/schedule';
import ScheduleEdit from './components/scheduleedit';
// import Shifts from './components/shifts';
import Employees from './components/employees';
import Login from './components/login';
import Profile from './components/profile';
import Timeoffinbox from './components/timeoffinbox';
import EmployeeInfo from './components/employeeinfo';
import EmployeeForm from './components/employeeform';

export const AuthContext = createContext();

function App() {
  useEffect(()=>{
    checkSession()
  },[])

  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)
  const [employee, setEmployee] = useState(null)
  const checkSession = () => {
    fetch('http://localhost:5555/checkuser',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sessionUser: localStorage.getItem('sessionUser'),
      })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((checkData) => {
        if (checkData.sessionUser) {
          console.log('User is logged in:', checkData.sessionUser);
          setEmployee(JSON.parse(localStorage.getItem("sessionUser")))
          setLoggedIn(true)
        } else {
          console.log('User is not logged in.');
        }
      })
      .catch((error) => {
        console.error('Error checking session:', error);
      });
  }

  const logout = async() => {
    try {
      const response = await fetch('http://localhost:5555/logout', {
        method: 'POST',
      });
  
      if (response.ok) {
        localStorage.removeItem('sessionUser');
        setLoggedIn(false)
        setEmployee(null)
        console.log('Logout successful');
        navigate('/');
      } else {
        console.error('Error logging out');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }

  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn, logout, employee, setEmployee}}>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/employee/new' element = {<EmployeeForm/>}/>
          <Route path='/employee/:id' element = {<EmployeeInfo />}/>
          <Route path='/inbox' element={<Timeoffinbox />}/>
          <Route path='/timeoff' element={<TimeoffRequest />}/>
          <Route path='/schedule/edit' element={<ScheduleEdit/>} />
          <Route path='/schedule' element={<Schedule />}/>
          {/* <Route path='/shifts' element={<Shifts />}/> */}
          <Route path='/employees' element={<Employees />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/login' element={<Login />}/>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
