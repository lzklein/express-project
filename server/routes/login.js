const express = require('express');
const router = express.Router();
const Employee = require('../models/employees');
const sequelize = require('../config'); 
// const { v4: uuidv4 } = require('uuid');

// function generateSessionToken() {
//   return uuidv4(); //random UUID
// }

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    function generateEmployeePassword(employee) {
        const namePart = employee.name.slice(0, 3).toLowerCase();
        const positionPart = employee.position.charAt(0).toUpperCase();
        const adminPart = employee.admin;
        const idPart = employee.id;
      
        return `${namePart}${positionPart}${adminPart}${idPart}`;
      }

    try {
      // query for employee with matching name
      const employee = await Employee.findOne({
        where: sequelize.where(
          sequelize.fn('LOWER', sequelize.col('name')),
          username.toLowerCase()
        ),
        raw: true, // Required for SQLite to prevent Sequelize from trying to cast to a specific type
      });
      
  
      if (!employee) {
        // employee not found
        return res.status(401).send('Invalid credentials');
      }

      // Compare the provided password with the password generator
      if (password === generateEmployeePassword(employee)) {
        // password matches

        // username method
        req.session.user = { username };
        return res.send({user: username});

        //token method
        // const sessionToken = generateSessionToken();
        // req.session.token = sessionToken;
        // console.log(req.session.token)
        // res.json({ token: sessionToken });

      } else {
        // Password doesn't match
        return res.status(401).send('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).send('Something went wrong');
    }
  });
  
module.exports = router;
