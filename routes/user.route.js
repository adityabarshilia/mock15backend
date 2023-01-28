const express = require("express");
const User = require("../models/user.model");
const app = express.Router();

app.post("/", async (req, res) => {
  const { name, score } = req.body;

  try {
    let user = await User.create({ name, score });
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.get("/", async (req, res) => {

  try {
    let users = await User.find({}).sort({score: -1});
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = app;
