import React, {useState} from 'react'

// ! ADMIN ONLY
// new employee form
const Employeeform = () => {
  const [admin, setAdmin] = useState(false)
  const [nameInput, setNameInput] = useState("");
  const [positionInput, setPositionInput] = useState("");
  const [salaryInput, setSalaryInput] = useState("");


  const handleSubmit=async(e)=>{
    e.preventDefault();
    // debugger;
    const newEmployee = {
      name: nameInput,
      position: positionInput,
      salary: salaryInput,
      admin: admin ? 1:0
    };
    console.log(newEmployee)

    if(nameInput && positionInput && salaryInput){
      try {
        const response = await fetch('http://localhost:5555/employees', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newEmployee),
        });
    
        if (response.ok) {
          console.log('Employee created successfully!');
        } else {
          console.error('Error creating employee');
        }
      } catch (error) {
        console.error('Error creating employee:', error);
      }
    }
    else{
      alert("All fields must be filled in!")
    }


  }

  return (
    <div>
      <h2>New Employee Form</h2>
      <form onSubmit={handleSubmit}>
        Name: <input type="text" onChange={(e)=>{setNameInput(e.target.value)}}></input>
        <br></br>
        Position: <input type="text" onChange={(e)=>{setPositionInput(e.target.value)}}></input>
        <br></br>
        Salary: <input type="number" step="0.01" onChange={(e)=>{setSalaryInput(e.target.value)}}></input>
        <br></br>
        Admin? <input type="checkbox" onChange={()=>{setAdmin(!admin)}}></input>
        <br></br>
        <button type="submit">Submit</button><button>Back</button>
      </form>
    </div>
  )
}

export default Employeeform