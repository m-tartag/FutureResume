const express = require('express');
const config = require('config');

const router = express.Router();
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route     POST api/register
// @desc      Test Route
// @access    Public

router.post(
  '/',

  // Express-Validator
  [
    check('name', 'Invalid Name')
      .not()
      .isEmpty(),
    check('email', 'Invalid E-mail').isEmail(),
    check(
      'password',
      'Password must contain a minimum of (6) characters'
    ).isLength({
      min: 6,
    }),
  ],

  // Use Async/Await

  async (req, res) => {
    const errors = validationResult(req);

    // Just a fancy error catch - sends back error in json format

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // 2: Check to see if User Already Exists

    const { name, email, password } = req.body;
    console.log(req.body);
    try {
      let user = await User.findOne({ email });
      if (user) {
        res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }

      // 4. Create New User

      user = new User({
        name,
        email,
        password,
      });

      // 5. Encrypt password

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // 6. Save New User

      await user.save();

      // 7. Return JWT to User

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtToken'),
        {
          expiresIn: 200000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
