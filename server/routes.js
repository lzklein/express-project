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

// Mount routes
router.use(employeesRoute);
router.use(employeesByIdRoute);
router.delete('/reset', resetController.resetData);
router.use('/login', loginRoute);
router.use('/logout', logoutRoute);
router.use('/checksession', checkSessionRoute);

module.exports = router;
