import React, { useEffect } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("https://zerodha-dashboard-m4gh.onrender.com", {
          withCredentials: true,
        });

        console.log("User authenticated ✅");

      } catch (err) {
        console.log("Not authorized ❌");

        // 🔴 redirect to login
        window.location.href = "https://zerodha-clone-1-8l95.onrender.com/login";
      }
    };

    checkAuth();
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
