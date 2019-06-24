const express = require('express');

const router = express.Router();
const passport = require('passport');
const { check, validationResult } = require('express-validator');
// Load Product Model
const Resume = require('../../models/Resume');

// @route GET api/resume
// @desc get all resumes listed
// @access Private
router.get('/', (req, res) => {
  const errors = {};
  Resume.find()
    .sort({ date: -1 })
    .then(resumes => res.json(resumes))
    .catch(err =>
      res.status(404).json({
        noResumeFound: 'No resumes items',
      })
    );
});

// @route POST api/resume/form
// @desc Create Resume
// @access Private
router.post(
  '/resumeForm',
  // passport.authenticate("jwt", { session: false }),
  [
    check('firstName')
      .not()
      .isEmpty()
      .withMessage('First name field is required'),
    check('lastName')
      .not()
      .isEmpty()
      .withMessage('Last name field is required'),
    check('address')
      .not()
      .isEmpty()
      .withMessage('Address field is required'),
    check('address', 'Address must be between 4 and 40 charachters')
      .trim()
      .isLength({ min: 4, max: 40 }),
    check('city')
      .not()
      .isEmpty()
      .withMessage('City name field is required'),
    check('state')
      .not()
      .isEmpty()
      .withMessage('State field is required'),
    check('zipcode')
      .not()
      .isEmpty()
      .withMessage('Zipcode field is required'),
    check('personalEmail')
      .not()
      .isEmpty()
      .withMessage('Email field is required'),
    check('githubURL')
      .not()
      .isEmpty()
      .withMessage('GitHub URL is required'),
    // check('githubURL').not().isURL('githubURL').withMessage('Invalid Github link'),
    check('twitterURL')
      .not()
      .isEmpty()
      .withMessage('Twitter field is required'),
    // check('twitterURL').not().isURL('twitterURL').withMessage('Invalid Twitter link'),
    check('personalWebsiteURL').optional(),
    check('aboutMeStatement')
      .not()
      .isEmpty()
      .withMessage('About me field is required'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    const newResume = new Resume({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      cellPhone: req.body.cellPhone,
      personalEmail: req.body.personalEmail,
      githubURL: req.body.githubURL,
      twitterURL: req.body.twitterURL,
      personalWebsiteURL: req.body.personalWebsiteURL,
      aboutMeStatement: req.body.aboutMeStatement,
    });
    newResume
      .save()
      .then(resume => res.json(resume))
      .catch(err => res.json(err));
  }
);

// @route Delete api/resume/form
// @desc Create Resume
// @access Private

module.exports = router;
