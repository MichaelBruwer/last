const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');

//get api/auth
//get logged user
//priv
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    //fail
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//post api/auth
//auth user & token
//pub
router.post(
  '/',
  //validation
  [
    check('email', 'use valid email').isEmail(),
    check('password', 'Cannot be Null or Empty').exists(),
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
      //users email match , password chk
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
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
