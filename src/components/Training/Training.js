import React from "react";
import { Link } from "react-router-dom";
import brainstation from "../../assets/images/Training/brainstation.png";
import coursera from "../../assets/images/Training/google-coursera.png";
import cambridge from "../../assets/images/Training/cambridge.png";
import ualberta from "../../assets/images/Training/ualberta.png";
import "./Training.scss";

const Training = () => {
  const training = [
    {
      id: 1,
      name: "Software Engineering Bootcamp Diploma",
      type: "",
      institution: "BrainStation",
      img: brainstation,
    },
    {
      id: 2,
      name: "Google Data Analytics Professional Certificate",
      type: "",
      institution: "Google & Coursera",
      img: coursera,
    },
    {
      id: 3,
      name: "Certificate in Teaching English to Speakers of Other Languages",
      type: "",
      institution: "Cambridge University",
      img: cambridge,
    },
    {
      id: 4,
      name: "Chemical Engineering Computer Process Control",
      type: "Bachelor's Degree",
      institution: "University of Alberta",
      img: ualberta,
    },
  ];
  return (
    <div className="training">
      <h3 className="training__heading">EDUCATION</h3>
      <div className="training__container">
        {training.map((item) => {
          return (
            <div className="training__course" key={item.id}>
              <Link
                to="https://www.linkedin.com/in/tikug/#education"
                target="_blank"
              >
                <img
                  src={item.img}
                  alt={`${item.institution} logo`}
                  className="training__institution-logo"
                />
              </Link>
              <span className="training__institution-box">
                <h5 className="training__name">{item.name}</h5>
                {item.type.length ? (
                  <h5 className="training__type">{item.type.toUpperCase()}</h5>
                ) : (
                  ""
                )}

                <h5 className="training__institution">
                  {item.institution.toUpperCase()}
                </h5>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Training;
