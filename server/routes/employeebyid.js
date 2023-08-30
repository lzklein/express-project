// get single employee be their id
// patch salary
// change hours
// delete(fire) employee
const express = require('express');
const router = express.Router();
const Employee = require('../models/employees'); // Import your Employee model

// GET employee by ID
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await Employee.findByPk(id);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving employee' });
  }
});

module.exports = router;
