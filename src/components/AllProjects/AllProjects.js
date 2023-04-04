import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "../../data/projects";
import "./AllProjects.scss";

const AllProjects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__heading">My Projects</h2>
      <div className="projects__container">
        {projects.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
    </section>
  );
};

export default AllProjects;
