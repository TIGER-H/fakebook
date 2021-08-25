const jwt = require("jsonwebtoken");

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

const verify = (req, res, next) => {
  const token = getTokenFrom(req);
  if (!token) {
    res.status(403).json("Not authenticated!");
  }
  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) res.status(403).json("token wrong");
    req.user = user;
    next();
  });
};

module.exports = verify;
