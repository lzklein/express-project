// single time request
// delete after accepting or denying (or archive or something)
const express = require('express');
const router = express.Router();
const TimeOffRequests = require('../models/timeoffrequests'); 

// GET shift by ID
router.get('/timeoff/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id)
    try {
      const timeOff = await TimeOffRequests.findByPk(id);
      if (timeOff) {
        console.log(timeOff)
        res.json(timeOff);
      } else {
        res.status(404).json({ message: 'timeOff not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving timeOff' });
    }
  });
  
  // PATCH update shift
  router.patch('/timeoff/:id', async (req, res) => {
    const id = req.params.id;
    const updates = req.body; 
  
    try {
      const timeOff = await TimeOffRequests.findByPk(id);
      if (timeOff) {
        await timeOff.update(updates);
        res.json({ message: 'timeOff updated successfully' });
      } else {
        res.status(404).json({ message: 'timeOff not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating timeOff' });
    }
  });
  
  // DELETE shift
  router.delete('/timeoff/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const timeOff = await TimeOffRequests.findByPk(id);
      if (timeOff) {
        await timeOff.destroy();
        res.json({ message: 'timeOff deleted successfully' });
      } else {
        res.status(404).json({ message: 'timeOff not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting timeOff' });
    }
  });

module.exports = router;
