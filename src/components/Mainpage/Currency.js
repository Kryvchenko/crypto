import React from "react";
import "styles/Style.scss";

export const Currency = () => {
  return (
    <>
      <div className="currency">
        <div className="currency-content">
          <p className="currency-item-1">
            Be<span style={{ fontWeight: "600" }}>INDEX</span>
          </p>
          <p className="currency-item-2">
            BTC = <span style={{ fontWeight: "600" }}>45 305 </span>USD{" "}
            <span style={{ color: "#57c568" }}>+ 0.4%</span>
          </p>
          <p className="currency-item-3">
            ETH = <span style={{ fontWeight: "600" }}>3 207 </span>USD{" "}
            <span style={{ color: "#57c568" }}>+ 1.3%</span>
          </p>
          <p className="currency-item-4">
            XRP = <span style={{ fontWeight: "600" }}>0.86 </span>USD{" "}
            <span style={{ color: "#f4676b" }}>- 2.1%</span>
          </p>
        </div>
      </div>
    </>
  );
};
