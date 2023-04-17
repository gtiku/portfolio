import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "../../data/projects";
import StackBlock from "../../components/StackBlock/StackBlock";
import "./SingleProjectView.scss";

import ProjectLinks from "../../components/ProjectLinks/ProjectLinks";
import NotFound from "../NotFound/NotFound";
import Highlights from "../../components/Highlights/Highlights";

const SingleProjectView = () => {
  let { id } = useParams();
  let project = projects.find((item) => item.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project || project.isCompleted === false) {
    return <NotFound />;
  }
  document.title = `Giyona Tiku - Project: ${project.title}`;

  return (
    <div className="project">
      <h2 className="project__title">{project.title}</h2>

      <section className="project__hero">
        <div className="project__summary-image">
          <img
            src={project.cardImage}
            alt="project screenshot"
            className="project__hero-image"
          />
        </div>
        <div className="project__highlights">
          <h3 className="project__summary-heading">Tools & Features</h3>
          <div className="project__stack-highlights">
            <StackBlock techIDs={project.stackTechonologies} />
            <Highlights highlights={project.highlights} />
          </div>

          {project.summary ? (
            <h5 className="project__summary">{project.summary}</h5>
          ) : (
            ""
          )}
        </div>
      </section>
      <ProjectLinks project={project} />
      <section className="project__details">
        <h3 className="project__highlights-heading">Highlights</h3>
        {project.details.map((detail, index) => {
          return (
            <div className="project__detail" key={index}>
              {detail.image ? (
                <img
                  className="project__detail-image"
                  src={detail.image}
                  alt={detail.subtitle}
                />
              ) : (
                ""
              )}

              <div className="project__detail-text">
                <h4 className="project__detail-subtitle">{detail.subtitle}</h4>
                <p className="project__detail-description">
                  {detail.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>
      <ProjectLinks project={project} />
    </div>
  );
};

export default SingleProjectView;
