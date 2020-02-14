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
router.post("/", (req, res) => {
  res.send("add question");
});

//update question
router.put("/:id", (req, res) => {
  res.send("update question ");
});
router.delete("/:id", (req, res) => {
  res.send("delete question  ");
});
module.exports = router;
