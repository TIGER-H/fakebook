const router = require("express").Router();
const User = require("./models/User");
const bcrypt = require("bcrypt");

// update user
router.put("/:id", async (req, res) => {
  console.log(req.body);
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    // change password
    if (req.body.password) {
      try {
        const saltRounds = 10;
        req.body.password = await bcrypt.hash(req.body.password, saltRounds);
      } catch (error) {
        return res.status(500).json(error);
      }
    }
    // change account info
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("User info changed.");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    // can change your own account only
    return res.status(403).json("Access denied!");
  }
});
// delete user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted.");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("Access denied!");
  }
});

// lh:3000/users?username=test
// lh:3000/users?userId=2819hbxc
// get a user (using query)
router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username });
    // console.log(user._doc);有点意思
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});
// follow
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { following: req.params.id } });
        res.status(200).json("user has been followed.");
      } else {
        // already a follower(currentUser follows user)
        res.status(403).json("you already followed this user");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    // can't follow yourself!
    res.status(403).json("you cant follow yourself");
  }
});
// unfollow
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { following: req.params.id } });
        res.status(200).json("user has been unfollowed.");
      } else {
        // already a follower(currentUser follows user)
        res.status(403).json("hasn't follow this user yet");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    // can't follow yourself!
    res.status(403).json("you cant unfollow yourself");
  }
});

module.exports = router;
