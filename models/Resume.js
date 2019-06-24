const mongoose = require("mongoose");

const { Schema } = mongoose;

// Create Schema
const ResumeSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  },
  cellPhone: {
    type: String,
    required: true
  },
  personalEmail: {
    type: String,
    required: true
  },
  githubURL: {
    type: String,
    required: true
  },
  twitterURL: {
    type: String,
    required: true
  },
  personalWebsiteURL: {
    type: String
  },
  aboutMeStatement: {
    type: String,
    required: true
  },
  devRole: {
    type: [String],
    required: true
  },
  devSkills: {
    type: [String],
    required: true
  },
  education1: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      degreeTitle: {
        type: String,
        required: true
      }
    }
  ],
  education2: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      degreeTitle: {
        type: String,
        required: true
      }
    }
  ],
  capProjects: [
    {
      gitURL: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  ],
  languages: {
    type: [String],
    required: true
  },
  frameworks: [
    {
      framework: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      }
    }
  ],
  techSkills: [
    {
      skill: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      }
    }
  ],
  expYears: {
    type: Number,
    required: true
  },
  experience: [
    {
      company: {
        type: String,
        required: true
      },
      startDate: {
        type: Date,
        required: true
      },
      endDate: {
        type: Date,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Resume = mongoose.model("resumes", ResumeSchema);
