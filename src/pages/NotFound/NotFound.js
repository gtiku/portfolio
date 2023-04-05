import React from "react";
import { Link } from "react-router-dom";
import confused from "../../assets/images/Memoji/confused.png";
import "./NotFound.scss";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const NotFound = () => {
  document.title = `Page Not Found`;

  return (
    <div className="notfound">
      <section className="notfound__hero">
        <h1 className="notfound__message">
          Sorry, this page could not be found.
        </h1>
        <img className="notfound__image" src={confused} alt="confused face" />
      </section>
      <Link to="/">
        <button className="notfound__link">
          <BsArrowLeftCircleFill className="notfound__link-icon" />
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
