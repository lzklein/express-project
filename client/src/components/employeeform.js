import React, {useState} from 'react'

// ! ADMIN ONLY
// new employee form
const Employeeform = () => {
  return (
    <div>
      <h2>New Employee Form</h2>
      <form>
        Name: <input type="text"></input>
        <br></br>
        Position: <input type="text"></input>
        <br></br>
        Salary: <input type="number"></input>
        <br></br>
        Admin? <input type="checkbox"></input>
        <br></br>
        <button type="submit">Submit</button><button>Back</button>
      </form>
    </div>
  )
}

export default Employeeform