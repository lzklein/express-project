const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const TimeOffRequest = sequelize.define('timeoffs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    reason: {
        type: DataTypes.STRING,
        allowNull: false
    },
    selected_shifts: {
        type: DataTypes.JSON,
        allowNull: false
    },
    paid: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});


module.exports = TimeOffRequest;
