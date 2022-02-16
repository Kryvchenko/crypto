import React from "react";
import { Content } from "./Content";
import { Image } from "./Image";
import { Table } from "./Table";

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
            marginTop: "150px",
          }}
        >
          <Content />
          <div
            className="statistic-circle"
            style={{
              display: "flex",
              paddingTop: "100px",
            }}
          >
            <div
              style={{
                paddingRight: "150px",
                paddingBottom: "100px",
              }}
            >
              <Image />
            </div>
            <div>
              <Table />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
