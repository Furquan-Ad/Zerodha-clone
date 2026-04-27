import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
  axios
    .get("http://localhost:4000/allOrders", {
      withCredentials: true, // 🔥 IMPORTANT
    })
    .then((res) => setOrders(res.data))
    .catch((err) => console.log("ERROR:", err));
}, []);

  return (
    <div>
      <h2>Orders</h2>

      {/* 🔥 EMPTY STATE */}
      {orders.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          ☺️ No orders yet. Please buy stocks.
        </p>
      ) : (
        orders.map((order, index) => {
          return (
            <div key={index}>
              <p>Stock Name: {order.name}</p>
              <p>Stock Quantity: {order.qty}</p>
              <p>Stock Price: {order.price}</p>
              <p
                style={{
                  color: order.mode === "BUY" ? "green" : "red",
                }}
              >Stock Mode: &nbsp;
                {order.mode}
              </p>
              <hr />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Orders;