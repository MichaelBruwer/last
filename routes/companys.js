const express = require('express');
const router = express.Router();

//@route        POST api/companys
//@desc         Register a company
//@access       Public
router.post('/', (req, res) => {
  res.send('Register a company');
});

module.exports = router;
