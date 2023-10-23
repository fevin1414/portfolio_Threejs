import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Android App Developer",
    icon: mobile,
  },
  {
    title: "Frontend And Backend Developer",
    icon: backend,
  },

  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "php",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Ruby on Rails",
    icon: nodejs,
  },
  {
    name: "python",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "java",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Website and Marketing Manager(wordpress ,freelance)",
    company_name: "Canadian Agri Tech",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - Current",
    points: [
      "	Demonstrated exceptional autonomy by taking complete ownership of website management, ensuring timely updates, content optimization, and overall site maintenance",
      "Leveraged analytics tools to monitor website performance, track user behavior, and gather insights for continuous improvement and informed decision-making.",
      "Proficient in WordPress development with experience in customizing themes, creating custom plugins, and optimizing websites for performance and SEO.",
      "	Deep understanding of WordPress's core functionality and ecosystem, enabling efficient website management and enhancement.",
      "	Proven track record of successfully implementing website enhancements and optimizations to drive user engagement and improve user experience.",
      "Knowledgeable in current web design and development best practices, staying up to date with emerging trends and technologies."
      ,
    ],
  },
  {
    title: "Shift Supervisor ",
    company_name: "Wayback Burger",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2021 - Current",
    points: [
      "	Completed store opening and closing procedures and balanced tills",
      "	Responded to and resolved customer questions and concerns.",
      "	Helped store management meet standards of service and quality in daily operations.",

    ],
  },
  {
    title: "Machine Operator ",
    company_name: "Amphenol FCI",
    icon: shopify,
    iconBg: "#383E56",
    date: "April  2020- November  2020",
    points: [
      "	Operated machining equipment safely with team of operators.",
      "Complied with company and OSHA safety rules and regulations",
      	"Set up and ran machinery to produce exceptional products for industrial needs.",
      "	Monitored machines during operation to detect sounds of malfunction or excessive vibration and adjusted machines to eliminate problems.",


    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I'm too lazy to do do this part I will do it later ",
  }
];

const projects = [
  {
    name: "Team AKBDA",
    description:
      "will do this later",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Movies freak",
    description:
      "Too lazy too type",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Canadian Agri Tech",
    description:
      "Ongoing",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };