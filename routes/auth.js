const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

//@route        Get api/auth
//@desc         Get logged in user
//@access       Private
router.get('/', auth, async (req, res) => {
  try {
    //pass
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    //fail
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route        POST api/auth
//@desc         Auth user & get token
//@access       Public
router.post(
  '/',
  //validation
  [
    check('email', 'Please include valid email').isEmail(),
    check('password', 'Password required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    //if no errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      // not the users email
      if (!user) {
        return res.status(400).json({ msg: 'Wrong Details' });
      }
      //users email
      const isMatch = await bcrypt.compare(password, user.password);
      //not users password
      if (!isMatch) {
        return res.status(400).json({ msg: 'Wrong Details' });
      }
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 36000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      //error
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
