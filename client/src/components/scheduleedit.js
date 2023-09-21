import React, {useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom';
// 6 columns (closed sunday)
// min 2 per shift
// if under 2 people, display "x amount needed" either 2 or 1 if current at 0 or 1 employees on x shift
const ScheduleEdit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { scheduleData, daysOfWeek } = location.state;
    const [editSchedule, setEditSchedule] = useState(scheduleData);
    const [weekDay, setWeekDay] = useState(daysOfWeek)
    // console.log(scheduleData, daysOfWeek)

    const renderHead = () => {
      return weekDay.map((dayOfWeek) => (
        <th key={dayOfWeek}>{dayOfWeek}</th>
      ))
    }
    
    const renderBody = () => {
      return weekDay.map((dayOfWeek) => (
        <td key={dayOfWeek}>{dayOfWeek}</td>
      ))
    }

    return (
    <div>
      <h2>Schedule Editor</h2>
      <button onClick={()=>{navigate('/schedule')}}>Save</button>

      <button onClick={()=>{console.log(scheduleData)}}>boop</button>
      <table>
        <thead>
          <tr>
            <th></th>
            {renderHead()}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Morning 7-12</td>
            {renderBody()}
          </tr>
          <tr>
            <td>Afternoon 12-5</td>
            {renderBody()}
          </tr>
          <tr>
            <td>Closing 5-10</td>
            {renderBody()}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ScheduleEdit