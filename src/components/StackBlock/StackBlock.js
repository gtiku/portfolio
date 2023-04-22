import React from "react";
import allTechnologies from "../../utils/technologies";
import "./StackBlock.scss";

const StackBlock = ({ techIDs }) => {
  return (
    <div className="stack">
      {techIDs.map((id) => {
        let technology = allTechnologies.find(
          (technology) => technology.id === id
        );
        return (
          <span key={technology.id} className="stack__technology ">
            {technology.icon}
            <h5 className="stack__name">{technology.name}</h5>
          </span>
        );
      })}
    </div>
  );
};

export default StackBlock;
