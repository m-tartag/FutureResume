const express = require('express');

const router = express.Router();

// @route     GET api/auth
// @desc      Test Route
// @access    Private
router.get('/', (req, res) => {
  res.send('Auth');
});

module.exports = router;
