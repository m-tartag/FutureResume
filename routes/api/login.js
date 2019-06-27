const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { check, validationResult } = require('express-validator');
const keys = require('../../config/keys');

// const validateLoginInput = require("../../validation/login");

const User = require('../../models/User');
const Employer = require('../../models/Employer');

// @route     POST api/login
// @desc      Login Route
// @access    Public

router.post(
  '/',
  // Express-Validator
  [
    check('email', 'Invalid E-mail').isEmail(),
    check('email', 'Email field is required')
      .not()
      .isEmpty(),
    check('password', 'Password field is required')
      .not()
      .isEmpty(),
  ],

  (req, res) => {
    const errors = validationResult(req.body);

    const { email } = req.body;
    const { password } = req.body;

    // Find by user email
    User.findOne({ email }).then(user => {
      // Check if email exists in DB
      if (!user) {
        return res.status(404).json({ emailNotFound: 'Email was not found' });
      }
      // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // if the User matched
          // Create JWT Payload
          const payload = { id: user.id, name: user.name };
          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 3600,
            },
            (err, token) => {
              res.json({
                success: true,
                token: `Bearer ${token}`,
              });
            }
          );
        } else {
          errors.password = 'Incorrect password';
          return res.status(400).json(errors);
        }
      });
    });
  }
);

router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    });
  }
);

module.exports = router;
