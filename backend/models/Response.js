const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  query: String,
  summary: String,
  result_text: String,
  result_table_path: String,
  result_visualization_path: String,
  error: String,
});

module.exports = mongoose.model('Response', responseSchema);