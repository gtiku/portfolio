import React from "react";
import { Link } from "react-router-dom";
import "./ProjectLinks.scss";

import { FaCode } from "react-icons/fa";
import { AiOutlineLaptop } from "react-icons/ai";

const ProjectLinks = ({ project }) => {
  return (
    <div className="project__links">
      {!project.github ? (
        ""
      ) : (
        <Link to={project.github} target="_blank">
          <button className="project__link-button">
            <FaCode className="project__link-icon" />
            View Source Code
          </button>
        </Link>
      )}
      {!project.liveUrl ? (
        ""
      ) : (
        <Link to={project.liveUrl} target="_blank">
          <button className="project__link-button">
            <AiOutlineLaptop className="project__link-icon" />
            View Live
          </button>
        </Link>
      )}
    </div>
  );
};

export default ProjectLinks;
