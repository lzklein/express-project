import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

// single employee's info
const Employeeinfo = () => {
  const {id} = useParams()
  const [employee, setEmployee] = useState(null)
  const [loaded, setLoaded] = useState(false)
  useEffect(()=>{
    fetch(`http://localhost:5555/employees/${id}`)
    .then(r=>r.json())
    .then(employeeData=>{
      setEmployee(employeeData)
      setLoaded(true)
    })
  },[])
  
  function test(){console.log(employee)}

  return (
    <div>
      {loaded?<>
        <button onClick={test}>test</button>
        <p>{employee.name}, {employee.position} </p> 
        <p>Salary: ${employee.salary}, Total hours: {employee.hours}, Total pay: ${employee.hours * employee.salary}</p>
        <p> Hired {employee.hire_date} </p>
        <button>Terminate</button>

      </>
        :<p>loading . . .</p>}

    </div>
  )
}

export default Employeeinfo