const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydatabase', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './mydatabase.db'
});

// imports
const Shift = require('./models/shifts');
const Employee = require('./models/employees');
const EmployeeSchedule = require('./models/employeeschedule');
const TimeOffRequest = require('./models/timeoffrequests');

// relationships
Employee.belongsToMany(Shift, { through: EmployeeSchedule });
Shift.belongsToMany(Employee, { through: EmployeeSchedule });

Employee.hasMany(TimeOffRequest);
TimeOffRequest.belongsTo(Employee);

module.exports = { sequelize, Shift, Employee, EmployeeSchedule, TimeOffRequest };
