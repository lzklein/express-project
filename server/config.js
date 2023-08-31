const { Sequelize } = require('sequelize');

console.log('Starting Sequelize configuration...');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './mydatabase.db'
});

console.log('Sequelize instance created.');

// Test the connection
(async () => {
  try {
    console.log('Attempting to authenticate...');
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
