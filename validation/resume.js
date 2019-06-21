const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = validateResumeInput = data => {
  let errors = {};
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.state = !isEmpty(data.state) ? data.state : "";
  data.zipcode = !isEmpty(data.zipcode) ? data.zipcode : "";
  data.personalEmail = !isEmpty(data.personalEmail) ? data.personalEmail : "";
  data.githubURL = !isEmpty(data.githubURL) ? data.githubURL : "";
  data.twitterURL = !isEmpty(data.twitterURL) ? data.twitterURL : "";
  data.aboutMeStatement = !isEmpty(data.aboutMeStatement) ? data.aboutMeStatement : "";

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First name field is required";
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last name field is required";
  }
  if (Validator.isEmpty(data.address)) {
    errors.address = "Address field is required";
  }
  if (Validator.isLength(data.address, { min: 4, max: 40 })) {
    errors.firstName = "Address must be between 4 and 40 characters";
  }
  if (Validator.isEmpty(data.city)) {
    errors.city = "City field is required";
  }
  if (Validator.isEmpty(data.zipcode)) {
    errors.zipcode = "Zipcode field is required";
  }
  if (!Validator.isEmail(data.personalEmail)) {
    errors.personalEmail = "Invalid Email Address";
  }
  if (Validator.isEmpty(data.personEmail)) {
    errors.personEmail = "Email field is required";
  }
  if (!Validator.isURL(data.githubURL, {})) {
    errors.githubURL = "Invalid GitHub link";
  }
  if (Validator.isEmpty(data.githubURL)) {
    errors.githubURL = "GitHub field is required";
  }
  if (!Validator.isURL(data.twitterURL)) {
    errors.twitterURL = "Invalid Twitter link";
  }
  if (Validator.isEmpty(data.twitterURL)) {
    errors.twitterURL = "Twitter field is required";
  }
  if (Validator.isEmpty(data.aboutMeStatement)) {
    errors.aboutMeStatement = "About Me field is required";
  }
};
