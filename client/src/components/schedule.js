import React from 'react'
import {useNavigate} from 'react-router-dom';
// 6 columns (closed sunday)
// min 2 per shift
// if under 2 people, display "x amount needed" either 2 or 1 if current at 0 or 1 employees on x shift
const Schedule = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Schedule</h2>
      <button onClick={()=>{navigate('/schedule/edit')}}>Edit</button>
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
              <li>John Doe</li>
              <li>Dev</li>
            </td>
            <td>
            </td>
            <td>
            </td>            
            <td>
            </td>            
            <td>
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <th>Afternoon 12-5</th>
            <td>
            </td>
            <td>
            </td>            
            <td>
            </td>            
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
          </tr>
          <th>Closing 5-10</th>
          <td>
            </td>
            <td>
            </td>            
            <td>
            </td>            
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
        </tbody>
      </table>
    </div>
  )
}

export default Schedule