const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const port = process.env.Port || 4000;
const keys = require('./config/keys');


const app = express();
// Middleware BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


// Connect to MongoDB Atlas
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoDBUrl, { useNewUrlParser: true }).then(()=>{
    console.log(`MongoDB Connected`)
})

// Passport middleware
app.use(passport.initialize());
//Passport Config
require('./config/passport')(passport);

app.listen(port, err =>{
    if (err) throw err 
    console.log(`App currently listening on port ${port}`);
});


