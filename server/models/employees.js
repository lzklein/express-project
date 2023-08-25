const { DataTypes } = require('sequelize');
const sequelize = require('../models');

const Employee = sequelize.define('Employee', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

});

module.exports = Employee;