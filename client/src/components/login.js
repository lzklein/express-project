import React, {useState} from 'react'

// login for admin only
// use localstorage remember me feature
const Login = () => {

  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCheck=()=> {
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
        const loginData = await response.json(); // Parse the response as JSON
        const sessionUser = loginData.user;
  
        // Store the sessionUser in localStorage
        localStorage.setItem('sessionUser', JSON.stringify(sessionUser));
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
        <input type='checkbox' onChange={handleCheck}></input> 👁️‍🗨️
        <button type='submit'>Login</button>
        <input type='checkbox' onChange={handleRemember}></input> Remember me
      </form>
    </div>
  )
}

export default Login