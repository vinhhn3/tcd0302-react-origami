import React, { useContext } from "react";
import blueLogo from "../../assets/blue-origami-bird-flipped.png";
import whiteLogo from "../../assets/white-origami-bird.png";
import OrigamiContext from "../../context/origami/origamiContext";
import LinkItem from "./LinkItem";

const LinkItems = ({ logo }) => {
  const origamiContext = useContext(OrigamiContext);
  const { linkItems } = origamiContext;

  return (
    <ul>
      {logo === "navbar" && <img src={whiteLogo} alt="" />}
      {linkItems.map((item) => (
        <LinkItem key={item.id} title={item.title} url={item.url} />
      ))}
      {logo === "footer" && <img src={blueLogo} alt="" />}
    </ul>
  );
};

export default LinkItems;
