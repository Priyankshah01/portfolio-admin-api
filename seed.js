// require('dotenv').config();
// const mongoose = require('mongoose');
// const Project = require('./models/project');
// const Skill = require('./models/skill');

// // Connect to DB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('✅ Connected to MongoDB');
//     seedData();
//   })
//   .catch(err => console.error('❌ MongoDB connection error:', err));

// async function seedData() {
//   try {
//     await Project.deleteMany();
//     await Skill.deleteMany();

//     // Sample Projects
//     const projects = [
//       {
//         tag: "🎁 GIFTELLE",
//         title: "Giftelle",
//         slug: "giftelle",
//         description: "Personalized gifting experience",
//         summary: "Giftelle reduces decision fatigue by helping users choose thoughtful gifts from local vendors.",
//         tools: ["Figma", "HTML", "CSS", "JavaScript"],
//         challenge: "Users struggle with gift discovery and vendor visibility.",
//         approach: [
//           "User interviews to gather insights",
//           "Built responsive UI using Figma & React",
//           "Implemented vendor dashboard and filters"
//         ],
//         impact: "Improved user satisfaction with gift selection and vendor reach.",
//         image1: "/images/Giftelle-ui1.jpg",
//         image2: "/images/Giftelle-ui2.jpg",
//         images: [
//           "/images/Giftelle-ui1.jpg",
//           "/images/Giftelle-ui2.jpg",
//           "/images/Giftelle-ui3.jpg"
//         ],
//         image: ["/images/Giftelle-ui1.jpg"],
//         githubLink: "https://github.com/priyankshah01/giftelle",
//         liveLink: "https://giftelle.vercel.app",
//         services: "UX/UI Design, Frontend Development",
//         agency: "HRX Connect",
//         date: "March 2024",
//         status: "Design"
//       },
//       {
//         tag: "🎓 SCHOOLSYS",
//         title: "School Registration System",
//         slug: "schoolregistration",
//         description: "Modern student registration for private schools.",
//         summary: "An enrollment system that replaces paper-based workflows with digital forms and admin tools.",
//         tools: ["Figma", "HTML", "CSS", "JavaScript", "MySQL"],
//         challenge: "Manual workflows were inefficient and error-prone.",
//         approach: [
//           "Stakeholder interviews to define workflows",
//           "Designed parent and admin flows",
//           "Built registration form with validation"
//         ],
//         impact: "Streamlined enrollment and improved record management.",
//         image1: "/images/School-ui1.jpg",
//         image2: "/images/Giftelle-ui2.jpg",
//         images: ["/images/Giftelle-ui1.jpg"],
//         image: ["/images/Giftelle-ui1.jpg"],
//         githubLink: "",
//         liveLink: "",
//         services: "Design & Dev",
//         agency: "Capstone",
//         date: "March 2024",
//         status: "Design & Development"
//       }
//     ];

//     // Sample Skills
//     const skills = [
//       { name: "React", iconUrl: "/images/logos/react.png", category: "Frontend", order: 1 },
//       { name: "Figma", iconUrl: "/images/logos/figma.png", category: "Design", order: 2 },
//       { name: "HTML", iconUrl: "/images/logos/html.png", category: "Frontend", order: 3 },
//       { name: "CSS", iconUrl: "/images/logos/css.png", category: "Frontend", order: 4 },
//       { name: "JavaScript", iconUrl: "/images/logos/js.png", category: "Frontend", order: 5 },
//     ];

//     await Project.insertMany(projects);
//     await Skill.insertMany(skills);

//     console.log("🌱 Seed data inserted successfully!");
//     mongoose.connection.close();
//   } catch (err) {
//     console.error("❌ Seed error:", err);
//   }
// }
