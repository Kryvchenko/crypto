import React from "react";
import { Button } from "./Button";
import { Content } from "./Content";
import { Image } from "./Image";

export const Benefits = () => {
  return (
    <>
      <div
        className="benefits"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className="benefits-content"
          style={{
            width: "1200px",
            display: "flex",
            flex: "0 0 4",
            justifyContent: "space-between",
            marginTop: "50px",
          }}
        >
          <Image />
          <div
            style={{
              display: "flex",
              alignItems: "space-evenly",
              flexDirection: "column",
              justifyContent: "center",
              margin: "0 30px",
            }}
          >
            <Content />
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};
