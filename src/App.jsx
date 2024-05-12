import React from "react";
import { useRoutes } from "react-router-dom";
import routers from "../routes";
import "./App.css";

function App() {
  const allRouters = useRoutes(routers);
  return (
    <>
      <div className="main">
        <div className="body">{allRouters}</div>
      </div>
    </>
  );
}

export default App;
