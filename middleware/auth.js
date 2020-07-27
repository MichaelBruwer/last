const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  //get token
  const token = req.header('x-auth-token');

  // no token
  if (!token) {
    return res.status(401).json({ msg: 'No token,Access denied' });
  }

  try {
    //success
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    //fail
    res.status(401).json({ msg: 'Token is invalid' });
  }
};
