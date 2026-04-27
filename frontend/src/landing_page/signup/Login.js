import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://zerodha-clone-1-8l95.onrender.com/login",
        inputValue,
        { withCredentials: true }
      );

      if (data.success) {
        toast.success("Login Successful");

        setTimeout(() => {
          window.location.href = "https://zerodha-clone-2-ccyx.onrender.com"; //  frontend 
        }, 1000);
      } else {
        toast.error(data.message || "Error");
      }
    } catch (err) {
      toast.error("Server Error");
    }
  };

  return (
    <div className="main">
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={handleOnChange} />
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={handleOnChange} />
        </div>

        <button>Login</button>

        <span>
          Don’t have an account? <Link to="/signup">Signup</Link>
        </span>
      </form>

      <ToastContainer />
    </div>
    </div>
  );
};

export default Login;