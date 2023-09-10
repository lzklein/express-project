const express = require('express');
const router = express.Router();
const Shifts = require('../models/shifts'); 

// GET shift by ID
router.get('/shifts/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id)
    try {
      const shift = await Shifts.findByPk(id);
      if (shift) {
        console.log(shift)
        res.json(shift);
      } else {
        res.status(404).json({ message: 'shift not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving shift' });
    }
  });
  
  // PATCH update shift
  router.patch('/shifts/:id', async (req, res) => {
    const id = req.params.id;
    const updates = req.body; 
  
    try {
      const shift = await Shifts.findByPk(id);
      if (shift) {
        await shift.update(updates);
        res.json({ message: 'shift updated successfully' });
      } else {
        res.status(404).json({ message: 'shift not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating shift' });
    }
  });
  
  // DELETE shift
  router.delete('/shifts/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const shift = await Shifts.findByPk(id);
      if (shift) {
        await shift.destroy();
        res.json({ message: 'shift deleted successfully' });
      } else {
        res.status(404).json({ message: 'shift not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting shift' });
    }
  });

module.exports = router;
