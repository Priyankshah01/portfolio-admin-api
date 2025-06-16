const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  tag: { type: String },
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  summary: { type: String },
  tools: [{ type: String }], // e.g., ["React", "Figma"]
  challenge: { type: String },
  approach: [{ type: String }], // e.g., ["Sketched key flows", "Prototyped UI"]
  impact: { type: String },
  image1: { type: String }, // card display image
  image2: { type: String }, // card display image
  images: [{ type: String }], // additional image gallery
  image: [{ type: String }],  // alternate image set (optional for detail view)
  githubLink: { type: String },
  liveLink: { type: String },
  agency: { type: String },   // optional (used in your ProjectIntro)
  services: { type: String }, // optional (used in your ProjectIntro)
  date: { type: String },     // optional: "March 2024"
  status: { type: String, default: "Design" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);
