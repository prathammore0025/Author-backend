const express = require('express');
const Author = require('../models/Author');
const Visitor = require('../models/Visitor');

const router = express.Router();

// Get all authors
router.get('/', async (req, res) => {
  try {
    const authors = await Author.find({});
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch authors' });
  }
});

// Get author by name and log visitor
router.get('/:name', async (req, res) => {
  try {
    const author = await Author.findOne({ name: req.params.name });
    if (!author) return res.status(404).json({ error: 'Author not found' });

    // Log visitor
    await Visitor.create({ accessedAuthor: author.name });

    res.json(author);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch author' });
  }
});

module.exports = router;
