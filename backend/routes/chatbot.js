const express = require('express');
const router = express.Router();
const Response = require('../models/Response');

router.post('/', async (req, res) => {
  const { query } = req.body;

  // Simulate API response
  const apiResponse = {
    summary: 'This is a summary',
    result_text: 'This is the result',
  };

  try {
    // Save response in MongoDB
    const newResponse = new Response({ query, ...apiResponse });
    await newResponse.save();

    res.json(apiResponse);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/responses', async (req, res) => {
  try {
    const responses = await Response.find();
    res.json(responses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch responses' });
  }
});
module.exports = router;
