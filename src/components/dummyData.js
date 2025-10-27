
import {
  Users, MessageSquare,
  Calendar, 
  Bookmark, Monitor, Cpu, Server, Layers, Cloud,
} from 'lucide-react';
export const MY_PROFILE = {
  name: "Ritik Mehta",
  tagline: "Software Developer", 
  location: "Toronto, ON, Canada", 
  avatarUrl: "https://placehold.co/100x100/1D4ED8/ffffff?text=RM", 
  views: 223,
  impressions: 5826,
};
export const NEWS_DATA = [
  // Keeping LinkedIn News data as it's external content
  { title: "US hikes tariffs on Canadian imports?", link: "#", reads: "1h ago • 6,270 readers" },
  { title: "Suspects in Louvre jewel heist arrested", link: "#", reads: "1h ago • 1,056 readers" },
  { title: "More retired boomers pay to live on cruises", link: "#", reads: "2d ago • 71,438 readers" },
  { title: "Top AI researchers embrace 100-hour work week", link: "#", reads: "3h ago • 62,927 readers" },
  { title: "How key is office face time? Depends on...", link: "#", reads: "3h ago • 37,598 readers" },
];
export const QUICK_ACCESS_ITEMS = [
    { label: "Saved Items", icon: Bookmark, href: "#saved" },
    { label: "Groups", icon: Users, href: "#groups" },
    { label: "Newsletters", icon: MessageSquare, href: "#newsletters" },
    { label: "Events", icon: Calendar, href: "#events" },
];
export const PUZZLES = [
    { name: "Mini Sudoku", connections: "20 connections played" },
    { name: "Zip", connections: "40 connections played" },
    { name: "Tango", connections: "19 connections played" },
    { name: "Queens", connections: "20 connections played" },
];

export const skillCategories= [
  { category: "Frontend & UI", icon: Monitor, items: ["Angular (RxJS, NgRx)", "React.js", "TypeScript (v4.0+)", "JavaScript (ES6+)", "Angular Material", "Tailwind CSS (Implied from RoleSim)", "HTML", "CSS"] }, 
  { category: "Backend & Frameworks", icon: Server, items: ["Spring Boot (Microservices, Security, JPA)", "Node.js", "Express", "Java (v8+)", "Python (Scripting)", "RESTful APIs", "Maven"] },
  { category: "Cloud & DevOps", icon: Cloud, items: ["Azure", "OpenShift (OCP4)", "Kubernetes", "Docker", "GitHub Actions (CI/CD)", "Jenkins", "Ansible", "Git/GitHub/GitLab"] },
  { category: "Data & Persistence", icon: Layers, items: ["PostgreSQL (Implied from Supabase)", "MongoDB", "SQL (MySQL)", "Redis", "Kafka", "Elastic Search"] }, 
  { category: "AI & Tools", icon: Cpu, items: ["OpenAI API (LLM)", "TensorFlow", "scikit-learn", "Azure Cognitive Services", "LangChain/LangGraph", "Sleuth + Zipkin", "Dynatrace"] }, 
];
 export const projects = [
  { title: "RoleSim: Job-Aware Multi-Agent Interview System",
    summary: "Built a Generative-AI platform with Next.js and Tailwind CSS featuring a modular, DRY architecture. Implemented multi-agent workflow (Interviewer, Evaluator, Tutor) with LangChain concepts and Neo4j graph support. Used Server-Sent Events and RAG with Supabase pgvector and OpenAI GPT-4 embeddings for real-time.",
    tags: ["Next.js", "TypeScript", "LangChain", "OpenAI API", "Supabase", "Neo4j", "SSE"], // 
    repoUrl: "https://github.com/Ritik-rik/RoleSim", 
    demoUrl: null },
  { title: "Microservices: Order & User Management System",
    summary: "Built User and Order Services using Spring Boot REST APIs. Integrated Kafka for event-driven communication. Containerized with Docker and deployed on OpenShift. Implemented distributed tracing with Spring Boot, Sleuth, and Zipkin, reducing debugging time by 40%.",
    tags: ["Spring Boot", "Kafka", "Docker", "OpenShift", "Microservices", "Sleuth/Zipkin"], // 
    repoUrl: "https://github.com/Ritik-rik/Microservices-Project", 
    demoUrl: null },
  { title: "Algorithmic Pricing Loophole Simulator: The Surge Floor Fix",
    summary: "Developed an interactive simulation to expose and fix a real-world pricing loophole seen in major ride-sharing platforms. Built a dynamic HTML + Tailwind + JavaScript web simulator with adjustable surge variables and visual fare charts. Designed Python backend logic (fare_calculator.py) to demonstrate the flawed vs. fixed pricing algorithm using Surge Floor, preventing price collapse during peak hours.",
    tags: ["CSS", "HTML", "Python"],
    repoUrl: "https://github.com/ritikrikm/pricing-loophole-simulator", 
    demoUrl: "https://ritikrikm.github.io/pricing-loophole-simulator/" },
  { title: "Logistic Project",
    summary: "Built a full-stack logistics management platform with a React + Node.js architecture. Implemented client-server communication, optimized routes, and streamlined contact management features. Designed modular frontend and backend structure with reusable components, delivering a stable, production-ready solution for logistics automation.",
    tags: ["React","Node"], 
    repoUrl: "https://github.com/ritikrikm/logistic-project", 
    demoUrl: "https://vage.netlify.app" },
  { title: "TheCreativeBud E-commerce Website",
    summary: "Created an end-to-end e-commerce web app using HTML, CSS, and JavaScript with Firebase backend. Implemented real-time data synchronization, secure authentication, and a smooth product browsing experience. Configured CI/CD build scripts for optimized deployment, ensuring high performance and scalability.",
    tags: ["React","Node","Kafka"],  
    repoUrl: "https://github.com/ritikrikm/TheCreativeBud", 
    demoUrl: "https://thecreativebud.in" }
];

