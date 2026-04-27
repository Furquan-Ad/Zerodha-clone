import React, { useEffect } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {

  useEffect(() => {
    // ✅ grab token from URL if coming from login
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get("token");
    if (urlToken) {
      localStorage.setItem("token", urlToken);
      window.history.replaceState({}, "", "/"); // clean URL
    }

    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token");

        await axios.get("https://zerodha-clone-1-8l95.onrender.com/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ send token
          },
        });

        console.log("User authenticated ✅");
      } catch (err) {
        console.log("Not authorized ❌");
        // ✅ redirect to frontend login
        window.location.href = "https://zerodha-clone-2-ccyx.onrender.com/login";
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
