import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const Signup = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
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
        "https://zerodha-clone-1-8l95.onrender.com",
        inputValue,
        { withCredentials: true }
      );

      if (data.success) {
        toast.success("Signup Successful");
        setTimeout(() => {
          window.location.href = "https://zerodha-clone-1-8l95.onrender.com";
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
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={handleOnChange} />
        </div>

        <div>
          <label>Username</label>
          <input type="text" name="username" onChange={handleOnChange} />
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={handleOnChange} />
        </div>

        <button>Signup</button>

        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>

      <ToastContainer />
    </div>
    </div>
  );
};

export default Signup;