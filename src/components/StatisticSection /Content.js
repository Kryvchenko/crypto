import React from "react";
import "styles/Style.scss";

export const Content = () => {
  return (
    <>
      <div
        className="statistic-content"
        style={{
          color: "#141b50",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="statistic-h1">Statistic and graphs</h1>
        <p className="statistic-p" style={{ maxWidth: "500px" }}>
          In a decentralized blockchain network, no one has to know or trust
          anyone else.
        </p>
      </div>
    </>
  );
};
