const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Shift = sequelize.define('shifts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    day_of_week: {
        type: DataTypes.STRING,
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
