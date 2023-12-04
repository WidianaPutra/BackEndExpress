const express = require("express");
const router = express.Router();
const productSelectedControlls = require("../controllers/productSelected");

router.get("/", (req, res) => productSelectedControlls.Get(req, res));
router.post("/", (req, res) => productSelectedControlls.Post(req, res));

module.exports = router;
