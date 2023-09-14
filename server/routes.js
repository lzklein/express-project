// bring together all routes here at end
const express = require('express');
const router = express.Router();

// Import route files
const employeesRoute = require('./routes/employees');
const employeesByIdRoute = require('./routes/employeesbyid');
const resetController = require('./routes/reset');
const loginRoute = require('./routes/login');
const logoutRoute = require('./routes/logout');
const checkSessionRoute = require('./routes/checksession');
const shiftsRoute = require('./routes/shifts');
const shiftsByIdRoute = require('./routes/shiftbyid');
const timeOffRoute = require ('./routes/timerequests');
const timeOffByIdRoute = require ('./routes/timerequestbyid');
const scheduleRoute = require ('./routes/schedule')

// Mount routes
router.use(employeesRoute);
router.use(employeesByIdRoute);
router.delete('/reset', resetController.resetData);
router.use(loginRoute);
router.use(logoutRoute);
router.use(checkSessionRoute);
router.use(shiftsRoute)
router.use(shiftsByIdRoute)
router.use(timeOffRoute)
router.use(timeOffByIdRoute)
router.use(scheduleRoute)


module.exports = router;
