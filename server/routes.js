// bring together all routes here at end
const express = require('express');
const router = express.Router();

// Import individual route files
const employeesRoute = require('./routes/employees');
const employeesByIdRoute = require('./routes/employeesbyid');
// Import other route files...

// Mount individual routes without '/api'
router.use(employeesRoute);
router.use(employeesByIdRoute);
// Mount other routes...

module.exports = router;
