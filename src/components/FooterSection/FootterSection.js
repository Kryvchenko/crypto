import { Button } from "components/FooterSection/Button";
import React from "react";

export const FooterSection = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-title-main">
            <h2 className="footer-item-1">
              Crypto revolution is here to stay.
            </h2>
            <Button />
          </div>
          <div className="links">
            <div className="usefull-links">
              <ul>
                <li>
                  <h5 className="footer-item-2">Useful links</h5>
                </li>
                <li>
                  <a href="https://www.coinbase.com/en">Coinbase</a>
                </li>
                <li>
                  <a href="https://www.binance.com/en">Binance</a>
                </li>
                <li>
                  <a href="https://poloniex.com/">Poloneix</a>
                </li>
                <li>
                  <a href="https://www.kraken.com/">Kraken</a>
                </li>
                <li>
                  <a href="https://www.bitfinex.com/">Bitfinex</a>
                </li>
              </ul>
            </div>
            <div className="more-links">
              <ul>
                <li>
                  <h5 className="footer-item-3">Partner links</h5>
                </li>
                <li>
                  <a href="https://coinmarketcap.com/">Coinmarketcap</a>
                </li>
                <li>
                  <a href="https://www.cryptoview.com/">Cryptoview</a>
                </li>
                <li>
                  <a href="https://messari.io/">Messari</a>
                </li>
                <li>
                  <a href="https://coincap.io/">Coincap</a>
                </li>
                <li>
                  <a href="https://crypto.com/">Crypto.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mission">
            <h5 className="footer-title">Our mission</h5>
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
      <div className="rights">
        <div className="rights-content">
          © 2022 Betheme by Crypto group | All Rights Reserved | Powered by
          WordPress
        </div>
      </div>
    </>
  );
};
