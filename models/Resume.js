const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema
const ResumeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  cellPhone: {
    type: String,
    required: true,
  },
  personalEmail: {
    type: String,
    required: true,
  },
  githubURL: {
    type: String,
    required: true,
  },
  twitterURL: {
    type: String,
    required: true,
  },
  personalWebsiteURL: {
    type: String,
  },
  aboutMeStatement: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Resume = mongoose.model('resumes', ResumeSchema);
