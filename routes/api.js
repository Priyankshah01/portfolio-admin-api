const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const Skill = require('../models/skill');

// GET /api/projects — all projects as JSON
router.get('/projects/:slug', async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) return res.status(404).json({ error: "Not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/skills — all skills as JSON
router.get('/skills', async (req, res) => {
  try {
    const skills = await Skill.find().sort({ order: 1 });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching skills', error: err.message });
  }
});

module.exports = router;
