import React from 'react'
import {useNavigate} from 'react-router-dom';

// !terminate just links to Confirmation, confirmation yes button is the actual delete button
const EmployeeCard = ({employee}) => {
  const navigate = useNavigate();
  return (
    <div className="employee-card">
        <a onClick= {()=>{navigate(`/employee/${employee.id}`)}}>{employee.name}, {employee.position} </a> 
        <button>Terminate</button>
    </div>
  )
}

export default EmployeeCard