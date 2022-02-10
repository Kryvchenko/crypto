import React from "react";

export const Currency = () => {
  return (
    <>
      <div
        className="currency"
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#121b47",
        }}
      >
        <div
          className="currency-content"
          style={{
            width: "1200px",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 30px",
            color: "white",
          }}
        >
          <p>
            Be<span style={{ fontWeight: "600" }}>INDEX</span>
          </p>
          <p>
            BTC = <span style={{ fontWeight: "600" }}>45 305 </span>USD{" "}
            <span style={{ color: "#57c568" }}>+ 0.4%</span>
          </p>
          <p>
            ETH = <span style={{ fontWeight: "600" }}>3 207 </span>USD{" "}
            <span style={{ color: "#57c568" }}>+ 1.3%</span>
          </p>
          <p>
            XRP = <span style={{ fontWeight: "600" }}>0.86 </span>USD{" "}
            <span style={{ color: "#f4676b" }}>- 2.1%</span>
          </p>
        </div>
      </div>
    </>
  );
};
