import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
// 6 columns (closed sunday)
// min 2 per shift
// if under 2 people, display "x amount needed" either 2 or 1 if current at 0 or 1 employees on x shift
const Schedule = () => {
  const navigate = useNavigate();
  const [scheduleData, setScheduleData] = useState([])
  const daysOfWeek =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  useEffect(() => {
    const fetchData = async () => {
      const data = {};

      for (const dayOfWeek of daysOfWeek) {
        try {
          const response = await fetch(`http://localhost:5555/schedule?dayOfWeek=${dayOfWeek}`);
          if (response.ok) {
            const schedule = await response.json();
            data[dayOfWeek] = schedule;
          } else {
            throw new Error(`Error fetching schedule data for ${dayOfWeek}`);
          }
        } catch (error) {
          console.error(error);
        }
      }

      setScheduleData(data);
    };

    fetchData();
  }, []);

const renderHead = () => {
  return daysOfWeek.map((dayOfWeek) => (
    <th key={dayOfWeek}>{dayOfWeek}</th>
  ))
}

const renderBody = () => {
  return daysOfWeek.map((dayOfWeek) => (
    <td key={dayOfWeek}>{dayOfWeek}</td>
  ))
}

  return (
    <div>
      <h2>Schedule</h2>
      <button onClick={()=>{navigate('/schedule/edit', { state: {scheduleData, daysOfWeek} })}}>Edit</button>
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

export default Schedule