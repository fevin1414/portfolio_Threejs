// ProjectDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../constants";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === Number(projectId));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      {/* Add more details and styling as needed */}
    </div>
  );
};

export default ProjectDetails;
