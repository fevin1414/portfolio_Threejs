import {
  mobile,
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
  canadian_agri,
  ace_logo,
  carrent,
  jobit,
  tripguide,
  threejs,
  content_creator,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    to: "/about",
  },
  {
    id: "Works",
    title: "Projects",
    to: "/Works",
  },
  {
    id: "contact",
    title: "Contact",
    to: "/contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },

  {
    title: "Content Creator",
    icon: content_creator,
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
    title: "Full Stack Web Developer ",
    company_name: "Ace Project Space(Red River College Polytechnic)",
    icon: ace_logo,
    iconBg: "#E6DEDD",
    date: "September  2023 - December 2023",
    points: [
      "Worked as a Full Stack Web Developer for four months following Scrum methodology as part of internship",
      "Created a fullstack application for one the startup in Winnipeg which includes over 22,000 business all over Canada using Next js and Prisma",
      "Designed and created ERD and wireframe for the application",
      "Created a new login system using next auth and magic link using email login verification",
      "implemented a userrole based automatic redirection system",
      "Created an admin dashboard with all the CRUD functionalities",
      "Implemented a bulk data upload and downlaod feature using csv",
    ],
  },
  {
    title: "Website and Marketing Manager(freelance & Consulting)",
    company_name: "Wordpress",
    icon: canadian_agri,
    iconBg: "#383E56",
    date: "March 2023 - Current",
    points: [
      "	Demonstrated exceptional autonomy by taking complete ownership of website management, ensuring timely updates, content optimization, and overall site maintenance",
      "Leveraged analytics tools to monitor website performance, track user behavior, and gather insights for continuous improvement and informed decision-making.",
      "Proficient in WordPress development with experience in customizing themes, creating custom plugins, and optimizing websites for performance and SEO.",
      "Implemented a new custom order status system which will send out email to each customers regarding status of there order",
      "Implemented a new  order tracking system to the website which can be used by the customers to track the order ",
      "Created a new chat bot for the website which can work as a customer support for the website users",
      "Did varieties of services like adding new products,editing existing products making changes to contents etc..",
    ],
  },
];

const testimonials = [
  {
    testimonial: "I'm too lazy to do do this part I will do it later ",
  },
];

const projects = [
  {
    id: 1,
    name: "Movies Freak",
    description:
      "A website running on php and phpMyadmin and styled using bootstrap. Created this website as part of my seond semester accademic project. The website has all the basic CRUD functionalities(Create,Read,Delete,Update), a email and password login system,user role identification and an admin dashboard. The application can identify the logged in user and redirect to the page accordingly . There are total of three kinds of user guest,registered user and admins, The registered users can sort the movies list,search for movies and comment on each movies whereas an guest user can only view the data. And for admins they can do all the things that an registered user can do along with CRUD functionalities and can moderate the comments. There is also an API implemented which will from time to time fetch quotes from various movies on the home screen and also a email sending featre inorder to reset password which is done using mailjet.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "phpMyadmin",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Api",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    id: 2,
    name: "Movies freak",
    description: "Too lazy too type",
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
    id: 3,
    name: "Canadian Agri Tech",
    description: "Ongoing",
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
  },
];

export { services, technologies, experiences, testimonials, projects };
