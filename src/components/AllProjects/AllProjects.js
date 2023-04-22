import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./AllProjects.scss";

const AllProjects = ({ projects }) => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__heading">My Projects</h2>
      <div className="projects__container">
        {projects
          .map((project) => {
            return <ProjectCard project={project} key={project._id} />;
          })
          .sort((a, b) => {
            return a.props.project.rank - b.props.project.rank;
          })}
      </div>
    </section>
  );
};

export default AllProjects;
