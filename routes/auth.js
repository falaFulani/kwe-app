const express = require("express");

const router = express.Router();
//reigster a user & access private
router.get("/", (req, res) => {
  res.send("get loggin users ");
});
//public

router.post("/", (req, res) => {
  res.send("log in user ");
});
module.exports = router;
