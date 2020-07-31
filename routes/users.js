const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

//post api/users
//register user
//pub
router.post(
  '/',
  [
    //validation
    check('name', 'Please insert a name').not().isEmpty(),
    check('email', 'Please insert a valid email').isEmail(),
    check(
      'password',
      'Please insert a password with 8 or more characters'
    ).isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    //validation fail
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      //when trying to reg user that exists
      if (user) {
        return res.status(400).json({ msg: 'User exists' });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      //combineing user password with salt
      user.password = await bcrypt.hash(password, salt);

      await user.save();

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
