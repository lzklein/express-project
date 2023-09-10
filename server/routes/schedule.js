// get full schedule
const express = require('express');
const router = express.Router();
const Schedule = require('../models/schedule'); 

router.get('/schedule', async (req, res) => {
    try {
      const schedule = await Schedule.findAll();
      res.json(schedule);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving schedule' });
    }
  });

module.exports = router;
