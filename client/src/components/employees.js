import React, {useState, useEffect} from 'react'
import EmployeeCard from './employeecard'
// full list of all employees
const Employees = () => {
  const[employees, setEmployees] = useState(null)
  const [loaded, setLoaded] = useState(false)
  useEffect(()=>{
    fetch('http://localhost:5555/employees')
    .then(r => r.json())
    .then(employeesData => {
      setEmployees(employeesData)
      setLoaded(true)
    })
  },[])

  const renderEmployees = () => {
    return employees.map((employee)=>{
      return (<div key={employee.id}>
        <EmployeeCard employee={employee} />
      </div>)
    })
  }

  return (
    <div>
      {
        loaded ?
        <>
        <button onClick={()=>{console.log(employees)}}>bip</button>
        <button>Create a new Hire</button>
        {renderEmployees()}
        </>
        :
        <p>Loading . . .</p>
      }

    </div>
  )
}

export default Employees