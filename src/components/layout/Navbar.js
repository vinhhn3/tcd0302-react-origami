import React from "react";
import LinkItems from "../linkItem/LinkItems";

const Navbar = () => {
  return (
    <nav
      className="Navigation"
      style={{
        position: "fixed",
      }}
    >
      <LinkItems logo={"navbar"} />
    </nav>
  );
};

export default Navbar;
