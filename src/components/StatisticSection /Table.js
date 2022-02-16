import React from "react";
import "styles/Style.scss";
import * as ReactBootStrap from "react-bootstrap";

export const Table = () => {
  const coins = [
    {
      name: "Bitcoin",
      price: "45 000",
      volume: "10000000",
      change: "+5%",
    },
    {
      name: "Etherium",
      price: "3000",
      volume: "2323123",
      change: "+3%",
    },
    {
      name: "Litecoin",
      price: "130",
      volume: "2232344",
      change: "+0.7%",
    },
    {
      name: "Matic",
      price: "1.87",
      volume: "223235544",
      change: "+4.26%",
    },
    {
      name: "Doge",
      price: "0.15",
      volume: "212232544",
      change: "+1.6%",
    },
    {
      name: "Miota",
      price: "0.90",
      volume: "54342323",
      change: "+5%",
    },
  ];

  const renderCoins = (coins, index) => {
    return (
      <tr key={index} style={{ color: "#141b50" }}>
        <td>{coins.name}</td>
        <td>{coins.price}</td>
        <td>{coins.volume}</td>
        <td>{coins.change}</td>
      </tr>
    );
  };

  return (
    <>
      <ReactBootStrap.Table responsive="sm" bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (USD)</th>
            <th>Volume (24h)</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>{coins.map(renderCoins)}</tbody>
      </ReactBootStrap.Table>
    </>
  );
};
