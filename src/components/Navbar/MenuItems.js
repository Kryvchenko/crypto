import React from "react";
import "components/Navbar/MenuItems.scss";

export const MenuItems = () => {
  return (
    <>
      <ul className="menu">
        <li>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Blog</a>
          <a href="#">FAQ</a>
          <a href="#">About & Contact</a>
        </li>
      </ul>
    </>
  );
};
