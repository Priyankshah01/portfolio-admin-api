const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  iconUrl: {
    type: String,
    required: true
  },
  category: {
    type: String // optional (e.g., "Frontend", "Design Tool", etc.)
  },
  order: {
    type: Number // for sorting in the frontend
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Skill', skillSchema);
