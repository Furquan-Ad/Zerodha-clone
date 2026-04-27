import React from "react";


function Brokerage() {
  return (
    <div className="container border-top p-5">
      <div className="row">
        <div className="col-8">
          <a href="" className="text-decoration-none">
            <h1 className="fs-5 text-center mb-5 ">Brokerage calcultor</h1>
          </a>

          <ul className="lists mt-3 ">
            <li >
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note.
            </li>
            <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order.</li>
            <li>For NRI account (PIS), 0.5% or ₹200 per executed order.</li>
            <li>
              If account is in debit balance, ₹40 per order will be charged.
            </li>
          </ul>
        </div>
        <div className="col-4 text-center">
          <a href="" className="text-decoration-none">
            <h1 className="fs-5 ">List of charges</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
