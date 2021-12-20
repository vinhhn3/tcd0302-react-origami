import React from "react";
import Aside from "../components/layout/Aside";
import Posts from "../components/post/Posts";

const Main = () => {
  return (
    <div className="Container">
      <Aside />
      <div className="Main">
        <h1>Soooooooome Heading</h1>
        <Posts />
      </div>
    </div>
  );
};

export default Main;
