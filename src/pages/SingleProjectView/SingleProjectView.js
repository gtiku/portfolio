import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import StackBlock from "../../components/StackBlock/StackBlock";
import "./SingleProjectView.scss";

import ProjectLinks from "../../components/ProjectLinks/ProjectLinks";
import NotFound from "../NotFound/NotFound";
import Highlights from "../../components/Highlights/Highlights";

const SingleProjectView = () => {
  const [project, setProject] = useState("");
  let API_URL = `${process.env.REACT_APP_API_URL}/projects`;
  let { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getProject = async () => {
      try {
        const { data } = await axios.get(API_URL);
        setProject(data.find((project) => project._id === id));
      } catch (error) {
        console.error(error);
      }
    };
    getProject();
  });

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
