const express = require('express');
const router = express.Router();
const { Shift, Schedule, Employee } = require('../models'); 

router.get('/schedule', async (req, res) => {
  console.log('in /schedule')
  const { dayOfWeek } = req.query; //  /schedule?dayofweek=dayOfWeek
  console.log("got day of week: ", dayOfWeek)
  try {
    const employees = [];
    // finding shifts of day
    const shifts = await Shift.findAll({ where: { day_of_week: dayOfWeek } });
    console.log("the shifts: ", shifts)
    for (const shift of shifts) {
      // find employee with found shift
      const scheduleItem = await Schedule.findOne({
        where: { shift_id: shift.id },
        include: [{ model: Employee }],
      });

      if (scheduleItem && scheduleItem.Employee) {

        employees.push({
          id: scheduleItem.Employee.id,
          name: scheduleItem.Employee.name,
          shift: shift
        });
      }
    }
    res.json(employees);
  } catch (error) {
    console.error('Error fetching schedule data:', error);
    res.status(500).json({ message: 'Error fetching schedule data' });
  }
});

module.exports = router;
