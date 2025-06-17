const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const Skill = require('../models/skill');

// --- Admin Home Page ---
router.get('/', (req, res) => {
  res.render('admin/index');
});

// --- PROJECTS ---
// List all projects with optional edit support
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    const editingId = req.query.edit || null;
    res.render('admin/projects', { projects, editingId });
  } catch (err) {
    console.error("Error fetching projects:", err);
    res.status(500).send("Server Error");
  }
});

// Handle project update (PUT)
router.put('/projects/:id', async (req, res) => {
  const {
    tag, title, slug, description, summary,
    tools, challenge, approach, impact,
    image1, image2, images, githubLink, liveLink
  } = req.body;

  await Project.findByIdAndUpdate(req.params.id, {
    tag,
    title,
    slug,
    description,
    summary,
    tools: tools ? tools.split(',').map(t => t.trim()) : [],
    challenge,
    approach: approach ? approach.split('\n').map(line => line.trim()).filter(Boolean) : [],
    impact,
    image1,
    image2,
    images: images ? images.split(',').map(img => img.trim()) : [],
    githubLink,
    liveLink,
  });

  res.redirect('/admin/projects');
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
  const editingId = req.query.edit || null;
  res.render('admin/skills', { skills, editingId });
});

// Add a new skill
router.post('/skills', async (req, res) => {
  try {
    const { name, iconUrl, category, order } = req.body;

    const newSkill = new Skill({
      name,
      iconUrl,
      category: category || null,
      order: order ? parseInt(order) : undefined
    });

    await newSkill.save();
    res.redirect('/admin/skills');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating skill');
  }
});


// ✅ Update a skill
router.put('/skills/:id', async (req, res) => {
  try {
    const { name, iconUrl, category, order } = req.body;
    await Skill.findByIdAndUpdate(req.params.id, {
      name,
      iconUrl,
      category,
      order
    });
    res.redirect('/admin/skills');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating skill');
  }
});

// Delete a skill
router.delete('/skills/:id', async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.redirect('/admin/skills');
});

module.exports = router;
