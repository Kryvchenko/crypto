import React from "react";
import { Content } from "components/MinersSection/Content";
import { Button } from "components/MinersSection/Button";
import { Image } from "components/MinersSection/Image";

export const Miners = () => {
  return (
    <>
      <div
        className="miners"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className="miner-content"
          style={{
            width: "1200px",
            display: "flex",
            flex: "0 0 4",
            justifyContent: "space-around",
            marginTop: "50px",
            color: "#121b47",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              justifyContent: "center",
              margin: "0",
            }}
          >
            <Content />
            <Button />
          </div>
          <Image />
        </div>
      </div>
    </>
  );
};
