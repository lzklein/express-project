import React from 'react'

// employee time off request form
const Timeoffrequest = () => {
  return (
    <div>
      <p>Select the shift you will be taking time off from</p>
      <form>
        <select>
          {/* map employee shifts here as options */}
          {/* maybe replace with "you have no shifts" if no shifts to take off */}
          {/* please call your supervisor if info is incorrect? */}
        </select>
        <input type="text" placeholder="reason"></input>
        <input type="checkbox"></input> Paid time off?
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Timeoffrequest