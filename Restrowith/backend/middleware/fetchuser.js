require("dotenv").config({ path: "./.env" });
var jwt = require('jsonwebtoken')
const jwt_secret = process.env.secret_jwt;

const fetchuser = (req, res, next) => {
  // get the user the jwt token and  add id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, jwt_secret);
    req.user = data;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
