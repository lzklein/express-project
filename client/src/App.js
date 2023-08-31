import './App.css';
import React, {createContext, useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './components/home';
import Header from './components/header'
export const AuthContext = createContext();

function App() {


  return (
    // <AuthContext.Provider value={{ token, setToken, logout , setUserData, userData, guilds, setGuilds, sessionData, setSessionData}}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    // </AuthContext.Provider>
  );
}

export default App;
