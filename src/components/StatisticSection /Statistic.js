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
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Content />
        </div>
      </div>
      <div
        className="statistic"
        style={{
          display: "flex",
          justifyContent: "center",
          borderBottom: "2px solid #f9c326",
        }}
      >
        <div
          className="statistic-graphic"
          style={{
            width: "1200px",
            display: "flex",
            justifyContent: "space-around",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <div>
            {" "}
            <Image />
          </div>
          <Table />
        </div>
      </div>
    </>
  );
};
