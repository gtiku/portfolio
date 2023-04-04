import React from "react";
import { Link } from "react-router-dom";
import smile from "../../assets/images/Memoji/smile.png";
import { MdFileDownload } from "react-icons/md";
import pdf from "../../assets/documents/Giyona_Tiku_Resume.pdf";
import "./Header.scss";

const Header = () => {
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
      <Link to={pdf} target="_blank">
        {" "}
        <button className="header__button">
          Resume <MdFileDownload className="header__download-icon" />
        </button>
      </Link>
    </section>
  );
};

export default Header;
