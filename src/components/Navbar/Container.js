import React from "react";
import { Navbar } from "./Navbar";
import { MenuItems } from "components/Navbar/MenuItems";
import "components/Navbar/Container.scss";

export const Container = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <MenuItems />
      </div>
    </>
  );
};
