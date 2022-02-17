import React from "react";
import { Image } from "components/DownloadSection/Image";
import { Content } from "components/DownloadSection/Content";
export const Download = () => {
  return (
    <>
      <div
        className="download"
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <div
          className="download-content"
          style={{
            width: "1200px",
            display: "flex",
            flex: "0 0 4",
            justifyContent: "space-around",
            marginTop: "50px",
            marginBottom: "50px",
            color: "#121b47",
          }}
        >
          <Image />
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
          </div>
        </div>
      </div>
    </>
  );
};
