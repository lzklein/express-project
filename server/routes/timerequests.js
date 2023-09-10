// see all time requests
const express = require('express');
const router = express.Router();
const TimeOffRequests = require('../models/timeoffrequests'); 

// GET
router.get('/timeoff', async (req, res) => {
    try {
      const timeOff = await TimeOffRequests.findAll();
      res.json(timeOff);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving timeOff' });
    }
  });

// POST 
router.post('/timeoff', async (req, res) => {
    console.log('getting req')
    const newRequest = req.body;
    console.log('got req')
    try {
      console.log('creating shift')
      const createdRequest = await TimeOffRequests.create(newRequest);
      console.log('created shift')
      res.status(201).json(createdRequest); 
    } catch (error) {
      res.status(500).json({ message: 'Error creating shift' });
    }
  });


module.exports = router;
