const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Comment = require('../models/Comment');

//get api/comments
//get user comments
//priv

router.get('/', auth, async (req, res) => {
  try {
    const comments = await Comment.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//post api/comments
//add comment
//priv

router.post(
  '/',
  [auth, [check('name', 'Name is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, message } = req.body;

    try {
      const newContact = new Contact({
        name,
        message,
        user: req.user.id,
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
//put api/conmments/:id
//update comment
//priv
router.put('/:id', auth, async (req, res) => {
  const { name, message } = req.body;

  // Build contact object
  const commentFields = {};
  if (name) commentFields.name = name;
  if (message) commentFields.message = message;

  try {
    let comment = await Comment.findById(req.params.id);

    if (!comment) return res.status(404).json({ msg: 'Comment not found' });

    comment = await Comment.findByIdAndUpdate(
      req.params.id,
      { $set: commentFields },
      { new: true }
    );

    res.json(contact);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

//delete api/comment/:id
//delete comment
//priv

router.delete('/:id', auth, async (req, res) => {
  try {
    let comment = await Comment.findById(req.params.id);

    if (!comment) return res.status(404).json({ msg: 'Comment not found' });

    // Make sure user owns contact
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Comment.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Comment removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
