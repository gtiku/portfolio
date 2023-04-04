import React from "react";
import "./Highlights.scss";

const Highlights = ({ highlights }) => {
  return (
    <ul className="highlights__list">
      {!highlights.length
        ? ""
        : highlights.map((item, index) => {
            return (
              <li className="highlights__highlight" key={index}>
                {item}
              </li>
            );
          })}
    </ul>
  );
};

export default Highlights;
