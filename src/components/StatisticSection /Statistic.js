import React from "react";
import { Content } from "./Content";
import { Image } from "./Image";

export const Statistic = () => {
  return (
    <>
      <div
        className="statistic"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className="statistic-content"
          style={{
            width: "1200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Content />
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Image />
            <Image />
          </div>
        </div>
      </div>
    </>
  );
};
