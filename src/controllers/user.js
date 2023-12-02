require("dotenv").config();
const post = process.env.POST_KEY;
const apiKey = process.env.API_KEY;
let allData = [];

const Post = (req, res) => {
  allData += req.body;
  if (!req.query.post) {
    parseInt(req.query.post) != post
      ? res.status(401).json({
          massage: "Error",
          status: 401,
        })
      : res.status(200).json({
          status: 200,
          data: req.body,
        });
  } else {
    res.status(401).json({
      massage: "Error",
      status: 401,
    });
  }
};

const Get = (req, res) => {
  if (!req.query.api_key) {
    parseInt(req.query.api_key) != apiKey
      ? res.status(401).json({
          massage: "Error",
          status: 401,
        })
      : res.status(200).json({
          status: 200,
          data: allData,
        });
  } else {
    res.status(200).json({
      status: 200,
      data: allData,
    });
  }
};

module.exports = { Post, Get };
