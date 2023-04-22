import React from "react";
import { useNavigate } from "react-router-dom";
import Highlights from "../Highlights/Highlights";
import StackBlock from "../StackBlock/StackBlock";
import "./ProjectCard.scss";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={(e) => {
        if (project.isCompleted) {
          navigate(`/projects/${project._id}`);
        } else {
          e.preventDefault();
        }
      }}
      className={`project-card ${
        project.isCompleted ? "" : "project-card--incomplete"
      }`}
    >
      <img
        src={project.cardImage}
        alt={project.title}
        className="project-card__image"
      />
      <div className="project-card__text-container">
        <div className="project-card__headings">
          <h4 className="project-card__heading">{project.title}</h4>
          <h5>
            <span className="project-card__subtitle project-card__subtitle--stack">
              {project.stackType.toUpperCase()}
            </span>{" "}
            |
            <span className="project-card__subtitle project-card__subtitle--type">
              {project.projectType.toUpperCase()}
            </span>
          </h5>
        </div>

        <StackBlock techIDs={project.stackTechonologies} />
      </div>
      <div className="project-card__overlay">
        <div className="project-card__overlay-highlights">
          <Highlights highlights={project.highlights} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
