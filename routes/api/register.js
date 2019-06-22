const express = require('express');

const router = express.Router();

// @route     POST api/register
// @desc      Test Route
// @access    Public
router.get('/', (req, res) => {
  res.send('Register');
});

module.exports = router;
