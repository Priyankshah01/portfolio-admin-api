const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  iconUrl: {
    type: String // optional: can be added later for logos
  },
  category: {
    type: String // optional: "Frontend", "Design", etc.
  },
  order: {
    type: Number // for sorting
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Skill', skillSchema);
