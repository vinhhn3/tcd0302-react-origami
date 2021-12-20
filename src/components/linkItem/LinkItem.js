import React from "react";
import { Link } from "react-router-dom";

const LinkItem = ({ title, url }) => {
  return (
    <li className="listItem">
      <Link to={url}>{title}</Link>
    </li>
  );
};

export default LinkItem;
