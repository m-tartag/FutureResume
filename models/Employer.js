const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema
const EmployerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  companyname: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});

module.exports = Employer = mongoose.model('employer', EmployerSchema);
