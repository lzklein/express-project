const { DataTypes } = require('sequelize');
const sequelize = require('../models');

// join table employees to shifts
const Schedule = sequelize.define('schedule', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

module.exports = Schedule;