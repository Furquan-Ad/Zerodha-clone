import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 text-center ">
      <div className="row">
        <img
          src="media/images/homeHero.png"
          alt="Hero image"
          className="mb-5"
        />
        <h1 className="mt-5 ">Invest in evrything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more{" "}
        </p>
        <Link to="/signup">
          <button
            style={{ width: "15%", margin: "0 auto" }}
            type="button"
            className=" p-2 btn btn-primary fs-5 mb-5"
          >
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
