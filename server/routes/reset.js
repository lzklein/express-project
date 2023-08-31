const { sequelize } = require('../models'); // Import your Sequelize instance

const resetController = {
  async resetData(req, res) {
    try {
      // Drop all tables and recreate them
      await sequelize.sync({ force: true });

      res.status(200).json({ message: 'Data reset successfully' });
    } catch (error) {
      console.error('Error resetting data:', error);
      res.status(500).json({ message: 'Error resetting data' });
    }
  },
};

module.exports = resetController;
