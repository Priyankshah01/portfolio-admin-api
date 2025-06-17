// require('dotenv').config();
// const mongoose = require('mongoose');
// const Skill = require('./models/skill');

// const skills = [
//   { name: "UI-UX", order: 1 },
//   { name: "Research", order: 2 },
//   { name: "Figma", order: 3 },
//   { name: "HTML", order: 4 },
//   { name: "CSS", order: 5 },
//   { name: "JavaScript", order: 6 },
//   { name: "Responsive Design", order: 7 },
//   { name: "User Testing", order: 8 },
//   { name: "Rapid Prototyping", order: 9 },
//   { name: "User Interviews", order: 10 },
//   { name: "Customer Journey Mapping", order: 11 },
//   { name: "Usability Testing", order: 12 },
//   { name: "Information Architecture", order: 13 }
// ];

// const seed = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });

//     await Skill.deleteMany({});
//     await Skill.insertMany(skills);
//     console.log("✅ Skills seeded successfully!");
//     mongoose.connection.close();
//   } catch (err) {
//     console.error("❌ Error seeding skills:", err);
//     mongoose.connection.close();
//   }
// };

// seed();
