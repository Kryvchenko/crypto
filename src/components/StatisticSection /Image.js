import React from "react";
import diagram from "./diagram.png";
import "styles/Style.scss";

export const Image = () => {
  return (
    <>
      <img className="diagram" src={diagram} alt="diagram" />
    </>
  );
};
