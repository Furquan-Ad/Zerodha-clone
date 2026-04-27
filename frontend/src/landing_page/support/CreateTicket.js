import React from "react";

function CreateTicket() {
  return (
    <div className="container ">
      <h1 className="mt-5 fs-2">To create a ticket, select a relevant topic</h1>
      <div className="row mb-5 mt-5">
        <div className="col">
          <h3 className="text-muted mb-5 fs-5"> <i class="fa-solid fa-plus me-3"></i>Account Opening</h3>
          <ul className="listings">
            <li>
              <a href="#">Online Account Opening</a>
            </li>
            <li>
              <a href="#">Offline Account Opening</a>
            </li>
            <li>
              <a href="#">Company, Partnership and HUF account Opening</a>
            </li>
            <li>
              <a href="#">NRI Account Opening</a>
            </li>
            <li>
              <a href="#">Charges at Zerodha</a>
            </li>
            <li>
              <a href="#">Zerodha IDFC FIRST Bank 3-in-1 Account</a>
            </li>
            <li>
              <a href="#">Getting Started</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3 className="text-muted mb-5 fs-5"><i class="fa-solid fa-circle-user me-3"></i>Your Zerodha Account</h3>
          <ul className="listings">
            <li>
              <a href="#">Login Credentials</a>
            </li>
            <li>
              <a href="#">Account Modification and Segment Addition</a>
            </li>
            <li>
              <a href="#">DP ID and bank details</a>
            </li>
            <li>
              <a href="#">Your Profile</a>
            </li>
            <li>
              <a href="#">Transfer and conversion of shares</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3 className="text-muted mb-5 fs-5"><i class="fa-solid fa-chart-area me-3"></i>Kite</h3>
          <ul className="listings">
            <li>
              <a href="#">Margin/leverage, Product and Order types</a>
            </li>
            <li>
              <a href="#">Kite Web and Mobile</a>
            </li>
            <li>
              <a href="#">Trading FAQs</a>
            </li>
            <li>
              <a href="#">Corporate Actions</a>
            </li>
            <li>
              <a href="#">Sentinel</a>
            </li>
            <li>
              <a href="#">Kite API</a>
            </li>
            <li>
              <a href="#">Pi and other platforms</a>
            </li>
            <li>
              <a href="#">Stockreports+</a>
            </li>
            <li>
              <a href="#">GTT</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col ">
          <h3 className="text-muted mb-5 fs-5"><i class="fa-solid fa-money-bill me-3"></i>Funds</h3>
          <ul className="listings">
            <li>
              <a href="#">Adding Funds</a>
            </li>
            <li>
              <a href="#">Fund Withdrawal</a>
            </li>
            <li>
              <a href="#">eMandates</a>
            </li>
            <li>
              <a href="#">Adding Bank Accounts</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3 className="text-muted mb-5 fs-5"><i class="fa-solid fa-circle-notch me-3"></i>Console</h3>
          <ul className="listings">
            <li>
              <a href="#">Reports</a>
            </li>
            <li>
              <a href="#">Ledger</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#" >60 Day Challenge</a>
            </li>
            <li>
              <a href="#">IPO</a>
            </li>
            <li>
              <a href="#">Referral Program</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3 className="text-muted mb-5 fs-5"><i class="fa-solid fa-coins me-3"></i>Coin</h3>
          <ul className="listings">
            <li>
              <a href="#">Understanding Mutual Funds</a>
            </li>
            <li>
              <a href="#">About Coin</a>
            </li>
            <li>
              <a href="#">Buying and Selling through Coin</a>
            </li>
            <li>
              <a href="#">Starting an SIP</a>
            </li>
            <li>
              <a href="#">Managing your Portfolio</a>
            </li>
            <li>
              <a href="#">Coin App</a>
            </li>
            <li>
              <a href="#">Moving to Coin</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
