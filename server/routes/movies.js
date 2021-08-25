const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../middleware/verifyToken");

// create new movie
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);
    try {
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access denied.");
  }
});

// update movie infomation
router.post("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedMovie);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access denied.");
  }
});

// delete
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("deleted!");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access denied.");
  }
});

// get
router.delete("/:id", verify, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get random
router.get("/random", verify, async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
