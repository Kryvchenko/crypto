import React from "react";
import women from "./images/women.png";
import "styles/Style.scss";

export const Image = () => {
  return (
    <>
      <img className="women-img" src={women} alt="women" />
    </>
  );
};
