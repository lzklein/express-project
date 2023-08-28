'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('timeoff', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      reason: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      selected_shifts: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      paid: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      employeeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'employees',
          key: 'id',
        },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('timeoff');
  },
};
