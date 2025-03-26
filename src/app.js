const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("hello from dashboard");
});

app.use("/hello", (req, res) => {
  res.send("hello from server");
});

app.listen(7777, () => {
  console.log("server is running");
});
