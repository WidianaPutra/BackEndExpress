const express = require("express");
const router = express.Router();
const UI = require("../ui/ui");

router.get("/", (req, res) => {
  res.send(UI);
});

module.exports = router;
