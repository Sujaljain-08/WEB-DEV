const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/quizDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const QuestionSchema = new mongoose.Schema({
  level: Number,
  question: String,
  options: [String],
  answer: String,
});

const Question = mongoose.model("Question", QuestionSchema);

app.post("/get-question", async (req, res) => {
  console.log("req recived");
  const { emotions, answerStreak, responseTime } = req.body;

  // Compute difficulty factor (1-5)
  let difficultyFactor = Math.ceil(Math.min(5, Math.max(1, 3 + (answerStreak / 5) - (emotions.confused + emotions.sad)+emotions.happy)));
  console.log(difficultyFactor);

  // Fetch a question based on computed level
  const question = await Question.findOne({ level: Math.round(difficultyFactor) }).lean();

  res.json({ question });
});

app.listen(5000, () => console.log("Server running on port 5000"));