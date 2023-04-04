import React from "react";
import "./Emojis.scss";

const Emojis = () => {
  const emojis = [
    "💻",
    "👩🏾‍🔬",
    "🧪",
    "🧮",
    "📉",
    "👩🏾‍🏫",
    "👷🏾",
    "📚",
    "⌨️",
    "📊",
    "🎧",
    "📖",
  ];

  return (
    <div className="emojis">
      {emojis.map((item, index) => {
        return (
          <span className="emojis__item" key={index}>
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default Emojis;
