import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../constants";
import NavbarProject from "../components/NavbarProjects";
import { github } from "../assets";
import { motion } from "framer-motion";
import { StarsCanvas } from "../components";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import ComputersCanvas from "../components/canvas/Computers";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === Number(projectId));

  if (!project) {
    return <div className="text-center mt-8">Project not found</div>;
  }

  return (
    <div>
      <motion.div variants={textVariant()}>
        <div className="absolute inset-0 z-0">
          <StarsCanvas />
        </div>

        <NavbarProject />
        <div className="w-full flex justify-center items-center mt-30">
          {" "}
          <h2 className={`${styles.sectionHeadText}`}>My Works</h2>
        </div>
      </motion.div>

      <ComputersCanvas />
      <div className="container mx-auto mt-8">
        {" "}
        {/* Increased margin top */}
        <div className="bg-bg-primary p-8 rounded-lg shadow-md text-center relative">
          <h2 className="text-3xl mt-8 sm:mt-20 font-bold mb-4">
            {project.name}
          </h2>
          <p className="text-white-700 mb-8">{project.description}</p>
          <div className="flex flex-wrap justify-center mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className={`mr-2 mb-2 px-4 py-2 rounded-full ${tag.color}`}
              >
                {tag.name}
              </span>
            ))}
          </div>
          {project.source_code_link && (
            <div className="flex flex-wrap justify-center mb-4">
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 flex items-center"
              >
                <img src={github} alt="source code" className="w-6 h-6 mr-2" />
                {project.name} on GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
