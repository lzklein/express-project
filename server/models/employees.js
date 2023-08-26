const { DataTypes } = require('sequelize');
const sequelize = require('../models');

const Employee = sequelize.define('employees', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salary: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hire_date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW, 
    },
    admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    hours: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }
});

module.exports = Employee;