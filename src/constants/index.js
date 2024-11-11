import yelpCamp from "../assets/projects/yelpCamp.jpg";
import project3 from "../assets/projects/chromext.png";
import fileShare from "../assets/projects/fileShare.png"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Vue.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Vue.js, Node.js, Express, sails.js, rabbitMQ, ElasticSearch, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "July 2023 – Sept 2024",
    role: "Software Engineer",
    company: "Provakil",
    location: "Pune, Maharashtra",
    description: `Optimized export functionality using pandas and RabbitMQ, reducing processing time by 36%—from 14 minutes to 9 minutes—for approximately 20,000 resources, resulting in substantial time savings for users. Designed and implemented an event-based mailing system, empowering users to send emails based on resource updates or creation events. Developed and integrated an autofill feature for forms, streamlining data entry processes and improving user experience by reducing manual input effort.`,
    technologies: ["Vue.js", "Sails.js", "Node.js", "HTML/CSS", "RabbitMQ", "JavaScript", "ElasticSearch", "MongoDB"],
  },
  {
    year: "Jan 2023 – June 2023",
    role: "Software Engineer Intern",
    company: "Provakil",
    location: "Pune, Maharashtra",
    description: `Worked as part of the configurator team, contributing to both frontend and backend development. Collaborated with team members to develop and enhance various features, such as External Forms and Duplicacy Checking in resources, while also developing APIs for new events to enable seamless integration with external systems.`,
    technologies: ["Vue.js", "Sails.js", "Node.js", "HTML/CSS", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "YelpCamp",
    image: yelpCamp,
    description:
      "Developed a full-stack web application for campsite reviews and bookings, featuring user authentication, CRUD operations for reviews and comments, and responsive design. Implemented RESTful API routes and designed a scalable MongoDB schema to efficiently store and retrieve user data, campsite information, reviews, and comments. Utilized Express middleware for error handling and user authorization, ensuring secure access to protected routes and enhancing overall user experience.",
    technologies: ["Express", "Node.js", "MongoDB", "EJS", "HTML/CSS", "Bootstrap"],
  },
  {
    title: "File Sharing App",
    image: fileShare,
    description:
      "Engineered a robust file-sharing platform allowing users to upload, store, and generate shareable links for various files. Developed a RESTful API using Express to handle file uploads, storage in MongoDB, and secure file retrieval. Implemented user authentication and file access controls to ensure data privacy and security.",
    technologies: ["Express", "Node.js", "MongoDB", "EJS", "HTML/CSS", "Multer"],
  },
  {
    title: "CSGO PriceChecker",
    image: project3,
    description:
      "Designed and developed a Chrome extension to aggregate real-time pricing data from multiple CS:GO trading websites, providing users with comprehensive market information. Implemented asynchronous JavaScript to fetch and process data from various APIs, ensuring fast and efficient price comparisons.",
    technologies: ["JavaScript", "HTML/CSS", "Chrome Extensions API", "RESTful APIs"],
  },
];


export const CONTACT = {
  address: "Gorakhpur, Uttar Pradesh",
  phoneNo: "+91 6378000206",
  email: "pvtabhay13901@gmail.com",
};
