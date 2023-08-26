const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydatabase', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './mydatabase.db'
});

// imports
const Shift = require('./models/shifts');
const Employee = require('./models/employees');
const Schedule = require('./models/schedule');
const TimeOffRequest = require('./models/timeoffrequests');

// relationships
Employee.belongsToMany(Shift, { through: Schedule });
Shift.belongsToMany(Employee, { through: Schedule });

Schedule.belongsTo(Employee, { foreignKey: 'employee_id' });
Schedule.belongsTo(Shift, { foreignKey: 'shift_id' });

Employee.hasMany(TimeOffRequest);
TimeOffRequest.belongsTo(Employee, { foreignKey: 'employee_id'});

module.exports = { sequelize, Shift, Employee, Schedule, TimeOffRequest };
