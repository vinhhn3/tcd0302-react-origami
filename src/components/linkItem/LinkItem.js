import React from "react";

const LinkItem = ({ title, url }) => {
  return (
    <li className="listItem">
      <a href={url}>{title}</a>
    </li>
  );
};

export default LinkItem;
