const { DataTypes } = require('sequelize');
const sequelize = require('../models');

const EmployeeSchedule = sequelize.define('EmployeeSchedule', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

});

module.exports = EmployeeSchedule;