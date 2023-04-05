import React from "react";
import { Link, useNavigate } from "react-router-dom";
import smile from "../../assets/images/Memoji/smile.png";
import { MdFileDownload } from "react-icons/md";
import "./Header.scss";

const Header = () => {
  let navigate = useNavigate();
  return (
    <section className="header">
      <Link to="/">
        <div className="header__image-text">
          <img src={smile} alt="smiling memoji" className="header__image" />
          <div className="header__text">
            <h1 className="header__name">GIYONA TIKU</h1>
            <h4 className="header__title">Software Developer</h4>
          </div>
        </div>
      </Link>
      <button className="header__button" onClick={() => navigate("/resume")}>
        Resume <MdFileDownload className="header__download-icon" />
      </button>
    </section>
  );
};

export default Header;
