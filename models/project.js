const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  tag: String,
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true, // used for detail page URL like `/projects/giftelle`
  },
  description: String,
  summary: String,
  tools: [String],
  challenge: String,
  approach: [String], // bullet points
  impact: String,
  images: [String],   // Array of image URLs for case study mockups
  image1: String,     // card image 1
  image2: String,     // card image 2
  githubLink: String,
  liveLink: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Project', projectSchema);
