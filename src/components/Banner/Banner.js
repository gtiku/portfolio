import React from "react";
import "./Banner.scss";
import smile from "../../assets/images/Memoji/laptop.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__image-text">
        <img src={smile} alt="smiling memoji" className="banner__image" />
        <div className="banner__text">
          <h1 className="banner__name">GIYONA TIKU</h1>
          <h4 className="banner__title">Software Developer</h4>
          <br />
          <br />
          <br />
          <h6 className="banner__subtitle">
            Please visit my portfolio website to see more!
          </h6>
          <br />
          <p className="banner__link">
            <i>
              <strong>https://gtiku.github.io/portfolio/</strong>
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
