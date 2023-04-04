import React from "react";
import { Link } from "react-router-dom";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";
import "./Footer.scss";

const Footer = () => {
  return (
    <span className="footer">
      <Link to="https://www.linkedin.com/in/tikug/" target="_blank">
        <SiLinkedin className="footer__contact-icon" />
      </Link>
      <Link to="https://github.com/gtiku" target="_blank">
        <SiGithub className="footer__contact-icon" />
      </Link>
      <Link to="mailto:giyona@ualberta.ca" target="_blank">
        <TfiEmail className="footer__contact-icon" />
      </Link>
    </span>
  );
};

export default Footer;
