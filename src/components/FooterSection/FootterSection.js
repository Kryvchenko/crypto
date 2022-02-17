import { Button } from "components/Mainpage/Button";
import React from "react";

export const FooterSection = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-title">
            <h2 className="footer-item-1">
              Crypto revolution is here to stay.
            </h2>
            <Button />
          </div>
          <div className="usefull-links">
            <h5 className="footer-item-2">Useful links</h5>
            <ul>
              <li>
                <a href="https://www.binance.com/en">Binance</a>
              </li>
              <li>Coinbase</li>
              <li>Gate</li>
              <li>Kraken</li>
              <li>Poloneix</li>
            </ul>
          </div>
          <div className="more-links">
            <h5 className="footer-item-3">More links</h5>
            <ul>
              <li>Coinmarketcap</li>
              <li>Cryptoview</li>
              <li>Messari</li>
              <li>Coincap</li>
              <li>Opensea</li>
            </ul>
          </div>
          <div className="mission">
            <h5 className="footer-item-4">Our mission</h5>
            <p>
              Last year was an exceptional year for the crypto industry. Right
              from institutions getting involved with cryptos and raising
              millions of dollars to invest in the space to the booming NFT
              space.
            </p>
            <a href="" className="read-more-link">
              Read more...
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
