express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./.env" });
// going to add the fetchuser
var fetchuser = require("../middleware/fetchuser");

const jwt_secret = process.env.secret_token;

const router = express.Router();

// Route 1
// creating a user using Post "api/auth/createuser"
router.post(
  "/createuser",
  [
    body("name", "enter a proper name").isLength({ min: 3 }),
    body("email", "enter a proper email").isEmail(),
    body("password", "enter the password more then 7 length").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    // if there are error return request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // checking whether the user exists or not
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "Sorry a user already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // creating a new user
      user = await User.create({
        email: req.body.email,
        name: req.body.name,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, jwt_secret);
      res.json({ authtoken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some Error occured");
    }
  }
);

// route 2
// creating a user using Post "api/auth/login"
router.post(
  "/login",
  [
    body("email", "enter a proper ").isEmail(),
    body("password", "Enter the Proper Creditial").exists(),
  ],
  async (req, res) => {
    // if there are errors return bad request and the errors
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: "Please enter the Proper Creditial" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ errors: "Please enter the Proper Creditial" });
      }

      const data = {
        id: user.id,
      };
      // creating the token
      const authtoken = jwt.sign(data, jwt_secret);
      success = true;
      // res.json(user);
      res.json({ success, authtoken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server error");
    }
  }
);


module.exports = router;
