import React from "react";
import bitcoin from "./images/bitcoin.png";
import "styles/Style.scss";

export const Image = () => {
  return (
    <>
      <img className="bitcoin-img" src={bitcoin} alt="bitcoin" />
    </>
  );
};
