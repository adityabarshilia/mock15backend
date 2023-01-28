const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: String,
  score: Number,
});

const User = model("user", UserSchema);

module.exports = User;
