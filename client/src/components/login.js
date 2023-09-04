import React, {useState} from 'react'

// login for admin only
// use localstorage remember me feature
const Login = () => {

  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(false);
  const handleCheck=()=> {
    setShow(!show)
  }
  const handleRemember = () => {
    setRemember(!remember)
  }

  const handleLogin = () => {
    // todo fetch to backend /login
    // todo how to do password? maybe username (exclude spaces + lowercase) + first letter of position + admin(1/0)+id i.e devD11
    // Louis Klein, position: Clerk, admin: no, id: 24 = louiskleinC024
    // first 3 letters? devD11, louC024 < = this

    // if remember: localstorage the session
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder='username'></input>
        <input type={show? "password": "text"} placeholder='password'></input>
        <input type='checkbox' onChange={handleCheck}></input> 👁️‍🗨️
        <button type='submit'>Login</button>
        <input type='checkbox' onChange={handleRemember}></input> Remember me
      </form>
    </div>
  )
}

export default Login