const express = require('express');
const router = express.Router();
const Shifts = require('../models/shifts'); 

// GET
router.get('/shifts', async (req, res) => {
    try {
      const shifts = await Shifts.findAll();
      res.json(shifts);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving shifts' });
    }
  });

// POST 
router.post('/shifts', async (req, res) => {
    console.log('getting req')
    const newShift = req.body;
    console.log('got req')
    try {
      console.log('creating shift')
      const createdShift = await Shifts.create(newShift);
      console.log('created shift')
      res.status(201).json(createdShift); 
    } catch (error) {
      res.status(500).json({ message: 'Error creating shift' });
    }
  });

module.exports = router;
