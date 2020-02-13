const express = require("express");

const router = express.Router();
//reigster a user & access
router.get("/", (req, res) => {
  res.send("get all questions");
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
