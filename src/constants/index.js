export const profile = {
  name: "Yousef Laurence Abayan",
  shortName: "Yousef",
  initials: "Y",
  role: "Full-Stack Developer",
  roles: ["Full-Stack Developer", "Virtual Tour Developer", "Operations Associate"],
  tagline:
    "I build web apps with React, Next.js and Laravel, and craft immersive virtual tours.",
  image: "/images/profile.png",
  // Set an email address to enable the contact form (opens the visitor's mail app).
  email: "",
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const about = [
  "I'm an IT student who enjoys solving problems and is always eager to learn. My background covers programming, databases, networking and software development.",
  "For my capstone project I taught myself game development, and today I work across virtual tours, 3D, and full-stack web development at Mata Technology Inc.",
  "Outside of work, I enjoy playing online games and basketball.",
];

export const services = [
  { title: "Front-end Developer", icon: "monitor" },
  { title: "Back-end Developer", icon: "server" },
  { title: "Virtual Tour Developer", icon: "view" },
  { title: "3D & Game Developer", icon: "box" },
];

export const technologies = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind CSS", color: "#38BDF8" },
  { name: "Vue", color: "#42B883" },
  { name: "Laravel", color: "#FF2D20" },
  { name: "Supabase", color: "#3ECF8E" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "Firestore", color: "#FFA000" },
  { name: "C#", color: "#A179DC" },
  { name: "Java", color: "#F89820" },
  { name: "XML", color: "#00F0FF" },
];

export const experiences = [
  {
    title: "Operations Associate",
    company: "Mata Technology Inc.",
    type: "Regular",
    date: "March 2025 – Present",
    points: [
      "Handle multiple clients and projects as an Operations Associate.",
      "Learning React, Vue.js and Next.js for production web projects.",
      "Building a content management system with Laravel.",
    ],
  },
  {
    title: "Virtual Tour Developer",
    company: "Mata Technology Inc.",
    type: "Probationary",
    date: "September 2024 – March 2025",
    points: [
      "Handled client communication and led on-site shoots.",
      "Developed virtual tours for clients.",
      "Learned 3D modeling, animation and game development.",
    ],
  },
  {
    title: "Intern",
    company: "Mata Technology Inc.",
    type: "Internship",
    date: "June 2024 – September 2024",
    points: [
      "Designed Figma prototypes for a virtual tour.",
      "Started learning web development.",
    ],
  },
];

// `media` without an extension: an .mp4 + .jpg poster exist for videos, a .jpg for stills.
export const projects = [
  {
    name: "ExperienceCebu Booking Platform",
    role: "Back-end Developer",
    description:
      "A booking platform for tourism experiences across Cebu. Customers browse, view details, pick schedules and book, while administrators manage packages, availability, reservations and bookings.",
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase", "Firebase"],
    media: "experiencecebu",
    video: true,
    live: "https://experiencecebu.ph",
    featured: true,
  },
  {
    name: "Visit Central Visayas",
    role: "Front-end Developer",
    description:
      "A tourism website showcasing destinations, attractions, events, culture and experiences across Central Visayas. I built and maintained its responsive, user-facing interface.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Firebase"],
    media: "visitcentralvisayas",
    video: true,
    live: "https://r7-tourism.web.app",
    featured: true,
  },
  {
    name: "Gas Management System",
    role: "Front-end Developer",
    description:
      "Built with the Cebu City Mayor's office to distribute gasoline fairly during possible shortages — assigning weekly fuel limits, tracking consumption and discouraging hoarding.",
    tags: ["React", "Tailwind CSS", "Firestore", "Firebase"],
    media: "agas",
    video: true,
    featured: true,
  },
  {
    name: "Seaza Booking Registration",
    role: "Front-end Developer",
    description:
      "An online registration system for the SEAZA event at Cebu Safari that collects participant information and helps organizers manage registrations.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    media: "seaza",
    video: true,
    featured: true,
  },
  {
    name: "Content Management System",
    role: "Full-Stack Developer",
    description:
      "A CRUD system that lets clients upload, update and remove virtual tour images that appear on the live tour, and add and categorize location descriptions.",
    tags: ["Laravel", "Vue", "XML"],
    media: "cms",
    video: true,
    featured: true,
  },
  {
    name: "Mactan Newtown Virtual Tour",
    role: "Main Developer",
    description:
      "My first successful virtual tour: 360° panoramas with smooth navigation, a side UI and interactive points of interest.",
    tags: ["XML", "HTML5", "CSS3", "JavaScript"],
    media: "mactan",
    video: true,
    featured: true,
  },
  {
    name: "Costavida 3D Modeling",
    role: "Environment Artist, Developer",
    description:
      "A detailed 3D building model composited into a 360° panorama of the site so it appears built in its real surroundings. The final render is featured in the Mactan Newtown Virtual Tour.",
    tags: ["3D Modeling", "XML", "HTML5", "JavaScript"],
    media: "costa",
    video: true,
  },
  {
    name: "BFP Fire Simulation",
    role: "Main Developer",
    description:
      "An interactive game that teaches fire emergency response through hands-on scenarios, built for people who learn best by playing.",
    tags: ["C#", "Game Dev"],
    media: "bfp",
    video: true,
  },
  {
    name: "Virtual Tour APK – Android Offline",
    role: "Main Developer",
    description:
      "A Java-based builder that automates packaging a virtual tour into an Android app, then compiled in Android Studio into an installable offline APK.",
    tags: ["Java", "XML", "HTML"],
    media: "APK",
  },
  {
    name: "Vlog-01",
    role: "Multimedia Expert, Horror Game Designer",
    description:
      "The first game from my capstone team. I added the jumpscares and improved the game logic.",
    tags: ["C#", "Game Dev"],
    media: "vlog01",
  },
];

export const socials = [
  {
    name: "LinkedIn",
    handle: "Yousef Laurence Abayan",
    url: "https://www.linkedin.com/in/yousef-laurence-abayan-12912b316/",
    icon: "linkedin",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    handle: "@Seffffff523",
    url: "https://github.com/Seffffff523",
    icon: "github",
    color: "#e6edf3",
  },
  {
    name: "GitHub",
    handle: "@Owen-newO",
    url: "https://github.com/Owen-newO",
    icon: "github",
    color: "#a855f7",
  },
  {
    name: "Facebook",
    handle: "Yousef Laurence Abayan",
    url: "https://www.facebook.com/youseflaurence.abayan.52",
    icon: "facebook",
    color: "#1877F2",
  },
];
