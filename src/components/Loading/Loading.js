import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <CircularProgress />
    </div>
  );
};

export default Loading;
