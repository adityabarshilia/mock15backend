const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
  category: String,
  type: String,
  difficulty: String,
  question: String,
  correct_answer: String,
  incorrect_answers: Array,
});

const Question = model("question", questionSchema);

module.exports = Question;
