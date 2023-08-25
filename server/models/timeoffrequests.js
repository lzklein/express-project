const { DataTypes } = require('sequelize');
const sequelize = require('../models');

const TimeOffRequest = sequelize.define('TimeOffRequest', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

});


module.exports = TimeOffRequest;
