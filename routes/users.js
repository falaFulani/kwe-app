const express = require("express");

const router = express.Router();
//reigster a user & access
router.post("/", (req, res) => {
  res.send("register user");
});

module.exports = router;
