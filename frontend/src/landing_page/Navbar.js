import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [isAuth, setIsAuth] = useState(false);

  // check login
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token"); // ✅ get token
        if (!token) return setIsAuth(false);

        const res = await axios.get(
          "https://zerodha-clone-1-8l95.onrender.com/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`, // ✅ send token
            },
          },
        );

        if (res.data) {
          setIsAuth(true);
        }
      } catch (err) {
        setIsAuth(false);
      }
    };

    checkAuth();
  }, []);

  // logout
const handleLogout = () => {
  localStorage.removeItem("token");
  setIsAuth(false);
  window.location.href = "https://zerodha-clone-2-ccyx.onrender.com"; // ✅ no /login
};

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light border-bottom">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="/media/images/logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* 🔴 NOT LOGGED IN */}
            {!isAuth && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}

            {/* 🟢 LOGGED IN */}
            {isAuth && (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://zerodha-dashboard-m4gh.onrender.com"
                  >
                    Dashboard
                  </a>{" "}
                </li>

                <li className="nav-item">
                  <button className="nav-link btn" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}

            {/* COMMON LINKS */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
