
import { Project, Education, SkillCategory } from './types';

export const RESUME_DATA = {
    name: "Erykah Wanga",
    location: "Nairobi, Kenya",
    email: "erkahwanga@gmail.com",
    github: "https://github.com/ErykahWanga",
    linkedin: "https://www.linkedin.com/in/erykah-wanga-1176b2365/",
    summary: "Highly motivated and detail-oriented Software Engineering student with hands-on experience in building full-stack web applications. I specialize in designing scalable systems including business management platforms and inventory solutions using modern frameworks like React and Flask.",
    profileImage: "/images/swan.jpeg" // <-- use relative path from public
  };
  

export const PROJECTS: Project[] = [
  {
    title: "Ajali Reporter",
    description: "Emergency & Incident Reporting Platform",
    longDescription: [
      "Designed and developed a full-stack web application enabling users to report road accidents in real time.",
      "Implemented secure authentication and role-based access (users & admin).",
      "Built features for image uploads, location tagging, and emergency call integration.",
      "Developed an admin dashboard for monitoring incidents and managing reports."
    ],
    techStack: ["React", "Flask", "Tailwind CSS", "PostgreSQL", "JWT"],
    role: "Full-Stack Developer",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    url: "https://github.com/ErykahWanga/ajali-reporter"
  },
  {
    title: "Imara",
    description: "Community & Service Management Platform",
    longDescription: [
      "Created a scalable platform aimed at improving community coordination and service reporting.",
      "Implemented user authentication, data validation, and responsive UI design.",
      "Applied clean architecture principles to ensure maintainability and scalability."
    ],
    techStack: ["React", "Flask", "PostgreSQL"],
    role: "Full-Stack Developer",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    url: "https://github.com/ErykahWanga/imara"
  },
  {
    title: "Point of Sale (POS)",
    description: "Inventory Management System",
    longDescription: [
      "Developed a complete POS system for a local restaurant.",
      "Implemented features for sales tracking, inventory management, and automated stock updates.",
      "Improved operational efficiency and reduced manual record-keeping.",
      "Designed an intuitive interface suitable for non-technical users."
    ],
    techStack: ["Python", "Flask", "SQLite", "HTML/CSS"],
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800",
    url: "https://github.com/ErykahWanga/pos-system"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "The Open University",
    duration: "Ongoing",
    coursework: [
      "Data Structures & Algorithms",
      "Web Development (Frontend & Backend)",
      "Database Management Systems",
      "Software Engineering & System Design",
      "Version Control & Agile Development"
    ]
  },
  {
    degree: "Certificate in Software Engineering",
    institution: "Moringa School, Kenya",
    duration: "Completed"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "Python", "Java", "SQL", "HTML5", "CSS3", "C++", "TypeScript" ]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React.js", "Flask", "Tailwind CSS"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "SQLite"]
  },
  {
    category: "Tools & Core",
    skills: ["Git", "GitHub", "REST APIs", "JWT", "Figma", "Full-Stack Dev", "System Design", "UI/UX"]
  }
];
