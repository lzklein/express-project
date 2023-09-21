import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
// 6 columns (closed sunday)
// min 2 per shift
// if under 2 people, display "x amount needed" either 2 or 1 if current at 0 or 1 employees on x shift
const Schedule = () => {
  const navigate = useNavigate();
  const [scheduleData, setScheduleData] = useState([])
  const daysOfWeek =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [shifts, setShifts] = useState([])
  useEffect(() => {
    fetchData();
    fetchShifts();
  }, []);

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

  const fetchShifts = async () => {
    try {
      const response = await fetch('http://localhost:5555/shifts');
      if (response.ok) {
        const shiftsData = await response.json();
  
        // Convert start_time off of string
        const formattedShifts = shiftsData.map((shift) => ({
          ...shift,
          start_time_seconds: getTimeInSeconds(shift.start_time),
        }));
  
        const uniqueShifts = Array.from(
          new Set(formattedShifts.map((shift) => shift.start_time_seconds))
        ).map((start_time_seconds) =>
          formattedShifts.find((shift) => shift.start_time_seconds === start_time_seconds)
        );
  
        uniqueShifts.sort((a, b) => a.start_time_seconds - b.start_time_seconds);
  
        const finalShifts = uniqueShifts.map((shift) => {
          const { start_time_seconds, ...rest } = shift;
          return rest;
        });
  
        setShifts(finalShifts);
      } else {
        throw new Error('Error fetching shifts data');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  // convert time strings to seconds since midnight
  const getTimeInSeconds = (timeString) => {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };
  

const renderHead = () => {
  return daysOfWeek.map((dayOfWeek) => (
    <th key={dayOfWeek}>{dayOfWeek}</th>
  ))
}

const renderBody = () => {
  return shifts.map((shift)=>{
    return <tr>
      <td>{shift.name} {shift.start_time}-{shift.end_time}</td>
      {renderHead()}
    </tr>
  })

}

  return (
    <div>
      <h2>Schedule</h2>
      <button onClick={()=>{navigate('/schedule/edit', { state: {scheduleData, daysOfWeek} })}}>Edit</button>
      <button onClick={()=>{console.log(scheduleData, shifts)}}>boop</button>
      <table>
        <thead>
          <tr>
            <th></th>
            {renderHead()}
          </tr>
        </thead>
        <tbody>
          {renderBody()}
        </tbody>
      </table>
    </div>
  )
}

export default Schedule