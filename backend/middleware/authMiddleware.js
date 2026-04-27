// const jwt = require("jsonwebtoken");

// module.exports.verifyUser = (req, res, next) => {
//   const token = req.cookies.token;

//   if (!token) return res.status(401).json({ status: false });

//   jwt.verify(token, process.env.TOKEN_KEY, (err, data) => {
//     if (err) return res.status(401).json({ status: false });

//     req.userId = data.id;
//     next();
//   });
// };

const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  // read from Authorization header instead of cookie
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // "Bearer <token>"

  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { verifyUser };
