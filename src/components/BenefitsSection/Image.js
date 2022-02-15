import React from "react";
import benefits from "./images/globe.png";
import "styles/Style.scss";

export const Image = () => {
  return (
    <>
      <img className="benefits-img" src={benefits} alt="benefits" />
    </>
  );
};
