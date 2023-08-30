// get full employee list
// post(hire) new employee
const express = require('express');
const router = express.Router();
const Employee = require('../models/employees'); // Import your Employee model

// GET all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving employees' });
  }
});

module.exports = router;
