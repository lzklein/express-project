import React, {useContext, useState} from 'react'
import { AuthContext } from '../App';

// login for admin only
// use localstorage remember me feature
const Login = () => {
  const { setLoggedIn, setEmployee } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleShowPassword=()=> {
    setShow(!show)
  }
  const handleRemember = () => {
    setRemember(!remember)
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5555/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      if (response.ok) {
        const loginData = await response.json(); 
        const sessionUser = loginData.user;
        console.log(sessionUser)

        if(remember){
          localStorage.setItem('sessionUser', JSON.stringify(sessionUser));
        }
        setEmployee(sessionUser)
        setLoggedIn(true);
        console.log('Login successful');
      } else {
        console.error('Error logging in');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" onChange = {(e)=>{setUsername(e.target.value)}} placeholder='username'></input>
        <input type={show? "text": "password"} onChange = {(e)=>{setPassword(e.target.value)}} placeholder='password'></input>
        <button type='submit'>Login</button>
      </form>
      <input type='checkbox' onChange={handleShowPassword}></input> Show password
      <input type='checkbox' onChange={handleRemember}></input> Remember me
    </div>
  )
}

export default Login