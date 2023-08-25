const { DataTypes } = require('sequelize');
const sequelize = require('../models');

const Shift = sequelize.define('Shift', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    day_of_week: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    employees_needed:{
        type: DataTypes.INTEGER,
        allowNull:false,
    }
});


module.exports = Shift;
