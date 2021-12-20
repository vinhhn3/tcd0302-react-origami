import React, { useState } from "react";
import blueLogo from "../../assets/blue-origami-bird-flipped.png";
import whiteLogo from "../../assets/white-origami-bird.png";
import LinkItem from "./LinkItem";

const LinkItems = ({ logo }) => {
  const [linkItems, setLinkItems] = useState([
    {
      id: 1,
      title: "Post",
      url: "#",
    },
    {
      id: 2,
      title: "Register",
      url: "#",
    },
    {
      id: 3,
      title: "Login",
      url: "#",
    },
    {
      id: 4,
      title: "Profile",
      url: "#",
    },
    {
      id: 5,
      title: "###",
      url: "#",
    },
    {
      id: 6,
      title: "###",
      url: "#",
    },
    {
      id: 7,
      title: "###",
      url: "#",
    },
    {
      id: 8,
      title: "###",
      url: "#",
    },
    {
      id: 9,
      title: "###",
      url: "#",
    },
    {
      id: 10,
      title: "###",
      url: "#",
    },
    {
      id: 11,
      title: "###",
      url: "#",
    },
  ]);
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
