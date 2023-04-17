import React from "react";
import pdf from "../../assets/documents/Giyona_Tiku_Resume.pdf";
import "./Resume.scss";

const Resume = () => {
  return (
    <iframe
      src={pdf}
      width="100%"
      height="1200px"
      className="resume"
      title="resume"
    />
  );
};

export default Resume;
