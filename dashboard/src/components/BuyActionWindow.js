import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const generalContext = useContext(GeneralContext); // ✅

  const handleBuyClick = async () => {
    try {
      await axios.post("http://localhost:4000/newOrder", {
        
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
        
      },
      {
    withCredentials: true, // 🔥 THIS IS THE FIX
  }
    );

      generalContext.closeBuyWindow();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <h1>Buy Stocks</h1>
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
            Buy
          </button>

          <button className="btn-round btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;