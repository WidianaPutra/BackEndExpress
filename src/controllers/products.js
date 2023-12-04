require("dotenv").config();
const product = require("../Data/product/product");
const post = process.env.POST_KEY;
const apiKey = process.env.API_KEY;

const Get = (req, res) => {
  res.status(200).json({
    product,
  });
};

const GetById = (req, res) => {
  const params = parseInt(req.params.id);
  const data = product.find((data) => data.id === params);
  data
    ? res.status(200).json(data)
    : res.status(404).json({ massage: "Not Found", status: 404 });
};
module.exports = {
  Get,
  GetById,
};
