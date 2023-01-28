const express = require("express");
const Ques = require("../models/question.model");
const app = express.Router();

app.post("/", async (req, res) => {
  const { category, difficulty, limit } = req.body;

  try {
    let ques = await Ques.find({ category, difficulty }).limit(limit);
    res.status(200).send(ques);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = app;
