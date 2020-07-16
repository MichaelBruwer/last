const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const Company = require('../models/Companys');
const { JsonWebTokenError } = require('jsonwebtoken');

//@route        POST api/companys
//@desc         Register a company
//@access       Public
router.post(
  '/',
  [
    check('name', 'Please insert a name').not().isEmpty(),
    check('email', 'Please insert a valid email').isEmail,
    check(
      'password',
      'Please insert a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let company = await Company.findOne({ email });

      if (company) {
        return res.status(400).json({ msg: 'Company already exists' });
      }

      company = new Company({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      company.password = await bcrypt.hash(password, salt);

      await company.save();

      const payload = {
        company: {
          id: company.id,
        },
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
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
