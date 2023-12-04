const express = require("express");
const router = express.Router();
const productControlls = require("../controllers/products");

router.get("/", (req, res) => productControlls.Get(req, res));
router.get("/:id", (req, res) => productControlls.GetById(req, res));

module.exports = router;
