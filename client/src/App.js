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

export const AuthContext = createContext();

function App() {


  return (
    // <AuthContext.Provider value={{ token, setToken, logout , setUserData, userData, guilds, setGuilds, sessionData, setSessionData}}>
      <div className="App">
        <Header />
        <Routes>
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
