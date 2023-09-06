import './App.css';
import React, {createContext, useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

// Components
import Home from './components/home';
import Header from './components/header';
import Timeoff from './components/timeoff';
import Schedule from './components/schedule';
import Shifts from './components/shifts';
import Employees from './components/employees';
import Login from './components/login';
import Profile from './components/profile';
import Timeoffinbox from './components/timeoffinbox';

export const AuthContext = createContext();

function App() {
  useEffect(()=>{
    checkSession()
  },[])

  const [login, setLogin] = useState(false)
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
          setLogin(true)
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
        // Clear the session token from localStorage
        localStorage.removeItem('userName');
        setLogin(false)
        console.log('Logout successful');
      } else {
        console.error('Error logging out');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }
  
  return (
    // <AuthContext.Provider value={{ token, setToken, logout , setUserData, userData, guilds, setGuilds, sessionData, setSessionData}}>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/inbox' element={<Timeoffinbox />}/>
          <Route path='/timeoff' element={<Timeoff />}/>
          <Route path='/schedule' element={<Schedule />}/>
          <Route path='/shifts' element={<Shifts />}/>
          <Route path='/employees' element={<Employees />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/login' element={<Login />}/>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    // </AuthContext.Provider>
  );
}

export default App;
