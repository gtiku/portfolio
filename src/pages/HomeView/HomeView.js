import React, { useEffect } from "react";
import About from "../../components/About/About";
import AllProjects from "../../components/AllProjects/AllProjects";

const HomeView = () => {
  document.title = `Giyona Tiku - Portfolio`;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main">
      <About />
      <AllProjects />
    </div>
  );
};

export default HomeView;
