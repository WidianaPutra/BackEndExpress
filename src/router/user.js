const express = require("express");
const router = express.Router();
const userControlls = require("../controllers/user");

router.get("/", (req, res) => userControlls.Get(req, res));
router.post("/", (req, res) => userControlls.Post(req, res));

module.exports = router;
