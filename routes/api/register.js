const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route     POST api/register
// @desc      Test Route
// @access    Public
router.get('/', (req, res) => {
  res.send('Register');
});

module.exports = router;
