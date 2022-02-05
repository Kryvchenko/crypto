import React from "react";
import "components/Navbar/MenuItems.scss";

export const MenuItems = (props) => {
  return (
    <>
      <ul className="menu">
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <a href="#">Home</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <a href="#">Features</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <a href="#">Blog</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <a href="#">FAQ</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <a href="#">About & Contact</a>
        </li>
      </ul>
    </>
  );
};
