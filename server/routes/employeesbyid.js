// get single employee be their id
// patch salary
// change hours
// delete(fire) employee
const express = require('express');
const router = express.Router();
const Employee = require('../models/employees'); 

// GET employee by ID
router.get('/employees/:id', async (req, res) => {
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

// PATCH update employee
router.patch('/employees/:id', async (req, res) => {
  const id = req.params.id;
  const updates = req.body; 

  try {
    const employee = await Employee.findByPk(id);
    if (employee) {
      await employee.update(updates);
      res.json({ message: 'Employee updated successfully' });
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating employee' });
  }
});

// DELETE employee
router.delete('/employees/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const employee = await Employee.findByPk(id);
    if (employee) {
      await employee.destroy();
      res.json({ message: 'Employee deleted successfully' });
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting employee' });
  }
});

module.exports = router;
