require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const axios = require("axios");

const User = require("./model/User");
const { HoldingsModel } = require("./model/HoldingsModel.js");
const { PositionsModel } = require("./model/PositionsModel.js");
const { OrdersModel } = require("./model/OrdersModel.js");

const { createToken } = require("./util/token");
const { verifyUser } = require("./middleware/authMiddleware");

const app = express();
const PORT = process.env.PORT || 4000;
const uri = process.env.MONGO_URL;

// ================= MIDDLEWARE =================
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: function (origin, callback) {
      const allowedOrigins = [
        "http://localhost:3000",
        "http://localhost:3001",
        "https://zerodha-clone-2-ccyx.onrender.com",
        "https://zerodha-dashboard-m4gh.onrender.com",
      ];

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// ================= AUTH ROUTES =================

// Signup
app.post("/signup", async (req, res) => {
  try {
    const { email, password, username } = req.body;

    const user = await User.findOne({ email });
    if (user) return res.json({ message: "User exists" });

    const newUser = await User.create({ email, password, username });

    const token = createToken(newUser._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: true,
    });

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.json({ message: "Invalid credentials" });

    const token = createToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
    });

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});

// Dashboard (Protected)
app.get("/dashboard", verifyUser, async (req, res) => {
  const user = await User.findById(req.userId);

  res.json({
    username: user.username,
  });
});

// Logout
app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

// ================= HOLDINGS / POSITIONS =================

// 🔐 Protected now
app.get("/allHoldings", verifyUser, async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", verifyUser, async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// ================= ORDER LOGIC =================

// 🔐 Protected now
app.post("/newOrder", verifyUser, async (req, res) => {
  console.log("API HIT"); // 👈 ADD THIS

  try {
    const { name, qty, price, mode } = req.body;

    await OrdersModel.create({
      name,
      qty,
      price,
      mode,
      userId: req.userId,
    });

    res.send("Order saved");
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).send("Error");
  }
});

// 🔐 Protected now
app.get("/allOrders", verifyUser, async (req, res) => {
  try {
    console.log("TOKEN:", req.cookies.token); // 👈 ADD HERE
    console.log("USER ID:", req.userId);
    const orders = await OrdersModel.find({
      userId: req.userId, // 🔥 only this user
    });
    console.log("ORDERS:", orders);

    res.json(orders);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});

// ================= TEST ROUTES =================

app.get("/", (req, res) => {
  res.send("API running");
});

app.get("/test", (req, res) => {
  res.json("TEST OK");
});

// ================= DB CONNECT =================

mongoose
  .connect(uri)
  .then(() => console.log(" DB connected"))
  .catch((err) => console.log("❌ DB error:", err));

// ================= SERVER =================

app.listen(PORT, () => {
  console.log(` Server running on ${PORT}`);
});
