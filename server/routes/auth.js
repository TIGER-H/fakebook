const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10; // for bcrypt

// sign up
router.post("/signup", async (req, res) => {
  try {
    // const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const email = await User.findOne({ email: req.body.email });
    email && res.status(400).json(`Email:${email.email} 被占用！`);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      isAdmin: req.body.isAdmin || false,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found!");
    // validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("wrong password.");
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET,
      { expiresIn: "5d" }
    );
    const { password, ...info } = user._doc;
    res.status(200).json({ ...info, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
