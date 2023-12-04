const productSelected = require("../Data/product/productSelected");

const Get = (req, res) => res.status(200).json({ productSelected });

const Post = (req, res) => {
  const data = req.body;
  if (!productSelected.find((e) => e.id === data.id)) {
    productSelected.push(data);
    res.status(200).json({ massage: "Successssss" });
  } else {
    res.status(401).json({ massage: "data sudah ada" });
  }
};

module.exports = {
  Get,
  Post,
};
