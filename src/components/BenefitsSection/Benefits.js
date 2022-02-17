import React from "react";
import { Button } from "./Button";
import { Content } from "./Content";
import { Image } from "./Image";

export const Benefits = () => {
  return (
    <>
      <div
        className="benefits"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
          paddingBottom: "50px",
          borderBottom: "2px solid #f9c326",
        }}
      >
        <div
          className="benefits-content"
          style={{
            width: "1200px",
            display: "flex",
            flex: "0 0 2",
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
