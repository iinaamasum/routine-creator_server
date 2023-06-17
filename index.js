const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5001;

mongoose.connect(process.env.DB_URL).then(() => {
  console.log('DB connected.');
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
