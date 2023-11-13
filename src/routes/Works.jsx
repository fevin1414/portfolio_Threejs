import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { Link } from "react-router-dom";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { StarsCanvas } from "../components";
import NavbarProject from "../components/NavbarProjects";

const truncateDescription = (description) => {
  const words = description.split(" ");
  if (words.length > 25) {
    return `${words.slice(0, 25).join(" ")}...`;
  }
  return description;
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  id,
}) => {
  const truncatedDescription = truncateDescription(description);
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {truncatedDescription}
          </p>
          {description.length > 25 && (
            <Link
              to={`/ProjectDetails/${id}`}
              className="text-red-500 mt-2 text-secondary text-[14px] "
            >
              Read More ...
            </Link>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="absolute inset-0 z-0">
          <StarsCanvas />
        </div>

        <NavbarProject />
        <div className="w-full flex justify-center items-center mt-8">
          <h2 className={`${styles.sectionHeadText}`}>My Works</h2>
        </div>
      </motion.div>

      <div className="w-full flex justify-center items-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl mt-8 leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Some of the projects is briefly
          described with links to code repositories and live demos in it.To know
          more about each projects click on them It reflects my ability to solve
          complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="mt-20 flex  items-center flex-wrap gap-5">
          {projects.map((project, index) => (
            <div key={`project-${index}`}>
              <Link
                to={`/ProjectDetails/${project.id}`}
                className="text-decoration-none"
              >
                <ProjectCard index={index} {...project} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Works;
