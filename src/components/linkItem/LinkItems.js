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
          title: "Profile",
          url: "/profile",
        },
        {
          id: 3,
          title: "Main Page",
          url: "/",
        },
      ]);
    } else {
      setLinkItems([
        {
          id: 1,
          title: "Register",
          url: "/register",
        },
        {
          id: 2,
          title: "Login",
          url: "/login",
        },
        {
          id: 3,
          title: "Main page",
          url: "/",
        },
      ]);
    }
  }, []);
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
