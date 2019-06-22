const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const chalk = require('chalk');

const port = process.env.port || 4000;
const keys = require('./config/keys');

const app = express();
// Middleware BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoDBUrl, { useNewUrlParser: true }).then(() => {
  console.log(chalk.green.inverse(`MongoDB Connected`));
});

// Passport middleware
app.use(passport.initialize());
// Passport Config
require('./config/passport')(passport);

app.get('/', (req, res) => {
  res.send('API Running');
});

// Define Routes

app.use('/api/register', require('./routes/api/register'));
app.use('/api/login', require('./routes/api/login'));
app.use('/api/auth', require('./routes/api/auth'));

app.listen(port, err => {
  if (err) throw err;
  console.log(chalk.blue.inverse(`Server Connected (Port: ${port})`));
});
