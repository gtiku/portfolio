import React from "react";
import StackBlock from "../../components/StackBlock/StackBlock";
import "./AboutStack.scss";

const AboutStack = () => {
  const languages = [9, 13, 3];
  const frontendStack = [19, 20, 16, 2, 4, 23, 21];
  const backendStack = [5, 6, 11, 26, 17, 18, 7, 27, 8];
  const testScript = [31, 10, 15];
  const devTools = [25, 22, 32, 24];
  return (
    <div className="about-stack">
      <h3 className="about-stack__stack-heading">TOOLS & TECHNOLOGIES</h3>
      <div className="about-stack__stack">
        <span className="about-stack__stack-section">
          <p className="about-stack__stack-type">Languages:</p>
          <StackBlock techIDs={languages} />
        </span>
        <span className="about-stack__stack-section">
          <p className="about-stack__stack-type">Frontend:</p>
          <StackBlock techIDs={frontendStack} />
        </span>
        <span className="about-stack__stack-section">
          <p className="about-stack__stack-type">Backend:</p>
          <StackBlock techIDs={backendStack} />
        </span>
        <span className="about-stack__stack-section">
          <p className="about-stack__stack-type">Testing:</p>
          <StackBlock techIDs={testScript} />
        </span>
        <span className="about-stack__stack-section">
          <p className="about-stack__stack-type">Developer Tools:</p>
          <StackBlock techIDs={devTools} />
        </span>
      </div>
    </div>
  );
};

export default AboutStack;