// Experience (From the PROFESSIONAL EXPERIENCE section) 
export const experiences = [
  {
    role: "Full Stack Developer (Contract - Part-Time)",
    company: "Tech Savi",
    location: "Toronto, Canada",
    start: "Jan 2025",
    end: "June 2025",
    bullets: [
      "Designed and integrated <b>RESTful APIs</b> with <b>Node.js</b> to ensure scalable system architecture.",
      "Automated server provisioning using <b>Ansible</b>, reducing setup time by 50%.",
      "Implemented secure user authentication with <b>Azure Active Directory</b> for over 1,000 users.",
      "Streamlined deployment processes using <b>GitHub Actions CI/CD</b>, integrating Azure services for database, authentication, and hosting, achieving <b>99.9% uptime</b>."
    ]
  },
  {
    role: "Software Developer Coop (Developer)",
    company: "Royal Bank of Canada",
    location: "Toronto, Canada",
    start: "Jan 2024",
    end: "Aug 2024",
    bullets: [
      "Assisted in migrating <b>Spring Boot</b> applications from PCF to <b>OpenShift Container Platform 4 (OCP4)</b>, improving scalability and resilience by <b>30%</b>.",
      "Configured <b>Kubernetes</b> pods and implemented <b>Horizontal Pod Autoscaling</b> and <b>CronJob Scheduling</b>, boosting efficiency by <b>85%</b>.",
      "Supported integration of <b>Kafka</b> and <b>Elastic Search</b> with Active Directory environments.",
      "Enhanced performance using <b>Cache as a Service</b> with <b>Armada</b> and <b>Dynatrace</b>.",
      "Developed robust test cases using <b>JUnit</b> and <b>Mockito</b>, achieving over <b>55% code coverage</b> on <b>SonarQube</b>."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Frontline VR India Venture",
    location: "Delhi, India",
    start: "May 2022",
    end: "December 2022",
    bullets: [
      "Tech Stack: ReactJS, JavaScript, Node.js, MongoDB, Microservices Architecture.",
      "Spearheaded the development of a customer-facing platform using <b>ReactJS</b>and <b>MongoDB<b/>, achieving rapid growth to 2,000 active users within 3 days of launch.",
      "Conducted rigorous testing using Jest, Postman, and Selenium, ensuring the reliability, functionality, and seamless integration of various components in the platform.",
      "Developed and deployed APIs to enhance integration capabilities and ensure seamless communication between services, improving system scalability by 40%.",
    ]
  },
];



export const feed= [
  { id: "p1", type: "skills", authorLabel: "Technical Skills", authorAvatarUrl: "https://placehold.co/40x40/0A66C2/ffffff?text=TS",
    createdAt: "2025-09-25T10:00:00Z", payload: skillCategories },
  { id: "p2", type: "projects", authorLabel: "Projects Showcase", authorAvatarUrl: "https://placehold.co/40x40/0077B5/ffffff?text=PS",
    createdAt: "2025-09-25T10:05:00Z", payload: projects },
  { id: "p3", type: "experience", authorLabel: "Professional Experience", authorAvatarUrl: "https://placehold.co/40x40/2D2D2D/ffffff?text=PE",
    createdAt: "2025-09-25T10:10:00Z", payload: experiences },
];
