import React, {useContext} from 'react'
import { AuthContext } from '../App';

// employee profile, see shifts in list, total salary, etc
const Profile = () => {
  const { employee} = useContext(AuthContext);

  return (
    <div className="employee-card">
        <p>{employee.name}, {employee.position} | Hired {employee.hire_date} </p>
        <p>Salary: {employee.salary}, Total hours: {employee.hours}, Total pay: {employee.hours * employee.salary}</p>
    </div>
  )
}

export default Profile