import React from "react";
import { Button } from "./Button";
import { Content } from "./Content";
import { Image } from "./Image";

export const Wrapper = () => {
  return (
    <>
      <div
        className="wrapper"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          style={{
            width: "1200px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              justifyContent: "center",
              margin: "0 30px",
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
