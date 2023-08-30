const express = require('express');
const { sequelize } = require('./models'); // Import your Sequelize instance
const routes = require('./routes'); // Import your routes
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// Add any other middleware you need, e.g., CORS handling

app.use(routes);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).send('Something went wrong!');
});


const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
  
module.exports = app;
