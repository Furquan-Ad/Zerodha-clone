import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const generalContext = useContext(GeneralContext);

  const handleSellClick = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "https://zerodha-clone-1-8l95.onrender.com/newOrder",
        { name: uid, qty: stockQuantity, price: stockPrice, mode: "SELL" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      generalContext.closeSellWindow();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="container" id="sell-window">
      <div className="regular-order">
        <div className="inputs">
          <h1>Sell Stocks</h1>
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn-round btn btn-blue" onClick={handleSellClick}>
            Sell
          </button>
          <button className="btn-round btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;