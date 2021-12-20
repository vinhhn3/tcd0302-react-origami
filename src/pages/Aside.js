import React, { useState } from "react";
import LinkItem from "../components/linkItem/LinkItem";

const Aside = () => {
  const [linkItems, setLinkItems] = useState([
    {
      id: 1,
      title: "Going to 1",
      url: "#",
    },
    {
      id: 2,
      title: "Going to 2",
      url: "#",
    },
    {
      id: 3,
      title: "Going to 3",
      url: "#",
    },
    {
      id: 4,
      title: "Going to 4",
      url: "#",
    },
    {
      id: 5,
      title: "Going to 5",
      url: "#",
    },
    {
      id: 6,
      title: "Going to 6",
      url: "#",
    },
    {
      id: 7,
      title: "Going to 7",
      url: "#",
    },
    {
      id: 8,
      title: "Going to 8",
      url: "#",
    },
    {
      id: 9,
      title: "Going to 9",
      url: "#",
    },
    {
      id: 10,
      title: "Going to 10",
      url: "#",
    },
    {
      id: 11,
      title: "Going to 11",
      url: "#",
    },
  ]);
  return (
    <aside className="Aside">
      {linkItems.map((item) => (
        <LinkItem key={item.key} title={item.title} url={item.url} />
      ))}
    </aside>
  );
};

export default Aside;
