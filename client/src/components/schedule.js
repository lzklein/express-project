import React from 'react'

// 6 columns (closed sunday)
// min 2 per shift
// if under 2 people, display "x amount needed" either 2 or 1 if current at 0 or 1 employees on x shift
const Schedule = () => {
  return (
    <div>
      <h2>Schedule</h2>
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
          </tr>
          <tr>
            <th>Afternoon 12-5</th>
          </tr>
          <th>Closing 5-10</th>
        </tbody>
      </table>
    </div>
  )
}

export default Schedule