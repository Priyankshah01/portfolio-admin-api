const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const Skill = require('../models/skill');

// --- Admin Home Page ---
router.get('/', (req, res) => {
  res.render('admin/index');
});

// --- PROJECTS ---
// List all projects
router.get('/projects', async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.render('admin/projects', { projects });
});

// Add a new project
router.post('/projects', async (req, res) => {
  try {
    await Project.create(req.body);
    res.redirect('/admin/projects');
  } catch (err) {
    res.status(400).send('Error creating project: ' + err.message);
  }
});

// Delete a project
router.delete('/projects/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.redirect('/admin/projects');
});


// --- SKILLS ---
// List all skills
router.get('/skills', async (req, res) => {
  const skills = await Skill.find().sort({ order: 1 });
  res.render('admin/skills', { skills });
});

// Add a new skill
router.post('/skills', async (req, res) => {
  try {
    await Skill.create(req.body);
    res.redirect('/admin/skills');
  } catch (err) {
    res.status(400).send('Error creating skill: ' + err.message);
  }
});

// Delete a skill
router.delete('/skills/:id', async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.redirect('/admin/skills');
});

module.exports = router;
