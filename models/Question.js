const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
  title: {
    type: String
  },
  descrption: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  type: {
    type: String,
    default: "multiple"
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("question", QuestionSchema);
