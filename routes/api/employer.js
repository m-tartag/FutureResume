const express = require("express");

const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const { check, validationResult } = require("express-validator");

const Employer = require("../../models/Employer");

const Resume = require("../../models/Resume");

// @route POST api/employer/register
// @desc Register new employer account
// @access Public
router.post("/", (req, res) => {
  [
    check("name", "Name field is required")
      .not()
      .isEmpty(),
    check("email", "Invalid E-mail").isEmail(),
    check("email")
      .not()
      .isEmpty()
      .withMessage("Email field is required"),
    check(
      "password",
      "Password must contain a minimum of (6) characters"
    ).isLength({
      min: 6
    }),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Password field is required"),
    check("password2")
      .not()
      .isEmpty()
      .withMessage("Please confirm your password"),
    check("password2")
      .custom(() => {
        if (req.body.password === req.body.password2) {
          return true;
        }
        return false;
      })
      .withMessage("Password does not match"),
    check("companyname")
      .not()
      .isEmpty()
      .withMessage("Company field is required"),
    check("position")
      .not()
      .isEmpty()
      .withMessage("Position field is required")
  ];
  const errors = validationResult(req.body);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors });
  }

  const newEmployer = new Employer({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    password2: req.body.password2,
    companyname: req.body.companyname,
    position: req.body.position
  });
  // Hash password before saving in database

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newEmployer.password, salt, (err, hash) => {
      newEmployer.password = hash;
      newEmployer
        .save()
        .then(employer => res.json(employer))
        .catch(err => res.json(err));
    });
  });
});

// @route POST api/employer/login
// @desc Login for employer
// @access Public

router.post("/login", (req, res) => {
  [
    check("email", "Invalid E-mail").isEmail(),
    check("email")
      .not()
      .isEmpty()
      .withMessage("Email field is required"),
    check(
      "password",
      "Password must contain a minimum of (6) characters"
    ).isLength({
      min: 6
    }),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Password field is required")
  ];

  const errors = validationResult(req.body);

  const { email } = req.body;
  const { password } = req.body;

  Employer.findOne({ email }).then(employer => {
    // Check if email exists in DB
    if (!employer) {
      return res.status(404).json({ emailNotFound: "Email was not found" });
    }
    // Check password
    bcrypt.compare(password, employer.password).then(isMatch => {
      if (isMatch) {
        // if the Employer matched
        // Create JWT Payload
        const payload = { id: employer.id, name: employer.name };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 3600 // 1 hour
          },
          (err, token) => {
            res.json({
              success: true,
              token: `Bearer ${token}`
            });
          }
        );
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route Get api/employer/
// @desc Get all resumes in database
// @access Private
router.get("/resumes", // passport.authenticate("jwt", { session: false }),
(req, res) => {
  const errors = {};
  Resume.find()
    .sort({ date: -1 })
    .then(resumes => res.json(resumes))
    .catch(err =>
      res.status(404).json({
        noResumeFound: "No Resumes Found"
      })
    );
});

module.exports = router;
