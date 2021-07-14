const router = require('express').Router();
const User = require('./models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10; // for bcrypt

// sign up
router.post('/signup', async (req, res) => {
  try {
    // const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

// login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json('user not found!');
    // validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json('wrong password.');
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;
