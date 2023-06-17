const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const newClass = require('./routes/newClass.route');
const userInfoRoute = require('./routes/userInfo.route');
const newRoutine = require('./routes/routine.route');

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// route
app.use('/api/v1/class', newClass);
app.use('/api/v1/routine', newRoutine);
// app.use('/api/v1/user-info', userInfoRoute);

// root route
app.all('/', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is running.',
  });
});

module.exports = app;
