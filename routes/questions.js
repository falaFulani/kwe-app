const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const Question = require("../models/Question");
const User = require("../models/User");
//reigster a user & access
router.get("/", auth, async (req, res) => {
  try {
    const question = await Question.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(question);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//add question
router.post(
  "/",
  [auth],
  [
    check("title", "Title cannot be empty")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, description, type } = req.body;
    try {
      const newQuestion = new Question({
        title,
        description,
        type,
        user: req.user.id
      });

      const question = await newQuestion.save();

      res.json(question);
    } catch (err) {
      console.error(er.message);
      res.status(500).send("Server Error");
    }
  }
);

//update question
router.put("/:id", (req, res) => {
  res.send("update question ");
});
router.delete("/:id", (req, res) => {
  res.send("delete question  ");
});
module.exports = router;
