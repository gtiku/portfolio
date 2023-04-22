import React, { useEffect, useState } from "react";
import axios from "axios";
import About from "../../components/About/About";
import AllProjects from "../../components/AllProjects/AllProjects";
import Loading from "../../components/Loading/Loading";

const HomeView = () => {
  const [projects, setProjects] = useState("");
  document.title = `Giyona Tiku - Portfolio`;
  let API_URL = `${process.env.REACT_APP_API_URL}/projects`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await axios.get(API_URL);
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProjects();
  });

  while (!projects) {
    return <Loading />;
  }

  return (
    <div className="main">
      <About />
      <AllProjects projects={projects} />
    </div>
  );
};

export default HomeView;
