import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const generalContext = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      await axios.post("https://zerodha-clone-1-8l95.onrender.com/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "Sell", //
      },
       {
    withCredentials: true, // 🔥 THIS IS THE FIX
  }
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
    <div className="container" id="buy-window">
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
          <button className="btn-round btn btn-blue" onClick={handleBuyClick}>
            Sell
          </button>

          <button className=" btn-round btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;