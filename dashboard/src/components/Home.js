import React, { useEffect } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:4000/dashboard", {
          withCredentials: true,
        });

        console.log("User authenticated ✅");

      } catch (err) {
        console.log("Not authorized ❌");

        // 🔴 redirect to login
        window.location.href = "http://localhost:3000/login";
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
