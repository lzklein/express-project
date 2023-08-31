// bring together all routes here at end
const express = require('express');
const router = express.Router();

// Import individual route files
const employeesRoute = require('./routes/employees');
const employeesByIdRoute = require('./routes/employeesbyid');
const resetController = require('./routes/reset');

// Mount individual routes without '/api'
router.use(employeesRoute);
router.use(employeesByIdRoute);
router.delete('/reset', resetController.resetData);

module.exports = router;
