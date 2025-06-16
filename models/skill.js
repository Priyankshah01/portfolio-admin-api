const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  iconUrl: {
    type: String,
    required: true,
  },
  category: String, // e.g. "Frontend", "Design", etc. — optional
  order: Number,     // optional: helps with sorting display
});

module.exports = mongoose.model('Skill', skillSchema);
