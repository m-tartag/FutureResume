const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
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

app.listen(port, err =>{
    if (err) throw err 
    console.log(`App currently listening on port ${port}`);
});

