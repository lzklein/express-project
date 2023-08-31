// get full employee list
// post(hire) new employee
const express = require('express');
const router = express.Router();
const Employee = require('../models/employees'); 

// GET all employees
router.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving employees' });
  }
});

// POST employee
router.post('/employees', async (req, res) => {
  const newEmployee = req.body;
  try {
    const createdEmployee = await Employee.create(newEmployee);
    res.status(201).json(createdEmployee); 
  } catch (error) {
    res.status(500).json({ message: 'Error creating employee' });
  }
});

module.exports = router;
