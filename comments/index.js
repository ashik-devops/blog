const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const app = express();r
app.use(bodyParser.json());
const commentsByPostId = {};
app.get("posts/:id/comments", (req, res) => {
  res.send(posts);
});
app.post("posts/:id/comments", (req, res) => {
  res.status(201).send("hi");
});
app.listen(4001, () => {
  console.log("Listening on port 4001");
});
