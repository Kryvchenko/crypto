import React from "react";
import miner from "./images/miner.png";
import "styles/Style.scss";

export const Image = () => {
  return (
    <>
      <img className="miner-img" src={miner} alt="miner" />
    </>
  );
};
