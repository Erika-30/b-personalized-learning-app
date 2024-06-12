const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  gradeLevel: { type: String, required: true },
  difficulty: { type: String, required: true },
  questionText: { type: String, required: true },
  options: [{ type: String }],
  correctAnswer: { type: String, required: true },
});

module.exports = mongoose.model("Question", questionSchema);
