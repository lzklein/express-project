require('dotenv').config();

const express = require('express');
const sequelize = require('./config'); 
// const { Shift, Employee, Schedule, TimeOffRequest } = require('./models'); //! for defining here, probably not needed
const routes = require('./routes');
const cors = require('cors');
const session = require('express-session');

// define app
const app = express();

const secretKey = process.env.SECRET_KEY;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(session({
  secret: secretKey, 
  resave: false, // prevent unnecessary server updates, won't save if no changes
  saveUninitialized: false, // don't save uninitialized sessions (new user that hasn't logged in or done anything yet)
}));
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
