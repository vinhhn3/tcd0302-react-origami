import React from "react";
import Aside from "./Aside";

const Main = () => {
  return (
    <div className="Container">
      <Aside />
      <div className="Main">
        <h1>Main Body</h1>
      </div>
    </div>
  );
};

export default Main;
