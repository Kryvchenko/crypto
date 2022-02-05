import React from "react";
import { Navbar } from "./Navbar";
import { Navigation } from "components/Navbar/Navigation";
import { MobileNavigation } from "components/Navbar/MobileNavigation";
import "components/Navbar/Container.scss";

export const Container = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Navigation />
        <MobileNavigation />
      </div>
    </>
  );
};
