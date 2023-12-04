require("dotenv").config();
const post = process.env.POST_KEY;
const apiKey = process.env.API_KEY;
const allData = require("../Data/users/users");

const Post = (req, res) => {
  const data = req.body;
  if (!parseInt(req.query.post)) {
    res.status(401).json({
      massage: "Akses ditolak",
      status: 401,
    });
  } else {
    post != parseInt(req.query.post)
      ? res.status(401).json({
          massage: "Akses ditolak",
          status: 401,
        })
      : res.status(200).json({
          massage: "data diUpload",
        }),
      allData.push(req.body);
  }
};

const Get = (req, res) => {
  if (!parseInt(req.query.api_key)) {
    res.status(401).json({
      massage: "Akses ditolak",
      status: 401,
    });
  } else {
    req.query.api_key != apiKey
      ? res.status(401).json({
          massage: "Akses ditolak",
          status: 401,
        })
      : res.status(200).json(allData);
  }
};

module.exports = { Post, Get };
