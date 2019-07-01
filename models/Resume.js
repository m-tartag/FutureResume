const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema
const ResumeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
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
  zipcode: {
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
  skills: {
    type: [String],
    required: true,
  },
  experience: [
    {
      title: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      location: {
        type: String,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
      jobDescription: {
        type: String,
        required: true,
      },
    },
  ],
  education: [
    {
      school: {
        type: String,
        required: true,
      },
      degree: {
        type: String,
      },
      fieldOfStudy: {
        type: String,
        required: true,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
        required: true,
      },
    },
  ],
  social: {
    githubURL: {
      type: String,
      required: true,
    },
    twitterURL: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
    },
    personalWebsiteURL: {
      type: String,
    },
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
