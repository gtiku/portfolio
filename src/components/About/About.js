import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import AboutStack from "../AboutStack/AboutStack";
import Training from "../Training/Training";
import Emojis from "../Emojis/Emojis";
import laptop from "../../assets/images/Memoji/laptop.png";
import "./About.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about__heading">About Me</h2>
      <span className="about__emoji--mobile">
        <Emojis />
      </span>
      <div className="about__container about__container--reverse">
        <img src={laptop} alt="laptop memoji" className="about__image" />
        <AboutStack />
      </div>
      <span className="about__emoji--tablet">
        <Emojis />
      </span>
      <div className="about__container">
        <div className="about__bio">
          <p className="about__bio-text">
            Hi, I'm Giyona and welcome to my portfolio! I'm a...{" "}
          </p>

          <p className="about__roles">
            Chemical Engineer <AiOutlineArrowRight /> English Teacher{" "}
            <AiOutlineArrowRight /> Full Stack Developer
          </p>
          <p className="about__bio-text">
            ... looking to begin my career in tech as a software developer, in a
            role where I will be able to learn from experienced professionals
            and develop my skills.
          </p>
          <p className="about__bio-text">
            Check out some of my projects below!
          </p>
        </div>
        <Training />
      </div>
    </section>
  );
};

export default About;
