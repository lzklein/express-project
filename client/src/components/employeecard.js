import React from 'react'

const EmployeeCard = ({employee}) => {
  return (
    <div className="employee-card">
        <p>{employee.name}, {employee.position} | Hired {employee.hire_date} </p>
        <p>Salary: {employee.salary}, Total hours: {employee.hours}, Total pay: {employee.hours * employee.salary}</p>
        <button>Terminate</button>
    </div>
  )
}

export default EmployeeCard