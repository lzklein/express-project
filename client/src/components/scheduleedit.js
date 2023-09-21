import React, {useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom';
// 6 columns (closed sunday)
// min 2 per shift
// if under 2 people, display "x amount needed" either 2 or 1 if current at 0 or 1 employees on x shift
const ScheduleEdit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const locationData = location.state; 
    const [scheduleData, setScheduleData] = useState(locationData);

    console.log(scheduleData)
  return (
    <div>
      <h2>Schedule</h2>
      <button onClick={()=>{navigate('/schedule')}}>Save</button>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            {/* closed sunday */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Morning 7-12</th>
            <td>
              {/* example */}
              <li>John Doe <button>-</button></li>
              <li>Dev <button>-</button></li>
              <button>Add Employee</button>
            </td>
            <td>
            <button>Add Employee</button>
            </td>
            <td>
            <button>Add Employee</button>
            </td>            
            <td>
            <button>Add Employee</button>
            </td>            
            <td>
            <button>Add Employee</button>
            </td>
            <td>
            <button>Add Employee</button>
            </td>
          </tr>
          <tr>
            <th>Afternoon 12-5</th>
            <td>
            <button>Add Employee</button>
            </td>
            <td>
            <button>Add Employee</button>
            </td>            
            <td>
            <button>Add Employee</button>
            </td>            
            <td>
            <button>Add Employee</button>
            </td>
            <td>
            <button>Add Employee</button>
            </td>
            <td>
            <button>Add Employee</button>
            </td>
          </tr>
          <th>Closing 5-10</th>
          <td>
            <button>Add Employee</button>
            </td>
            <td>
            <button>Add Employee</button>
            </td>            
            <td>
            <button>Add Employee</button>
            </td>            
            <td>
            <button>Add Employee</button>
            </td>
            <td>
            <button>Add Employee</button>
            </td>
            <td>
            <button>Add Employee</button>
            </td>
        </tbody>
      </table>
    </div>
  )
}

export default ScheduleEdit