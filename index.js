const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user.route");
const quesRoute = require("./routes/question.route");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/user", userRoute);
app.use("/ques", quesRoute);
app.get("/", (req, res) => res.send("welcome"));

mongoose.connect("mongodb+srv://masthotel:masthotel@masthotel.orap6vu.mongodb.net/mock15?retryWrites=true&w=majority").then(() => {
  app.listen(3000, () => {
    console.log(`Server started on 3000`);
  });
});
