import React, { useContext, useEffect, useState } from "react";
import blueLogo from "../../assets/blue-origami-bird-flipped.png";
import whiteLogo from "../../assets/white-origami-bird.png";
import OrigamiContext from "../../context/origami/origamiContext";
import LinkItem from "./LinkItem";

const LinkItems = ({ logo }) => {
  const origamiContext = useContext(OrigamiContext);
  const { isLoggedIn } = origamiContext;
  const [linkItems, setLinkItems] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      setLinkItems([
        {
          id: 1,
          title: "Share",
          url: "/share",
        },
        {
          id: 2,
          title: "Register",
          url: "/register",
        },
        {
          id: 3,
          title: "Login",
          url: "/login",
        },
        {
          id: 4,
          title: "Profile",
          url: "/profile",
        },
        {
          id: 5,
          title: "Main Page",
          url: "/",
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
    } else {
      setLinkItems([
        {
          id: 2,
          title: "Register",
          url: "/register",
        },
        {
          id: 3,
          title: "Login",
          url: "/login",
        },
        {
          id: 4,
          title: "Main page",
          url: "/",
        },
      ]);
    }
  });
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
