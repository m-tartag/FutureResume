const express = require('express');

const router = express.Router();

// @route     POST api/login
// @desc      Test Route
// @access    Public
router.post('/', (req, res) => {
  res.send('Login');
});

module.exports = router;
