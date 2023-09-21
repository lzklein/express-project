const { DataTypes } = require('sequelize');
const sequelize = require('../config');

// join table employees to shifts
const Schedule = sequelize.define('schedules', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

module.exports = Schedule;