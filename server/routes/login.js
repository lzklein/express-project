const Employee = require('../models/employees');
const sequelize = require('../config'); 

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    function generateEmployeePassword(employee) {
        const namePart = employee.name.substring(0, 3).toLowerCase();
        const positionPart = employee.position.charAt(0).toUpperCase();
        const adminPart = employee.admin;
        const idPart = employee.id;
      
        return `${namePart}${positionPart}${adminPart}${idPart}`;
      }

    try {
      // query for employee with matching name
      const employee = await Employee.findOne({
        where: {
          name: username,
        },
      });
  
      if (!employee) {
        // employee not found
        return res.status(401).send('Invalid credentials');
      }

      // Compare the provided password with the password generator
      if (password === generateEmployeePassword(employee)) {
        // password matches
        req.session.user = { username };
        return res.send('Login successful');
      } else {
        // Password doesn't match
        return res.status(401).send('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).send('Something went wrong');
    }
  });
  