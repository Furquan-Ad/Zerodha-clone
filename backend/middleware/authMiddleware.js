const jwt = require("jsonwebtoken");

module.exports.verifyUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ status: false });

  jwt.verify(token, process.env.TOKEN_KEY, (err, data) => {
    if (err) return res.status(401).json({ status: false });

    req.userId = data.id; 
    next();
  });
};