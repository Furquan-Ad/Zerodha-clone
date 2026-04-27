import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {
  const [username, setUsername] = useState("");

 useEffect(() => {
  const token = localStorage.getItem("token");
  axios
    .get("https://zerodha-clone-1-8l95.onrender.com/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => setUsername(res.data.username))
    .catch((err) => console.log(err));
}, []);

  return (
    <>
      <div className="username">
        <h6>Hi, {username || "User"}!</h6> {/* 🔥 dynamic */}
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>
            </p>
            <p>
              Opening balance <span>3.74k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>
            </p>
            <p>
              Investment <span>29.88k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;