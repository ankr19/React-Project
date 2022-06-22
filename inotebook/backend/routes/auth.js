const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser");
const jwt_secret = "Anandisgoodcoder";
const router = express.Router();

// Route 1
//creating a user using Post "api/auth/createuser" doesn't required auth
router.post(
  "/createuser",
  [
    body("name", "enter a proper name").isLength({ min: 3 }),
    body("email", "enter a proper email").isEmail(),
    body("password", "enter the password more than 7").isLength({ min: 6 }),
  ],
  async (req, res) => {
    // if there are errors return bad request and the errors
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
      // creating the hashing code method
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // creating a new User
      user = await User.create({
        email: req.body.email,
        name: req.body.name,
        password: secPass,
      });
      // .then((user) => res.json(user))
      // .catch(error=> {console.log(error)
      // res.json({error: "Please enter a unique value for email", message: error.message})});

      // creating the token
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, jwt_secret);
     
      // res.json(user);
      res.json({ authtoken});
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some Error occured");
    }
  }
);

// route 2
// login a user using Post "api/auth/login"
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
          .json({ errors: "Please enter the Proper Creditial", success: success });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ errors: "Please enter the Proper Creditial",success: success });
      }

      const data = {
        id: user.id,
      };
      // creating the token
      const authtoken = jwt.sign(data, jwt_secret);
      success = true;
      // res.json(user);
      res.json({ authtoken, success });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server error");
    }
  }
);

// 3rd Router Get logging User Details using Post: "/api/auth/getUser" login required
router.post("/getuser", fetchuser, async (req, res) => {
  // if there are errors return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // checking whether the user exists or not
  try {
    var userId = req.user.id;
    const user = await User.findById(userId).select('-password');
    res.send(user);
    if (!user) {
      return res.status(400).json({ error: "Sorry a user already exists" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server error");
  }
});

module.exports = router;
